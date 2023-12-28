function joinClick(){
    var inputEmail = document.getElementById("addEmail");
    var inputName = document.getElementById("name"); 
    var inputId = document.getElementById("id");
    var inputPw = document.getElementById("pwd");

    var email = inputEmail.value;
    var name = inputName.value;
    var id = inputId.value;
    var pw = inputPw.value;

    

    if(phNum.length==11){
        if(email.includes('@')){
        document.getElementById("addEmail")="phNum";
        document.getElementById("addEmail")="email";
        alert('가능');
        }else{
        document.getElementById("addEmail")=null;
        alert("다시 입력해주세요.");
    } 
} 
else{
    alert('양식에 맞게 입력');
}
}