let click = document.getElementById("bts");
let result = document.querySelector(".res");
let main = document.getElementById("main1");
const tick = new Audio('music.mp3');
const last = new Audio('sound.mp3');
let arr = [
  "₹100 Cash","Toy Car","Chocolate Box","₹1500 Cash","Smartphone Cover","Book","Headphones","₹50 Cash","Gift Voucher",
"Watch","Teddy Bear","Bluetooth Speaker","Movie Ticket","₹200 Cash","Puzzle Game","Perfume","Sunglasses",
  "₹1000 Cash","Board Game","Fitness Band","Digital Clock","Lamp","Shopping Voucher","Laptop Bag","Wireless Mouse","Travel Mug",
  "Notebook Set","Gaming Mousepad","₹250 Cash","Keychain","Water Bottle","Portable Charger","Desk Organizer","Cooking Set",
  "Action Figure","₹300 Cash","Travel Pillow","Mini Backpack","Personalized Mug","Gaming Controller",
  "Camera Strap","Toy Robot","₹750 Cash","Sports Equipment","Pen Set","Bluetooth Earbuds","Digital Photo Frame",
  "Wallet","Backpack","Gift Hamper",
];
click.addEventListener("click", function () {
  for (let i = 1; i < 50; i++) {
    document.getElementById(i).classList.remove("winnng");
  }
  result.innerHTML = "Loading...";
  /*setTimeout(function(){
        let gift = (Math.floor(Math.random()*50)) + 1;
        console.log(gift);
        result.innerHTML = `You got number ${gift} and gift is ${arr[gift]}`;
        document.getElementById(gift).classList.add("winning");
    },3000)*/
  let count = 0;
  const intervalid = setInterval(() => {
    tick.pause();
    tick.currentTime = 0;
    tick.play();
    let k = Math.floor(Math.random() * 50) + 1;
    count += 1;
    for (let i= 1; i<=50 ; i++){
            if (i === k){
                document.getElementById(k).classList.add("highlighted");
            }
            else{
                document.getElementById(i).classList.remove("highlighted");
            }
        }
    if (count === 5) {
      for (let i = 1; i < 50; i++) {
        document.getElementById(i).classList.remove("winnng");
      }
      result.innerHTML = "Loading...";
      let gift = Math.floor(Math.random() * 50) + 1;
      last.play();
      console.log(gift);
      result.innerHTML = `You got number ${gift} and gift is ${arr[gift]}`;
      document.getElementById(k).classList.remove("highlighted");
      document.getElementById(gift).classList.add("winning");
      clearInterval(intervalid);
    } 
  }, 1000);
});
arr.forEach(function (value, i) {
  const ele = `<div class = "box" id = ${i + 1}>${i + 1}. ${value}</div>`;
  console.log(ele);
  main.insertAdjacentHTML("beforeend", ele);
});
