
function singup(){
//regular expression(regex)
// /(garis miring buka), /(garis miring tutup)regex ==> sebuah kode atau sebunah pattern untuk mengatur sesuatu.
// pattern untuk email :/^[^ ]+@[^ ]+\.[a-z]{2,3}$/
// fungsi:
// //==penandaan regex
// //^ == anchor yang menandakan harus dimulai dari string. Artinya, pola itu diawali harus string
// //[]: kurung siku untuk menjukan hal yang boleh atau engga muncul
// //^: mendakan tidak boleh jika terdapat didalam kurung siku
// //\. == menandaan ada tanda titik yang wajib diberikan, garis miring itu untuk mencocokan.
// //[a-z]{2,3}==>caracter berjumlah 2-3 example : ".com",".org",".id"

 
 let username = document.getElementById("user").value;
 let password = document.getElementById("pass").value;
 let email = document.getElementById("email").value;
 let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
 let confirm = document.getElementById("conpass").value;
 let text1 = document.getElementById("text1");
 let text2 = document.getElementById("text2");
 let text3 = document.getElementById("text3");
 let text4 = document.getElementById("text4");
 let check = true;
 

 
 if (username === ""||email === "" ||password === ""){
    text1.textContent = "Username Must Be Filled ";
    text2.textContent = "Email Must Be Filled ";
    text3.textContent = "Password Must Be Filled ";
   check = false;
   
}else if (password != confirm) {
   text4.text4.textContent ="Password =/= Confirm Password";
   check = false
  }
  else{
     text1.textContent = "";
     text2.textContent = "";
     text3.textContent= "";
     check = true;
   }
   
   if (password.length < 8 ){
      text3.textContent = " Password Must be 8 letters or more ";
      check = false;
   }
   
   if(!email.match(emailPattern)){
     text2.textContent = "Email Does Not Exist";
     check= false;
   }
//  if (password === confirm){
//     text4.textContent ="";
//     check = true
//  }else{
//     text4.textContent ="Password =/= Confirm Password";
//     check = false
//  }

if (check){
 alert("Sign up Done")
 localStorage.setItem("username",username)
 localStorage.setItem("password", password)
 localStorage.setItem("email", email)
 window.location.href = "login.html"
}
 

}
console.log("test")
function data(){
    let name = localStorage.getItem("username");
    let pass = localStorage.getItem("password");
    let mail = localStorage.getItem("email");
    let loguser = document.getElementById("loguser").value;
    let logpass = document.getElementById("logpass").value;
    let logmail = document.getElementById("logemail").value;
    
    if (loguser === name && logpass === pass && logmail === mail){
     alert("Login Done");
     window.location.href = "../bookstore/bookstore.html"
    }else{
      alert("Error Wrong Password Or Email Or Username")
    }
}
