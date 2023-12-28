const btn = document.querySelector(".loginBtn");
btn.addEventListener("click",function(e){
    const inputId = document.querySelector('.id').value;
    const inputPw = document.querySelector('.pwd').value;
    if(inputId.includes('@') && inputPw.length > 10){
        document.querySelector(".loginBtn").style.background = "rgb(46, 184, 223)";
    }else{
        alert("이메일을 입력해 주세요");
        document.querySelector(".loginBtn").style.background= "default";    
    }
    return false; 
});