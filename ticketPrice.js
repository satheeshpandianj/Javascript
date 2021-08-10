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

////////////////////////////////////////////////