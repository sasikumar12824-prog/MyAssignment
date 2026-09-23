
import { chromium, test} from "@playwright/test"


test('learn to launch the browser', async ({page}) => {

   await page.goto("https://leafground.com/frame.xhtml;jsessionid=node0dvep45j10i511s8p873js2zdo203475.node0")


   let Allframes = page.frames()
   
   //no of frames presented in the page
   let framescount = Allframes.length
   console.log(framescount); //5 actual 4 but by dafault page is 1 so 5

   //to print all frames 
   for(let index=0; index<framescount; index++)
   {
    console.log(await Allframes[index].url);
    
   }

   //using index
  const frame1= Allframes[1]

  await frame1.locator('#Click').click()

  //nested frame
  const frame4 = Allframes[4]

   await frame4.locator('#Click').click()

   
})