import {test}  from "@playwright/test";


test.describe('group: lead management tab',{tag:'@crmlead'}, ()=>{

test.describe.configure({mode: 'serial', retries: 1})
//serial - one by one execution of test cases - serial, retries - 1 time if failed

    //this only will executed
    test.only('Create lead', async({page})=>{

        await page.goto('https://leaftaps.com/opentaps/control/main')
        console.log("lead creation is success");    
    })

    //this will be skipped
    test.fixme('edit lead', async({page})=>{

        await page.goto('https://leaftaps.com/opentaps/control/main')
        console.log("lead edit is success");    
    })

    //this will be failed - somewhat failed this test
    test.fail('delete lead', async({page})=>{

        await page.goto('https://leaftaps.com/opentaps/control/main')
        console.log("lead delete is success");    
    })

    //this will be executed with extra timeout - default 30000 - this will be times slower
    test('slower test', async({page})=>{

        test.slow()
        console.log("this is slower test", test.info().timeout);
        await page.goto('https://leaftaps.com/opentaps/control/main')
        console.log("lead delete is success");    
    })


})