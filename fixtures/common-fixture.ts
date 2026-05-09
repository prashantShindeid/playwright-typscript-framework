import {test as baseTest} from '../fixtures/pom-fixture'
import CommonUtils from '../utils/CommonUtil'

type CommonFixture ={
    commonUtils : CommonUtils
}

export const test = baseTest.extend<CommonFixture>({
    commonUtils: async({ },use)=>{
        await use(new CommonUtils())
    }
});


