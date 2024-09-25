
// Problem:17

// Write a function called “getLengthOfWord".
// Given a word, “getLengthOfWord" returns the length of the given word.

// Input:
// getLengthOfWord(“GUVI");
// getLengthOfWord(“");
// getLengthOfWord();
// getLengthOfWord(9);

// Output:
// 4
// 0
// -1
// -1
function getLengthOfWord(word1){
    return String(word1).length;
    }
    let ord=getLengthOfWord("Guvi")
    console.log(ord);
    ord=getLengthOfWord("")
    console.log(ord);
    ord=getLengthOfWord()
    console.log(ord);
    ord=getLengthOfWord(9)
    console.log(ord);