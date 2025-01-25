book =[{judul:"Ron Kamonohashi",image:"Book9.jpeg" , description:"Ron Kamonohashi: Deranged Detective is a mystery manga series by Akira Amano. The story follows Ron Kamonohashi, a brilliant but eccentric private detective with a dark past, and Totomaru Isshiki, a naive yet determined rookie police officer. Together, they form an unconventional duo, solving bizarre and complex cases."}
    ,{judul:"Ukai Zero",image:"Book5.jpg", description:"Gambling Emperor Zero (Tobaku Haōden Zero) is a psychological thriller manga by Nobuyuki Fukumoto, the creator of Kaiji. The story follows Ukai Zero, a young man with extraordinary intelligence, sharp observation skills, and a strong moral compass. Unlike typical gamblers, Zero uses his talents not for personal gain but to help others and bring justice."},
    {judul:"Monster",image:"Book7.jpg", description:"Monster is a psychological thriller manga by Naoki Urasawa that delves into morality, identity, and the consequences of choices. The story follows Dr. Kenzo Tenma, a brilliant neurosurgeon whose life spirals out of control after he saves the life of a young boy, Johan Liebert, over a prominent politician."},
    {judul:"Usogui",image:"Book1.png", description:"Usogui follows Baku Madarame, a genius gambler who participates in high-stakes. Using manipulation, deception, and sharp insight, he aims to outsmart opponents and seize control of Kagerou, mastering psychological warfare and strategy."}
,{judul:"Dr Frost", image:"Book4.jpeg", description:"Dr. Frost is a South Korean webtoon by Lee Jong-beom that explores the complexities of human psychology and emotions. The story follows Dr. Frost, a brilliant but emotionally detached psychologist with an extraordinary ability to analyze and understand people's minds."}]
book1 = [{judul:"Climber", image:"Book6.jpg",description:"The Climber (Kokou no Hito), based on the novel by Jirō Nitta and adapted into manga by Shinichi Sakamoto, is a gripping story of passion, solitude, and the relentless pursuit of greatness. The story follows Mori Buntarou, a quiet and introverted high school student who discovers his natural talent for rock climbing."},
    {judul:"Tomodachi Game", image:"Book8.jpg",description:"Tomodachi Game is a psychological thriller manga by Mikoto Yamaguchi and Yuki Sato that explores trust, betrayal, and the darker side of human relationships. The story follows Yuuichi Katagiri, a kind and intelligent high school student who values his friends above all else."},
    {judul:"Kaiji Ultimate Survivor", image:"Book10.jpg",description:"Kaiji: Ultimate Survivor (Tobaku Mokushiroku Kaiji), based on the manga by Nobuyuki Fukumoto, is a psychological thriller anime that dives into the desperate world of high-stakes gambling. The story follows Kaiji Itou, an aimless and debt-ridden young man who is lured into a series of deadly gambling games by shady loan sharks."},
    {judul:"Akagi", image:"Book3.jpeg",description:"Akagi (Touhai Densetsu Akagi), created by Nobuyuki Fukumoto, is a psychological thriller that revolves around high-stakes mahjong and the genius of its titular character, Shigeru Akagi. The story begins with a young Akagi stumbling into an underground mahjong game and astonishing everyone with his fearless tactics and extraordinary psychological insight."},
    {judul:"Liar Game", image:"Book2.png",description:"Liar Game is a psychological thriller manga by Shinobu Kaitani that centers on high-stakes games of deception, trust, and manipulation. The story follows Nao Kanzaki, a kind-hearted and naive young woman who is suddenly thrust into the mysterious Liar Game, a competition where players must deceive and outwit each other to win large sums of money."}]



    
function btn(){
    let select = document.getElementById("pilih").value;
    let indexItems= parseInt(select)
    let text = document.getElementById("text");
    let image = document.getElementById("image");
    let description = document.getElementById("desc");
    let description1 = document.getElementById("desc1");
    let image1 = document.getElementById("image1");
    let text1 = document.getElementById("text1");
    let list=book[indexItems];
    let list1=book1[indexItems]
    text.textContent=list.judul;
    image.src=list.image;
    description.textContent=list.description;
    text1.textContent=list1.judul;
    image1.src=list1.image;
    description1.textContent=list1.description;
    let button = document.getElementById("flex");
    button.style.display="flex";
}

// let car=["honda","toyota","mercy"]
// // console.log(car[3])
// // for(let i=0;i<car.length;i++){
// //     // console.log("angka="+car[i])
// //     console.log("mobil ke"+[i+1]+car[i])
// // }
// car.forEach(function(e,i){
//     console.log("mobil ke"+(i+1)+":"+e);
// })

// let buah = ["apel", "jeruk", "anggur"]
// buah.forEach(function(e,i){
//     console.log("buah ke"+[i+1]+":"+e)
// })


