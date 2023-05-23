function reverseLetter(str) {
    //remove non alpha char..
    let replaced = str.replace(/[^a-z]/gi, '');
    return replaced.split("").reverse().join("");; 
}

console.log(reverseLetter("krishan")); // "nahsirk"
console.log(reverseLetter("ultr53o?n")); // "nortlu"
console.log(reverseLetter("ab23c")); // "cba"
console.log(reverseLetter("krishan")); // "nahsirk"