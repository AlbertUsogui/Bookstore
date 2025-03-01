// tv =[{title:"Akiy's TV", image:"Tv1 (1).png", desc:"Rating : ⭐4.8", text:"Purchases : 💵100M"},
//     {title:"Baku's TV", image:"Tv2.png", desc:"Rating : ⭐5.0 ⭐", text:"Purchases : 💵150M"},
//     {title:"Toku's TV", image:"Tv3.png", desc:"Rating : ⭐4.7", text:"Purchases : 💵200M "},
//     {title:"Akagi's TV", image:"Tv4.png", desc:"Rating : ⭐4.9", text:"Purchases : 💵75M"},
//     {title:"Jane's TV", image:"Tv5.png", desc:"Rating : ⭐4.85", text:"Purchases : 💵150M"},
//     {title:"Ron's TV", image:"Tv6.png", desc:"Rating : ⭐4.45", text:"Purchases : 💵25M "}
// ]


// function btn(){
//     let group1 = document.getElementById("group1");
//     let pick = document.getElementById("pilih").value;
//     let pick1 = document.getElementById("pilih1").value;
//     let pick2 = document.getElementById("pilih2").value;
//     let indexItems = parseInt(pick)
//     let indexItems1 = parseInt(pick1)
//     let indexItems2 = parseInt(pick2)
//     let text1 = document.getElementById("text1");
//     let text2 = document.getElementById("text2");
//     let text3 = document.getElementById("text3");
//     let text4 = document.getElementById("text4");
//     let text5 = document.getElementById("text5");
//     let text6 = document.getElementById("text6");
//     let list = tv[indexItems];
//     let list1 = tv[indexItems+3];
//     let listt = tv[indexItems];
//     let listt1 = tv[indexItems+3];
//     let listtt = tv[indexItems];
//     let listtt1 = tv[indexItems+3];
//     text1.textContent=list.title;
//     text2.textContent=list.desc;
//     text3.textContent=list.text;
//     text4.textContent=list1.Title;
//     text5.textContent=list1.Desc;
//     text6.textContent=list1.text;
    
// } 



function timee(){
    let time = document.getElementById("time");
    let now = new Date();
    let hour = now.getHours();
    let minute =  now.getMinutes();
    let second =  now.getSeconds();
    const newtext = `${hour}.${minute}.${second}`
    time.textContent = newtext

}

setInterval(timee, 1000);
timee();