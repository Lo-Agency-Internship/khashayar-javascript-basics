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
// console.log(valueOf(String))


let s1 = `[
  {"id":1,"name":"Leanne Graham","username":"Bret","email":"Sincere@april.biz","address":{"street":"Kulas Light","suite":"Apt. 556","city":"Gwenborough","zipcode":"92998-3874","geo":{"lat":"-37.3159","lng":"81.1496"}},"phone":"1-770-736-8031 x56442","website":"hildegard.org","company":{"name":"Romaguera-Crona","catchPhrase":"Multi-layered client-server neural-net","bs":"harness real-time e-markets"}},
  {"id":2,"name":"Ervin Howell","username":"Antonette","email":"Shanna@melissa.tv","address":{"street":"Victor Plains","suite":"Suite 879","city":"Wisokyburgh","zipcode":"90566-7771","geo":{"lat":"-43.9509","lng":"-34.4618"}},"phone":"010-692-6593 x09125","website":"anastasia.net","company":{"name":"Deckow-Crist","catchPhrase":"Proactive didactic contingency","bs":"synergize scalable supply-chains"}},
  {"id":3,"name":"Clementine Bauch","username":"Samantha","email":"Nathan@yesenia.net","address":{"street":"Douglas Extension","suite":"Suite 847","city":"McKenziehaven","zipcode":"59590-4157","geo":{"lat":"-68.6102","lng":"-47.0653"}},"phone":"1-463-123-4447","website":"ramiro.info","company":{"name":"Romaguera-Jacobson","catchPhrase":"Face to face bifurcated interface","bs":"e-enable strategic applications"}},
  {"id":4,"name":"Patricia Lebsack","username":"Karianne","email":"Julianne.OConner@kory.org","address":{"street":"Hoeger Mall","suite":"Apt. 692","city":"South Elvis","zipcode":"53919-4257","geo":{"lat":"29.4572","lng":"-164.2990"}},"phone":"493-170-9623 x156","website":"kale.biz","company":{"name":"Robel-Corkery","catchPhrase":"Multi-tiered zero tolerance productivity","bs":"transition cutting-edge web services"}},
  {"id":5,"name":"Chelsey Dietrich","username":"Kamren","email":"Lucio_Hettinger@annie.ca","address":{"street":"Skiles Walks","suite":"Suite 351","city":"Roscoeview","zipcode":"33263","geo":{"lat":"-31.8129","lng":"62.5342"}},"phone":"(254)954-1289","website":"demarco.info","company":{"name":"Keebler LLC","catchPhrase":"User-centric fault-tolerant solution","bs":"revolutionize end-to-end systems"}},
  {"id":6,"name":"Mrs. Dennis Schulist","username":"Leopoldo_Corkery","email":"Karley_Dach@jasper.info","address":{"street":"Norberto Crossing","suite":"Apt. 950","city":"South Christy","zipcode":"23505-1337","geo":{"lat":"-71.4197","lng":"71.7478"}},"phone":"1-477-935-8478 x6430","website":"ola.org","company":{"name":"Considine-Lockman","catchPhrase":"Synchronised bottom-line interface","bs":"e-enable innovative applications"}},
  {"id":7,"name":"Kurtis Weissnat","username":"Elwyn.Skiles","email":"Telly.Hoeger@billy.biz","address":{"street":"Rex Trail","suite":"Suite 280","city":"Howemouth","zipcode":"58804-1099","geo":{"lat":"24.8918","lng":"21.8984"}},"phone":"210.067.6132","website":"elvis.io","company":{"name":"Johns Group","catchPhrase":"Configurable multimedia task-force","bs":"generate enterprise e-tailers"}},
  {"id":8,"name":"Nicholas Runolfsdottir V","username":"Maxime_Nienow","email":"Sherwood@rosamond.me","address":{"street":"Ellsworth Summit","suite":"Suite 729","city":"Aliyaview","zipcode":"45169","geo":{"lat":"-14.3990","lng":"-120.7677"}},"phone":"586.493.6943 x140","website":"jacynthe.com","company":{"name":"Abernathy Group","catchPhrase":"Implemented secondary concept","bs":"e-enable extensible e-tailers"}},
  {"id":9,"name":"Glenna Reichert","username":"Delphine","email":"Chaim_McDermott@dana.io","address":{"street":"Dayna Park","suite":"Suite 449","city":"Bartholomebury","zipcode":"76495-3109","geo":{"lat":"24.6463","lng":"-168.8889"}},"phone":"(775)976-6794 x41206","website":"conrad.com","company":{"name":"Yost and Sons","catchPhrase":"Switchable contextually-based project","bs":"aggregate real-time technologies"}},
  {"id":10,"name":"Clementina DuBuque","username":"Moriah.Stanton","email":"Rey.Padberg@karina.biz","address":{"street":"Kattie Turnpike","suite":"Suite 198","city":"Lebsackbury","zipcode":"31428-2261","geo":{"lat":"-38.2386","lng":"57.2232"}},"phone":"024-648-3804","website":"ambrose.net","company":{"name":"Hoeger LLC","catchPhrase":"Centralized empowering task-force","bs":"target end-to-end models"}}
]`

// let s2 = JSON.parse(s1)
// console.log(typeof(s1))
// console.log(typeof(s2))
// console.log(s2[0].address)
// console.log(s2.forEach(element => {
//   return element.id
// }))
class Person{
    constructor(id,name ="",username ="",email="",address={},phone="",website="",company={}){
      this.id =id;
      this.name = name;
      this.username=username;
      this.email =email;
      this.address = {...address};
      this.phone=phone;
      this.website = website;
      this.company={...company};
    }

    // getters


    get getId(){
      return this.id;
    }
    get getName(){
      return this.name;
    }
    get getUsername(){
      return this.username;
    }
    get getEmail(){
      return this.email;
    }
    get getAddress(){
      return this.address;
    }
    get getPhone(){
      return this.phone;
    }
    get getWebsite(){
      return this.website;
    }
    get getCompany(){
      return this.company;
    }

    // setters
    set setId(id){
      this.id = id;
    }
    set setName(name){
      this.name = name;
    }
    set setUsername(username){
      this.username = username;
    }
    set setEmail(email){
      this.email = email;    
    }
    set setAddress(address){
      this.address = {...address};    
    }
    set setPhone(phone){
      this.phone = phone;    
    }
    set setWebsite(website){
      this.website = website;    
    }
    set setCompany(company){
      this.company = {...company};   
    }

  }

const stringToJson = (string) =>{
   const array = JSON.parse(string);
   let arrOfPersons = array.map(obj=>{
      const p =new Person();
      p.setId=obj.id;
      p.setName=obj.name;
      p.setUsername=obj.username;
      p.setEmail=obj.email;
      p.setAddress=obj.address;
      p.setPhone=obj.phone;
      p.setWebsite=obj.website;
      p.setCompany=obj.company;
      return p;
   });
   console.log(arrOfPersons)
   arrOfPersons.forEach(p =>{
     console.log(p.getAddress.street)
   })

}



