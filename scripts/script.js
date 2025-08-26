const calc = {
    num1 : "",
    num2 : "",
    operator : "",
    result: "",
    isFirstNumInserted: false
}
const display = document.querySelector("#result");
const body = document.querySelector("body");
const themes = document.querySelectorAll("input[name='theme']");

document.querySelectorAll("#numkey").forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        checkLimit();
        if(!calc.isFirstNumInserted && calc.num1.length<12){
            calc.num1 += btn.dataset.value;
            display.innerHTML = calc.num1;
        }
        else if(calc.isFirstNumInserted && calc.num2.length<12){
            calc.num2 += btn.dataset.value;
            display.innerHTML = calc.num2;
        }
        console.log("num1: "+calc.num1);
        console.log("num2: "+calc.num2);
       
    })
});
function checkLimit(){
    if(!calc.isFirstNumInserted && calc.num1.length>=12)
        console.log("num1 limit reached");
    else if(calc.num2.length>=12)
        console.log("Number 2 limit reached");
}

document.querySelectorAll("#operator").forEach((operator)=>{
    operator.addEventListener("click",()=>{
        calc.operator = operator.dataset.value;
        display.innerHTML = calc.num1 + calc.operator;
        calc.isFirstNumInserted = true;
    })
})

document.querySelector("#btn-equal").addEventListener("click", ()=>{
    if(calc.num1 && calc.num2){
        const x = Number(calc.num1);
        const y = Number(calc.num2);
        
        if(calc.operator === "+")
            calc.result = String(x+y);
        if(calc.operator === "-")
            calc.result = String(x-y);
        if(calc.operator === "*")
            calc.result = String(x*y);
        if(calc.operator === "/")
            if(y != 0)
                calc.result = String(x/y);
            else
                calc.result = "MATH ERROR";
        console.log(calc.result);
    }
    reset(0);
})

document.querySelector("#btn-reset").addEventListener("click", ()=>{
    reset(1);
});

document.querySelector("#btn-del").addEventListener("click",()=>{
    if(!calc.isFirstNumInserted){
        calc.num1 = calc.num1.slice(0,-1);
        display.innerHTML = calc.num1;
    }
    else{
        calc.num2 = calc.num2.slice(0,-1);
        display.innerHTML = calc.num2;
    }

})

function showReslt(){
    
    if(calc.result.length > 12){
        display.classList.add("text-2xl");
        display.classList.add("tab:text-4xl");
        display.classList.remove("tab:text-6xl");
        display.classList.remove("text-4xl");
    }

        display.innerHTML = calc.result;
}

function reset(flag){
    flag ? display.innerHTML = "0" : showReslt();
    calc.num1 = "";
    calc.num2 = "";
    calc.isFirstNumInserted = false;
    calc.operator = "";
    if(flag) calc.result = "";
}

function applyTheme(selectedTheme){
    body.classList.remove("theme-1", "theme-2", "theme-3");
    body.classList.add(selectedTheme);
    localStorage.setItem("theme", selectedTheme);

    const selectedRadio = document.querySelector(`input[data-value='${selectedTheme}']`);
    if(selectedRadio) selectedRadio.checked = true;

}

themes.forEach((theme)=>{
    theme.addEventListener("change",()=>{
        if(theme.checked){
            applyTheme(theme.dataset.value);
        }
    })
})

window.addEventListener("DOMContentLoaded", () => {
    let savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        applyTheme(savedTheme);
        
    }else{
        if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            applyTheme("theme-1");
        }else{
            applyTheme("theme-2");
        }
    }
});