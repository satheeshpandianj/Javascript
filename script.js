//Challenge # 1
/*
Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', 
else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.
Conditions:
-----------
X will be a valid integer number.
X will be either a number or a string. Both are valid.
*/
/////////////////////////////////////////////////////////////
/*
let inputValue = Number (prompt("Enter your input: "));

var result = (inputValue ** 2 > 1000) ? 'Its hotter than the sun' : 'Help yourself to a honeycomb Yorkie for the glovebox.';
console.log(result);
*/
////////////////////////////////////////////////////////////

//Challenge # 2  	
/*
If John goes to the cinema 3 times:

System A : 15 * 3 = 45 
System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)
John wants to know how many times he must go to the cinema so that the final result of System B, 
when rounded up to the next dollar, will be cheaper than System A.
The function movie has 3 parameters: 
card (price of the card), ticket (normal price of a ticket), perc (fraction of what he paid for the previous ticket) 
and returns the first n such that ceil(price of System B) < price of System A.
*/
/////////////////////////////////////////////////////////
/*
const findCheap = (cardPrice, ticketPrice, ticketFraction) => {
	let count = 1;
	let systemATotal = 0 ;

	let systemBTotal = cardPrice; 
	let ticketBPrice = ticketPrice;
	//console.log(`systemACost : ${systemACost} systemATotal: ${systemATotal} systemBCost: ${systemBCost} systemBTotal: ${systemBTotal}`); 


	while (systemATotal < systemBTotal) {
		systemACost = ticketPrice * count;
		systemATotal = systemACost;

		systemBCost = ticketBPrice * ticketFraction;
		systemBTotal = systemBTotal + systemBCost;

		ticketBPrice = systemBCost;

		console.log(`Count : ${count}  systemACost : ${systemACost} systemATotal: ${systemATotal} systemBCost: ${systemBCost} systemBTotal: ${systemBTotal}`); 
		count++;
	}

	return count - 1;

}

console.log(findCheap(100, 10, 0.95));
*/
////////////////////////////////////////////////
//'my_test.json': JSON.stringify(data, null, 4),
/*
Implement the function unique_in_order which takes as argument a sequence and 
returns a list of items without any elements with the same value next to each other 
and preserving the original order of elements.

//////////////////////////////////////////////////////
var uniqueInOrder=function(iterable)
{
	let str=''; // target array
 	
	//iterable is source array
 for(let count = 0; count < iterable.length; count++) 
 {
 	let strCount = 0;

 	console.log(`
 		itr length :${iterable.length} 
 		itr count :${count} 
 		str length :${str.length} 
 		str count :${strCount}`
 		);

 	while(strCount < str.length) 
 	{
 		console.log(`In while: str: ${str} str value :${str[strCount]} itr : ${iterable} itr value :${iterable[count]}`);


	  	if(iterable[count] === str[strCount])
	  	{
	  		break;
	  	} 		
	  	else
	  	{ 	
	  		if (strCount === str.length -1){
	  			str = str + iterable[count];
	  			console.log(`String in else: ${str}`);
	  			break;
	  		}
	  		strCount++;
	  	}

 	}
 	if(count === 0){
 		str = str + iterable[count];
 		console.log(`First letter ${str}`);  
 	}
 	
 	//console.log(`${str}`);  	
 }
 console.log(`${str}`);  
}

uniqueInOrder('ABCDA');

///////////////////////////////////////////////////////////////////
*/
/*
Write a function that accepts an array of 10 integers (between 0 and 9), 
that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
*/
/*
//////////////////////////////////////////////////////////////////////

'use strict';

const createPhoneNumber = (inputNumber) => {

	let mobileNumber = '(';

	for(let count = 0; count < inputNumber.length; count++) {
		//console.log(inputNumber[count]);
		if(count === 3)
		{
			mobileNumber = mobileNumber + ') ';
		}
		if(count === 6)
		{
			mobileNumber = mobileNumber + '-';
		}
		mobileNumber = mobileNumber + inputNumber[count];

		//console.log(`count: ${count} mobileNumber: ${mobileNumber}`);

	}

	return mobileNumber;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//////////////////////////////////////////////////////////////////////
*/

