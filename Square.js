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

let inputValue = Number (prompt("Enter your input: "));

var result = (inputValue ** 2 > 1000) ? 'Its hotter than the sun' : 'Help yourself to a honeycomb Yorkie for the glovebox.';
console.log(result);

////////////////////////////////////////////////////////////
