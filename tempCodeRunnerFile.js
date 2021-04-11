
let arr = [1, 2, 3, 4, 5, 3]

const s = arr.length;

for(var i=0; i<s ; i++){

  const random = Math.floor(Math.random()*arr.length)

arr = arr.filter((item,ind,arr) => ind !== random ? item:0 )


// !!! Read below about array.includes(...) support !!!

console.log(arr)

}