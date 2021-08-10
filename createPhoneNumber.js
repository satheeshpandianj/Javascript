/*
Write a function that accepts an array of 10 integers (between 0 and 9), 
that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
*/

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