let form = document.querySelector('form');
form.addEventListener('submit',function(e){
	e.preventDefault();
let inp1=parseInt(document.querySelector("#number1").value);
let inp2=parseInt(document.querySelector("#number2").value);
let inp3=parseInt(document.querySelector("#number3").value);
let result = document.querySelector('#result');

    if((inp1>inp2)&& (inp1>inp3)){
         if(inp2>inp3){
            result.innerHTML=`${inp3},${inp2},${inp1}`
         }
    }
    else if((inp2>inp3)&& (inp2>inp1)){
        if(inp3>inp1){
            result.innerHTML=`${inp1},${inp3},${inp2}`
        }
   }
   else if((inp3>inp1)&& (inp3>inp2)){
    if(inp1>inp2){
        result.innerHTML=`${inp2},${inp1},${inp3}`
    }
}
    else{
        result.innerHTML="Enter The Number";
    }
});