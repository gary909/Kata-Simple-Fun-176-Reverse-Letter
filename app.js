function reverseLetter(str) {
    //coding and coding..
    const replaced = str.replace(/[^a-z0-9]/gi, '');
    return replaced;
    
}

console.log(reverseLetter("krishan")); // "nahsirk"
console.log(reverseLetter("ultr53o?n")); // "nortlu"
console.log(reverseLetter("ab23c")); // "cba"
console.log(reverseLetter("krishan")); // "nahsirk"