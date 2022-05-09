info();
function info() {
  const name = prompt("please enter your name:");
  const lastname = prompt("please enter your lastname:");
  const age = prompt("please enter your age:");
  const gender = prompt("please enter your gender:");
  const person = `  Name: ${name}
  Lastname: ${lastname}
  Sex: ${gender}
  Age: ${age}`;
  alert(person);
  let root = document.getElementById("root");
  root.append(person);
  console.log(person);
}

prevRand = 1;
function rand(min = 0, max = 10) {
  time = Date.now();
  rand = (time / (prevRand + 1)) % max;
  if (rand < min) {
    rand += min;
  }
  prevRand = rand;
  return parseInt(rand);
}

function bin2dec(string) {
  let dec = 0;
  for (let i = 0; i < string.length; i++) {
    dec += string[i] * 2 ** (string.length - i - 1);
  }
  return dec;
}

function sumOfTwo(num1, num2) {
  if (num1 === num2) return 3 * (num1 + num2);
  else return num1 + num2;
}

function absoluteDif(num) {
  if (num > 19) return 3 * (num - 19);
  else return Math.abs(19 - num);
}

function Lo(string) {
  if (string == "Lo") return string;
  else return string + " " + "Lo";
}

function logicalGateBuffer(op) {
  return op;
}
function logicalGateNot(op) {
  return !op;
}
function logicalGateAnd(op1, op2) {
  if (op1 === true && op2 === true) {
    return true;
  } else return false;
}
function logicalGateOr(op1, op2) {
  if (op1 === false && op2 === false) {
    return false;
  } else return true;
}
function logicalGateNand(op1, op2) {
  if (op1 === true && op2 === true) {
    return false;
  } else return false;
}
function logicalGateNor(op1, op2) {
  if (op1 === false && op2 === false) {
    return true;
  } else return false;
}
function logicalGateXor(op1, op2) {
  if (op1 === false && op2 === false) return false;
  else if (op1 === true && op2 === true) return false;
  else return true;
}
function logicalGateXnor(op1, op2) {
  if (op1 === false && op2 === false) return true;
  else if (op1 === true && op2 === true) return true;
  else return false;
}

function factorielRecursive(x) {
  if (x === 0) return 1;
  else return x * factorielRecursive(x - 1);
}
function factorielIterative(x) {
  if (x === 0) return 1;
  else {
    let sum = 1;
    for (i = 1; i <= x; i++) {
      sum *= i;
    }
  }
  return sum;
}
const randArr = [];
const randGen = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};
randArr.push(randGen(15, 50));
randArr.push(randGen(15, 50));
randArr.push(randGen(15, 50));
randArr.push(randGen(15, 50));

function customMap(arr, callback) {
  const resArr = [];
  for (let i = 0; i < arr.length; i++) {
    resArr.push(callback(arr[i], i));
  }
  return resArr;
}
function customFilter(arr, callback) {
  const resArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) === true) resArr.push(arr[i]);
  }
  return resArr;
}

function customReduce(arr, callback) {
  let ans = arr[0];
  for (let i = 1; i < arr.length; i++) {
    ans = callback(ans, arr[i]);
  }
  return ans;
}


class Media{
  #title = ""
  constructor(title ="",isChekedOut =false,ratings=[]){
    this.title =title;
    this.isChekedOut = isChekedOut;
    this.ratings=[...ratings];
  }

  get getCheckStatus(){
    return this.isChekedOut;
  }
  get getTitle(){
    return this.title;
  }
  get getRating(){
    return this.ratings;
  }

  getAverageRating(){
    // let sum =0;
    // let length = this.ratings.length
    // this.ratings.forEach(rate => sum+=rate)
    // return sum/length;
    let sum = this.ratings.reduce((pv,cv,idx)=>{
      
      
      if(idx===this.ratings.length-1){
        return (pv + cv)/idx+1
      }
      return pv + cv
    },0)
    
    let length = this.ratings.length;
    return sum/length;
  }

  toggleCheckOutStatus(isChekedOut){
    return !isChekedOut;
  }

  addRating(num){
    this.ratings.push(num);
  }


}

class Book extends Media{
  constructor(author="",title ="",pages=0,isChekedOut =false,ratings=[]){
    super(title,isChekedOut,ratings)
    this.author=author;
    this.pages=pages;
  }
  get getAuthor(){
    return this.author;
  }
  get getPages(){
    return this.pages;
  }


}

class Movie extends Media{
  constructor(director="",title ="",runTime=0,isChekedOut =false,ratings=[]){
    super(title,isChekedOut,ratings)
    this.director=director;
    this.runTime=runTime;
  }
  get getDirector(){
    return this.director;
  }
  get getRunTime(){
    return this.runTime;
  }
}

class CD extends Media{
  constructor(artist="",title ="",isChekedOut =false,ratings=[],songs=[]){
    super(title,isChekedOut,ratings)
    this.artist=artist;
    this.songs=[...songs]

  }
  get getArtist(){
    return this.artist;
  }
  get getSongs(){
    return this.songs;
  }
  
}


const b = new Book("Khashayar");
var s = "baz";
console.log(valueOf(String))