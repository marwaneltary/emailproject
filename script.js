function emailOFUserName(){
    var name = document.getElementById("email").value;
    document.getElementById("sheet").innerHTML = `welcome ${name}`;
}