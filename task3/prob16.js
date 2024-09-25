// Problem:16

// Write a function called “getFullName".
// Given a first and a last name, “getFullName" returns a single string with the given first and last names separated by a single space.

// Input:
// getFullName(“GUVI", “GEEK");
// getFullName(“GUVI", );
// getFullName(, “GEEK");
// getFullName(“", “");

// Output:
// “GUVI GEEK"
// “GUVI"
// “GEEK"
// “"

function getFullName(firstName, lastName){
    return firstName+"  "+lastName;
    }
    let Name=getFullName("guvi","geek");
    console.log(Name)
    Name=getFullName("guvi","")
    console.log(Name)
    Name=getFullName( "","geek")
    console.log(Name)
    Name=getFullName("","");
    console.log(Name)