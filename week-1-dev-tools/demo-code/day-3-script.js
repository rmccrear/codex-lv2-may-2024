console.log("Hello from script.js");
let img1 = document.getElementById("img-1")
let audio1 = document.getElementById("audio-1")
let img2 = document.getElementById("img-2")

function sumOfArray(arr) {
  let sum = 0;
  for(let i=0; i<arr.length; i++){
    sum+=arr[i];
  }
  return sum;
}

function fetchCharmander() {;
  // promise
  console.log("start charmander")
  fetch("https://pokeapi.co/api/v2/pokemon/charmander").then(function(result){
    return result.json();
  }).then(function(data){
    console.log(data.species.name);
    img1.src = data.sprites.front_default;
    audio1.src = data.cries.legacy;
  });
}
function fetchPikachu() {
  console.log("start pikachu")
  // promise
  fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(result => result.json())
  .then(data => console.log(data.species.name));
}

let sales = [4, 3, 6, 1, 9, 10]

let sum = sumOfArray(sales);
console.log(sum)
let sales2 = [5, 7, 4, 2, 5, 9]
let sum2 = sumOfArray(sales)
console.log(sum2)



fetchCharmander();
fetchPikachu();
