
const  studentList = [
    { Studentname: 'Józsi', age: 41 },
    { Studentname: 'Laci', age: 35 },
    { Studentname: 'Feri', age: 36  }
];
let sumOfAges= 0;
let minindex=0;
let min=0;
for (let index = 0; index < studentList.length; index++) {
        sumOfAges += studentList[index].age  
}
//parseFloat("123.456").toFixed(2);
//console.log( (sumOfAges/studentList.length).toFixed(2))

//console.log (studentList)
//console.log("------------------------------------")

//for (let i = 0; i < studentList.length; i++) {
    
    if(min > studentList[i].age) {
        minindex = i;
    }
    
}

console.log(minindex)

for (let student of studentList) {
    console.log(student);

    
}

let name= prompt ("Kérem adjon meg egy nevet")
let wellcome = "Üdv";

//name = prompt ("Kérem adjon meg egy nevet")

let age = prompt (" Kérem adja meg hány éves")

if ( age == 18){
 console.log(wellcome+ "," + name + " !" + "Boldog születésnapot")
}else if (age >18){
    console.log(wellcome+ "," + name + " !" + "Te nagykorú vagy!")
}else
console.log(wellcome+ "," + name + " !" + "Te kiskorú vagy!")

// console.log(wellcome + "," +name + "!" + "Te ennyi idős vagy"+ " " + age + "éves")



let numbers = [2,3,4,5,6 ]
let maximum= 0;
for (let index = 0; index < numbers.length; index++) {
    if(maximum < numbers[index]) {
    
        maximum = numbers[index]
        
    }
 
}

console.log(maximum)




let numbers = [ 9, 10, 12, 13, 14, 15]
let minimum = numbers[0];
for (let index = 0; index < numbers.length; index++) {
    if(minimum > numbers[index]) {

        minimum= numbers[index]
    }
    
}

console.log(minimum)

let personList = [{ name: "Éva" , age : "18"},
{ name: "Ádám" , age : "13"},
{ name: "Gergő" , age : "14"},
]

let minimum = personList[0];


for (let index = 0; index < personList.length; index++) {
     if(minimum > personList[index].age) {
            minimum= personList[index].age
     }

     
    }
    
    console.log(minimum)
 console.log("Hello world");

let name ='mosh';
console.log(name);

let firstName = 'Mosh';
let lastName = 'Hamedani';

console.log(lastName);

console.log(firstName);

let interestRate = 0.3;
interestRate=1;



console.log(interestRate);


let namee = 'Moshh';
let age = 30;
let isApproved = true;
let firstNamee = undefined;
let selectedColor = null;

console.log(namee);
console.log(age);
console.log(isApproved);


typeof name;
let person = {

    name: 'Mosh', age : 30
};

console.log(person);
person.name = 'Gabor';
console.log(person.name);


let selection = 'name';
person[selection]= 'Mary';

console.log(person.name);

let selectedColors = ['red' , 'blue'];
console.log(selectedColors );
console.log(selectedColors[0] );

selectedColors[2]='green';


function greeting (){
        console.log("Üdvözlet+!!"+ name +' ' + lastName);

}

greeting();
greeting('John', 'Smith');
greeting('Jack', 'Bkack');

function square (number){
    return number* number;
}

let number = square(2);
console.log(number);
console.log(square(2));

alert ('hello');

alert ('good job');

let a= 1;
let b= 9.1;

let c = a+b;
Math.round(c);

console.log("c értéke =" + c);


alert ('Helo'); */



/* let studentList = [ { name : 'László' , age : 70 , isAdult : true }, 
                {name  : 'Gergő'  , age : 13, isAdult : false},
                {name  : 'Zoli'  , age : 35 , isAdult : true }
        ] */
/*    
   let minimumAgeStudent = studentList[0];
   let sumAge=0;
   let number;
   
   for (let index = 0; index < studentList.length; index++) {
           if(minimumAgeStudent.age>studentList[index].age){  
           minimumAgeStudent = studentList[index];
       }
       sumAge+= studentList[index].age;
       }
 
       console.log(studentList);

       console.log(minimumAgeStudent);
       
       console.log(sumAge/studentList.length);

        let  age = 18;  */
/*      function findAdultStudtents (studentList) {

          let newStudentList = [];


              for (let index = 0; index < studentList.length; index++) {
                   if(studentList[index].isAdult) {
                      newStudentList.push(studentList[index]);
                   }
                  
              }
          return newStudentList;
      }
      
      console.log(findAdultStudtents(studentList));

*/

/* 
        let dogList = [ { name: "Bodri"   , color : "Black" },
         { name: "Lajka"  , color : "white" },
          { name:  "Bell" , color : "grey" }
    
        ]

        function chooseAbc (dogList) {
            let firstDog=dogList[0];
                for (let index = 0; index < dogList.length; index++) {
                    if(firstDog.name>dogList[index].name)
                    firstDog=dogList[index];
                    
                }
                console.log(firstDog);

        }
        chooseAbc(dogList);
         */

/*    
      let randomStringNAme = "Bheewdwi9göego5fg0";

      function abcCounter(randomStringNAme){
              let bowel = [ "a" , "e" , "o" , "u", "i", ]
              let bowelCount =0;

              for (let index = 0; index < randomStringNAme.length; index++) {
                 if( bowel.includes(randomStringNAme[index])  ){
                     
                     bowelCount=[index];
                     return bowelCount;
              } 
          }
      }

      console.log(abcCounter(randomStringNAme)); 


Array.prototype.max = function () {
    return Math.max.apply(null, this);
};

Array.prototype.min = function () {
    return Math.min.apply(null, this);
};

let p = [35, 2, 65, 7, 8, 9, 12, 121, 33, 99];

console.log(`Max value is: ${p.max()}` +
    `\nMin value is: ${p.min()}`);


function median(numbers) {
    const sorted = Array.from(numbers).sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted["közép érték " + middle];
}

console.log(median([4, 5, 7, 1, 33]));



let q = [33, 34, 23, 25, 21]
let max = q[0];
let maxindex = 0;
for (let index = 0; index < q.length; index++) {
    if (max < q[index]) {
        max = q[index];
        maxindex = index;
    }

}
console.log("Max érték a tömbön belül  =  " + max);






let min = q[0];
for (let index = 0; index < q.length; index++) {
    if (min > q[index]) {
        min = q[index];
    }

}
console.log("Min érték a tömbön belül  =  " + min);






let middleValue = 0;
for (let index = 0; index < q.length; index++) {
    middleValue += q[index];
}
middleValue = middleValue / q.length;

console.log("Átlag a tömbön belül =  " + middleValue);




let sum = 0;
for (let index = 0; index < q.length; index++) {
    sum += q[index];
}


console.log("Summa  =  " + sum);




function sayHello() {
    let arrayEdificiosNiveis = [11, 10, 10];
    var indexMenor = arrayEdificiosNiveis.indexOf(Math.max(arrayEdificiosNiveis));
    console.log("index menor " + indexMenor);
}
sayHello();


let numberList = [2, 3, 4, 5, 1, 6]
function chooseAbc(numberList) {
    let firstNumber = numberList[0];
    for (let index = 0; index < numberList.length; index++) {
        if (firstNumber > numberList[index])
            firstNumber = numberList[index];

    }
    console.log("minimum index " + firstNumber);
}



function indexOfSmallest(a) {
    var lowest = 0;
    for (var i = 1; i < a.length; i++) {
        if (a[i] < a[lowest]) lowest = i;
    }
    return lowest;
}





let tomb = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(tomb.includes(2));
// console.log(tomb.includes(10));

// console.log(tomb.includes(2, 4));
//  console.log(tomb.includes(2, 3));

let stringName = "alma";

//stringName.slice();

// console.log(stringName.slice(0, 3));

// // VÁLTOZÓNÉV.replace("MIT", "MIRE")
// let fruitnames = "almafa";

//  fruitnames.replace("almafa", "körtefa");

// let newfruit = fruitnames.replace("alma", "körte");

//  console.log(newfruit);

// console.log(fruitnames.replace("almafa", "körtefa"));



// let str1 = "alma";
// let str2 = "fa";
// let str3 = "sor";



// // console.log(str1.concat(' ', str2, ' ', str3));

// // VÁLTOZÓNÉV.substring(KEZDŐÉRTÉK, VÉGÉRTÉK)

// let almafastr = "almafa"

// //  almafastr.substring(2,5);

// let almanew = almafastr.substring(2,5);

//  console.log(almanew);



//  let almaleiras = "alma leírásai kerek , piros!";

//  let almazero= almaleiras.trim();

//  console.log(almazero);




 function descendingOrder(n){
    //...
    
    // str... split()
    
    n= n.toString().split("");
    
    
    
    //sorbarendezzük csökkenő sorrenbden.
   n = n.sort().reverse();
   console.log(n);
    
    //visszaalakítjuk stringgé majd a stringet numberré...
     return parseInt(n.join(""));



  }
console.log(descendingOrder(111));
