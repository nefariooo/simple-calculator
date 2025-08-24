const calc = {
    num1 : "",
    num2 : "",
    operator : "",
    result: "",
    isFirstNumInserted: false
}

document.querySelectorAll("#numkey").forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        if(!calc.isFirstNumInserted)
        calc.num1 += btn.dataset.value;
        else
        calc.num2 += btn.dataset.value;
        console.log("num1: "+calc.num1);
        console.log("num2: "+calc.num2);
    })
});

document.querySelectorAll("#operator").forEach((operator)=>{
    operator.addEventListener("click",()=>{
        calc.operator = operator.dataset.value;
        calc.isFirstNumInserted = true;
    })
})

document.querySelector("#btn-equal").addEventListener("click", ()=>{
    if(calc.num1 && calc.num2){
        const x = Number(calc.num1);
        const y = Number(calc.num2);
        
        if(calc.operator === "add")
            calc.result = String(x+y);
        if(calc.operator === "subtract")
            calc.result = String(x-y);
        if(calc.operator === "multiply")
            calc.result = String(x*y);
        if(calc.operator === "divide")
            if(y != 0)
                calc.result = String(x/y);
            else
                calc.result = "MATH ERROR";
        console.log(calc.result);
    }
    reset();
})

document.querySelector("#btn-reset").addEventListener("click", reset());

function reset(){
    calc.num1 = "";
    calc.num2 = "";
    calc.isFirstNumInserted = false;
    calc.operator = "";
    calc.result = "";
}