/*
Implement the function unique_in_order which takes as argument a sequence and 
returns a list of items without any elements with the same value next to each other 
and preserving the original order of elements.
*/
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