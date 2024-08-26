// //1-----> getFullName
// let namee = prompt("adinizi daxil edin: ");
// let surname = prompt("soyadinizi daxil edin: ");
// function getFullName() {
//   return `Fullname: ${namee} ${surname}`;
// }
// alert(getFullName());

// //2----> getFullAddress
// let country = prompt("yasadigin olkeni qeyd et: ");
// let city = prompt("yasadigin seheri qeyd et: ");
// let street = prompt("yasadigin kuceni qeyd et:  ");
// function getFullAddress() {
//   return `address: ${country} ${city} ${street}`;
// }
// alert(getFullAddress());

// // 3-----> grade gondereceksiz functiona  grade 90 -100 aralighindadirsa Ela
// // 50- 90 aralighidirsa  (orta)
// // 0 -50 araligghidirsa  (kesr) alert ya da console a chixarda bilersiz
// let grade = +prompt("nece bal toplamisan: ");
// function valuation() {
//   if (grade > 90 && grade <= 100) {
//     return `elasan :)`;
//   } else if (grade > 50 && grade <= 90) {
//     return `beledəə orta -_-`;
//   } else if (grade >= 0 && grade <= 50) {
//     return `sen kesildin !!!`;
//   } else {
//     return `bele bir bal yoxdur ^-^`;
//   }
// }
// alert(valuation());

// //1--->Print all even numbers from 0 to 10 using a loop.
// for(let i=1; i<=10; i++){
//      if(i%2==0){
//        console.log(i);
//      }
// }

// //2--->Create a multiplication table from 1 to 10 using nested loops.
// for(let i=1; i<=10; i++){
//     for(let j=1; j<=10; j++){
//      console.log(`${i}*${j}=${i*j}`);
//     }
// }

// //3--->Write a function to convert kilometers to miles.
// let kilometers=parseInt(prompt("kilometri daxil et: "))
// function convertToMiles(){
//     return `${kilometers}kilometr, ${kilometers*0.621371}≈miledir`;
// }
// alert(convertToMiles());

// //4--->Sum all numbers in an array using a function.
// function sumNums() {
//   let arr = [2, 4, 6, 2, 5, 1];
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
// }
// sumNums();

// //5--->Reverse the order of an array using a function.
// function reverseArray() {
//   let arr = [1, 2, "afsana" , "b", 3, 4, "a"];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// }
// reverseArray();

// //6--->Sort an array from lowest to highest using a sorting function.
// function sorting() {
//   let arr = [4, 8, 2, 7, 6, 5, 9, 1, 3];
//   let change;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         change = arr[j];
//         arr[j] = arr[i];
//         arr[i] = change;
//       }
//     }
//   }
//   console.log(arr);
// }
// sorting();

// //7--->Create a function to filter out negative numbers from an array.
// function negativeNumber() {
//   let arr = [-2, 6, -3, 7, -5, -9, 8];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       console.log(arr[i]);
//     }
//   }
// }
// negativeNumber();

// //8--->Write a function to remove all spaces from a string.
// function removeSpaces() {
//   let arr = "bos luq la ri ta pan funk si ya";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== " ") {
//       console.log(arr[i]);
//     }
//   }
// }
// removeSpaces();

// //9--->Create a function that returns true if a number is divisible by 10.
// let num = +prompt("eded daxil et, yoxlayim 10-a bolunurmu?)))");
// function divisibleByTen() {
//   if (num % 10 == 0) {
//     return true;
//   }
//   return false;
// }
// alert(divisibleByTen());

// //10--->Write a function to count the number of vowels in a string.
// function countVowels() {
//   let word = "Afsana Hashimova";
//   let vowels = "aoueiAOUEI";
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//       if (word[i] == vowels[j]) {
//         count += 1;
//       }
//     }
//   }
//   console.log(count);
// }
// countVowels();
