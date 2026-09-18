

//Strict way to use 

let apiResponse:any = "ok"
apiResponse=200

console.log(apiResponse);


//Type assertion using<>
let response =<string>apiResponse

//using "as string" => most used
let response1=apiResponse as string

//using "!" => most used
let response2=apiResponse!

console.log(response, typeof response);
console.log(response1, typeof response1);
console.log(response2, typeof response2);





