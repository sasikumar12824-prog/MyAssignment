

//print number that are devisible by 5 from 1 to 50


for(let i = 1; i<=50; i++)
{
        let values = i%5
        if(values==0)
        {
          console.log(i+"%5="+values);
        }    
}