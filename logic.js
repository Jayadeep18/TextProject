let btn = document.getElementById("text")
let btn_cpy = document.getElementById("Copy");
let btn_cap = document.getElementById("Capitalize");
let btn_uc = document.getElementById("Uppercase");
let btn_lc = document.getElementById("Lowercase");
let btn_ext = document.getElementById("Extraspace");
let btn_clr = document.getElementById("Clear");
let btn_fth = document.getElementById("Fetch");
let btn_rst=document.getElementById("Reset");
let btn_cbx=document.getElementById("checkbox");

let val = btn.value;
// txt.addEventListener('')
console.log(val.length)
// let brk=1;
btn_rst.addEventListener('click', function (){
    //console.log("in vis");
    btn_fth.style.visibility = 'visible';
    btn_clr.click();
    document.getElementById("finaltext").innerHTML="";
    document.getElementById("Count").innerHTML="";
    
});

btn_cap.addEventListener('click', function () {
    let prop = btn.value;
    prop=prop.toLowerCase();
    let ans = "" + prop[0].toUpperCase();
    console.log(prop);
    let index = 1;
    while (index < prop.length) {
        if (prop[index] != " " && prop[index - 1] == " ") {
            ans += prop[index].toUpperCase();
        }
        else {
            ans += prop[index];
        }
        index++;
    }
    btn.value = ans;
});

btn_uc.addEventListener('click', function () {
    let uc = btn.value.toUpperCase();
    btn.value = uc;
});

btn_lc.addEventListener('click', function () {
    let lc = btn.value.toLowerCase();
    btn.value = lc;
});

btn_clr.addEventListener('click', function () {
    btn.value = "";
});

btn_ext.addEventListener('click', function () {
    let ext = btn.value.replace(/\s+/g, ' ').trim();
    btn.value = ext;
});

btn_cpy.addEventListener('click', function () {
    let cpy = btn;
    cpy.select();
    document.execCommand("copy");
});

btn_fth.addEventListener('click', function () {
    let val = btn.value;
    let sizect = val.length;
    console.log(sizect);
    btn_fth.style.visibility = 'hidden';
    //document.getElementById("Count").value = sizect;
    let to = (2 / sizect);
    console.log(to);
    const myInterval = setInterval(myTimer, to * 1000);
    let c = 0;
    function myTimer() {
        if (c == sizect+1) {
            document.getElementById("finaltext").innerHTML="Yay!This is your text size";
            clearInterval(myInterval);
        }
        else{
            document.getElementById("Count").innerHTML = c;
            c++;   
        }
             
    }
});

btn_cbx.addEventListener('click',function(){
    let btn=document.getElementById("clk");
    btn.click();
});
