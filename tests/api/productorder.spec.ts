import { test, expect } from "../../fixtures/hooks-fixture";
import apiPathData from "../../test-data/api-testdata/api-path-data.json";
import apiPayloadData from "../../test-data/api-testdata/api-data.json";

test.describe.configure({ mode: 'serial' });


let token: string;
let orderId: string;
let productId:string;

test.beforeAll(async ({ request }) => {

    const loginResponse = await request.post(
        process.env.BASE_URL + apiPathData.loginpath,
        {
            data: apiPayloadData.loginpayload
        }
    );

    const loginResponseJson = await loginResponse.json();

    expect(loginResponse.status()).toBe(200);
    expect(loginResponseJson.message).toBe("Login Successfully");

    token = loginResponseJson.token;

    console.log("TOKEN => ", token);
});

test('Add product to cart API test', {
    tag: ['@API', '@UAT']
}, async ({ request }) => {

   

    // Add To Cart API
    const response = await request.post(
        process.env.BASE_URL + apiPathData.addtocartpath,
        {
            headers: {
                Authorization: token,
                "Content-Type": "application/json"
            },
            data: apiPayloadData.addtocartpayload
        }
    );

    // Response
    const responseBody = await response.json();

    console.log("Status Code => ", response.status());
    console.log("Response Body => ", responseBody);

    // Assertions
    expect(response.status()).toBe(200);
    expect(responseBody.message).toContain("Product Added To Cart");
});

test('Place order API test',{tag: ['@API', '@UAT']}, async ({ request }) => {

  


    const response = await request.post(
        process.env.BASE_URL+apiPathData.createorderpath,
        {
            headers:{
                Authorization:token,
                "Content-Type":"application/json"
            },
            data: apiPayloadData.placeorderpayload
        }
    );
    const createOrderResponse = await response.json();
    console.log("Status Code => ", response.status());
    console.log("Response Body => ", createOrderResponse);
    productId = createOrderResponse.productOrderId[0];
    // Assertions
    expect(response.status()).toBe(201);
    expect(createOrderResponse.message).toContain("Order Placed Successfully");
    orderId = createOrderResponse.orders[0];
    console.log("ORDER ID => ", orderId);
});
test('Get order API test', { tag: ['@API', '@UAT'] }, async ({ request }) => {

    const response = await request.get(
        process.env.BASE_URL + `${apiPathData.getorderpath}${orderId}`,
        {
            headers: {
                Authorization: token,
                "Content-Type": "application/json"
            }
        }
    );

    console.log("Status Code => ", response.status());

    // Convert response
    const getOrderResponse = await response.json();

    console.log("Response Body => ", getOrderResponse);

    // Assertions
    expect(response.status()).toBe(200);
   // expect(getOrderResponse.data._id).toBe(orderId);
});

test('Delete order API test',{tag: ['@API', '@UAT']}, async ({ request }) => {
    const response = await request.delete(
        process.env.BASE_URL+`${apiPathData.deleteorderpath}${orderId}`,
        {
            headers: {
                Authorization: token
            }
        });
    const deleteOrderResponse = await response.json();
    console.log("Status Code => ", response.status());
    console.log("Response Body => ", deleteOrderResponse);
 });