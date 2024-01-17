"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//•Start with your program from Exercise 16. 
//Add a new line that prints a message saying that you can invite only two people for dinner.
//•Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//•Print a message to each of the two people still on your list, letting them know they’re still invited.
//•Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guestList = [
    'Mr, Imran Khan',
    'Mr, Zia khan',
    'Mr, Ali Raza',
    'Mr, Jahanzaib Tayab',
    'Mr, Aabid Shirwani',
    'Mr Hassin Raza'
];
//Step1:Prints a message saying that you can invite only two people for dinner.
console.log(`I can invite only two people for dinner.`);
//Step2:Remove guests from your list one at a time until only two names remain in your list.
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry,${removeGuest}, I can,t invite you to dinner.`);
}
//Step3: Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let guest of guestList) {
    console.log(`Hello,${guest}, You are still invited to dinner!`);
}
/*Step4:Remove the last two names from your list, so you have an empty list.
 Print your list to make sure you actually have an empty list at the end of your program.*/
guestList.pop();
guestList.pop();
//Print empty string.
console.log(`Guest list after dinner`, guestList);
