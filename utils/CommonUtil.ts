import crypto from 'crypto';



export default class CommonUtils{
    private algo = "aes-256-cbc";
    private key:Buffer;
    

    constructor(){
        if(!process.env.SECRET_KEY){
        throw new Error("SECRET_KEY is not defined in env");
       }

       this.key =crypto
       .createHash("sha256")
       .update(process.env.SECRET_KEY)
       .digest();
    }

    public encryptedData(text: string): string{
       const iv = crypto.randomBytes(16);

       const cipher = crypto.createCipheriv(
        this.algo,
        this.key,
        iv
       );

       const encrypted = Buffer.concat([
        cipher.update(text,'utf8'),
        cipher.final()
       ]);
         return iv.toString("hex")+":"+encrypted.toString("hex");
    }

    public decryptedData(encryptedText: string): string{
     const [ivHex, encryptedHex] =encryptedText.split(":");
     const iv = Buffer.from(ivHex,"hex");
      const encryptedData = Buffer.from(encryptedHex, "hex");

     const decipher = crypto.createDecipheriv(
        this.algo,
        this.key,
        iv
     );

     const decrypted = Buffer.concat([
       decipher.update(encryptedData),
       decipher.final()

     ]);

     return decrypted.toString('utf-8');
    }
}