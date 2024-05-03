
let number=1000;

let personList = [{ personName: "Éva" , personPhoneNumber : "18"},
{ personName: "Ádám" , personPhoneNumber : "13"},
{ personName: "Gergő" , personPhoneNumber : "14"},
]

for(let f=0 ; f <3 ; f++) {
    
    personName = prompt ("Kerem adjon meg egy nevet!!!")
    personPhoneNumber = prompt ("Kérem adjon meg a telefonszámot")
    personList.push({personName: personName , personPhoneNumber: personPhoneNumber});
    
    }
    
    
    for (let index = 0; index < personList.length; index++) {
    
        console.log (personList[index])
    }
   
 personList.splice(2 , 2);
  
console.log( personList)
    
   /*
    
    console.log("Hello world")

    let number = 2+2;

    console.log(number );


    alert ('yo'); */
