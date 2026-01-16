//REGULAR EXPRESSIONS (RegEx)
//What is RegEx?
//pattern for text checking
//Mainly used for:Email validation,Phone number check,Password rules,Search & replace
/*MOST COMMON REGEX SYMBOLS
.	any character
*	zero or more
+	one or more
?	zero or one
^	start
$	end
[]	group
{}	exact count
\S+ no space
@  must exist
.  dot*/
//Why use RegEx? 
//To validate and search text patterns easily.
//Check email has @
let pattern = /@/;
pattern.test("abc@gmail.com"); // true
//Check number only
let numPattern = /^[0-9]+$/;
numPattern.test("123"); // true
//ONLY letters [a-zA-Z]
/^[a-zA-Z]+$/.test("Hello"); // true
//Phone number (10 digits)
/^[0-9]{10}$/.test("9544066845"); // true
//Password 
/^(?=.*[A-Z])(?=.*[0-9]).{6,}$/
/*1 capital letter
1 number
minimum 6 characters*/

let email = "user@gmail.com";
let pattern1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (pattern1.test(email)) {
  console.log("Valid Email");
} else {
  console.log("Invalid Email");
}

