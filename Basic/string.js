   const name = "Kalpesh Amlani";
   const repoCount = 50;

//    console.log(name + repoCount );

//    console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);

   const gameName = new String("Cricket-us-game");
//    console.log(gameName);
//    console.log(gameName[0]);
   console.log(typeof gameName);
//    console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('q'));

const newString= gameName.substring(0,9);
console.log(newString);

const newStringOne = "   Kalpesh     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.kalpeshamlani.com/kalpesh%20amlani";
console.log(url.replace('%20','-'));


console.log( url.includes('test') );
 
console.log(gameName.split('-'));
