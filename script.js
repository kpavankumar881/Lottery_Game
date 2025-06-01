const result=document.getElementById("para");
const button1=document.getElementById("button1");
const final_box=document.getElementById("semi");
const tick1=new Audio("timer.wav");
const tick2=new Audio("winning.wav");
const buttontick=new Audio("button.wav");
let arr=[
    "100 Cash",
    "Toy Car",
    "Chocolate Box",
    "500 cash",
    "Smartphone Cover",
    "Book",
    "HeadPhone",
    "50 Cash",
    "Gift Voucher",
    "Watch",
    "Teddy Bear",
    "Bluetooth Speaker",
    "Movie Ticket",
    "200 Cash",
    "Puzzle Game",
    "perfume",
    "Sunglasses",
    "1000 cash",
    "Board Game",
    "Fitness Band",
    "Digital Clock",
    "Lamp",
    "Shopping voucher",
    "Laptop",
    "Wireless",
    "Travel Mug",
    "Notebook Set",
    "Gaming Mousepad",
    "250 Cash",
    "Keychain",
    "Water Bottle",
    "portable charger",
    "Desk Organizer",
    "Cooking set",
    "Action figure",
    "300 Cash",
    "Travel Pillow",
    "Mini Backpack",
    "Personalized",
    "Gaming Controller",
    "Camera Strap",
    "Toy Robot",
    "750 Cash",
    "Sports Equipment",
    "Pen Set",
    "Bluetooth",
    "Digital Photo Frame",
    "Wallet",
    "BacKpack",
    "gift hamper"
];
button1.addEventListener("click",function(){
    for(let i=1;i<=50;i++){
        document.getElementById(i).classList.remove("box1");
    }
    buttontick.play();
    tick1.play();
    let n=Math.round(Math.random()*50);
    let ele=arr[n-1];
    result.textContent="Please wait.....";
    setTimeout(function(){
        for(let i=1;i<=50;i++){
            document.getElementById(i).classList.remove("waitingBox");
        }
        document.getElementById(n).classList.add("box1");
        result.textContent=`your number is ${n} so, got ${ele}`; 
        clearInterval(setT);
        tick1.pause();
        tick2.play();
    },10000);
    const setT=setInterval(function(){
        buttontick.pause();
        for(let i=1;i<=50;i++){
            document.getElementById(i).classList.remove("waitingBox");
        }
        let num=Math.round(Math.random()*50);
        document.getElementById(num).classList.add("waitingBox");
    },300);

});
arr.forEach(function(value,i){
        const ele=`<div class="box" id=${i+1}>${i+1}.  ${value}</div>`;
        final_box.insertAdjacentHTML("beforeend",ele);
});
