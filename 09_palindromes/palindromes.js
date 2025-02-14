const palindromes = str => str
                            .toLowerCase()
                            .split('')
                            .filter(elem => elem !== ',' && elem !== '!' && elem !== ' ')
                            .join('') 
                            === str
                                .toLowerCase()
                                .split('')  
                                .filter(elem => elem !== ',' && elem !== '!' && elem !== ' ')
                                .reverse()
                                .join('');
// Do not edit below this line
module.exports = palindromes;
