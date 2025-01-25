let username = document.getElementById("user").value;
let email = document.getElementById("email").value;
let password = document.getElementById("pass").value;
let conpassword = document.getElementById("conpass").value;
let usertext1 = document.getElementById("text1");
let usertext2 = document.getElementById("text2");
let usertext3 = document.getElementById("text3");
let usertext4 = document.getElementById("text4");
let passcheck = true;
// let passcheck1 = true;
// let passcheck2 = true;
// let passcheck3 = true;

// function button(){
    // if (username == "" ){
    //     usertext1.textContent = "Username must be filled";
    //     passcheck = false;
    // } 
    // // else{
    // //     usertext1.textContent = ""
    // //     passcheck = true ;
    // // }

    // if (email == ""){
    //     usertext2.textContent = "Email must be filled";
    //     passcheck = false;
    // }
    // // else{
    // //     usertext2.textContent = ""
    // //     passcheck = true;
    // // }

    // if (password.length < 7){
    //     usertext3.textContent = "Password must be 8 characters";
    //     passcheck=false
    // }

    // if (conpassword.length < 7){
    //     usertext4.textContent = "Confirm password =/= password";
    //     passcheck=false
    // }

    
    // // else{
    // //     usertext3.textContent = ""
    // //     passcheck = true;
    // // }
    
    // if (password !== password){
    //     usertext4.textContent = "Confirm password =/= password";
    //     passcheck =false;
    // }
    // // if (conpassword === password){
    // //     usertext4.textContent = ""
    // //     passcheck = true;
    // // }
    // // else{
    // //     usertext4.textContent ="confirm password does not match";
    // // }
    
    // // if (passcheck){
    // //     alert ("Sign up complete");
    // // }

    

    

function button(){
    localStorage.setItem("nama","agriffa")
    let name = localStorage.getItem("nama")
    console.log(name);
    // if (username == "" ){
    //     usertext1.textContent = "Username must be fild";
    //     passcheck = false;
    // } 
    // if (password.length < 7){
    //     usertext3.textContent = "Password must be 8 characters";
    //     passcheck=false
    // }
    // if (passcheck){
    // alert ("Sign up complete");
    // }
}

// localStorage berfungsi untuk menyimpan data yang diambil dari sebuah inputan dan disimpan secara sementara
// 1. localStorage.setItem("key","data"):
//  untuk key harus bernilai string, untuk datanya bebas
//  2. localStorage.getItem("key")
