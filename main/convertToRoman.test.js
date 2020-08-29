const convertToRoman = require('./converter');

test('2 romanized equals II', () => {
    expect(convertToRoman(2)).toBe("II");
});
test('3 romanized equals III', () => {
    expect(convertToRoman(3)).toBe("III");
});
test('4 romanized equals IV', () => {
    expect(convertToRoman(4)).toBe("IV");
});
test('5 romanized equals V', () => {
    expect(convertToRoman(5)).toBe("V");
});
test('9 romanized equals IX', () => {
    expect(convertToRoman(9)).toBe("IX");
});
test('12 romanized equals XII', () => {
    expect(convertToRoman(12)).toBe("XII");
});
test('16 romanized equals XVI', () => {
    expect(convertToRoman(16)).toBe("XVI");
});
test('29 romanized equals XXIX', () => {
    expect(convertToRoman(29)).toBe("XXIX");
});
test('44 romanized equals XLIV', () => {
    expect(convertToRoman(44)).toBe("XLIV");
});
test('45 romanized equals XLV', () => {
    expect(convertToRoman(45)).toBe("XLV");
});
test('68 romanized equals LXVIII', () => {
    expect(convertToRoman(68)).toBe("LXVIII");
});
test('83 romanized equals LXXXIII', () => {
    expect(convertToRoman(83)).toBe("LXXXIII");
});
test('97 romanized equals XCVII', () => {
    expect(convertToRoman(97)).toBe("XCVII");
});
test('99 romanized equals XCIX', () => {
    expect(convertToRoman(99)).toBe("XCIX");
});
test('400 romanized equals CD', () => {
    expect(convertToRoman(400)).toBe("CD");
});
test('500 romanized equals D', () => {
    expect(convertToRoman(500)).toBe("D");
});
test('501 romanized equals DI', () => {
    expect(convertToRoman(501)).toBe("DI");
});
test('649 romanized equals DCXLIX', () => {
    expect(convertToRoman(649)).toBe("DCXLIX");
});
test('798 romanized equals DCCXCVIII', () => {
    expect(convertToRoman(798)).toBe("DCCXCVIII");
});
test('891 romanized equals DCCCXCI', () => {
    expect(convertToRoman(891)).toBe("DCCCXCI");
});
test('1000 romanized equals M', () => {
    expect(convertToRoman(1000)).toBe("M");
});
test('1004 romanized equals MIV', () => {
    expect(convertToRoman(1004)).toBe("MIV");
});
test('1006 romanized equals MVI', () => {
    expect(convertToRoman(1006)).toBe("MVI");
});
test('1023 romanized equals MXXIII', () => {
    expect(convertToRoman(1023)).toBe("MXXIII");
});
test('2014 romanized equals MMXIV', () => {
    expect(convertToRoman(2014)).toBe("MMXIV");
});
test('3999 romanized equals MMMCMXCIX', () => {
    expect(convertToRoman(3999)).toBe("MMMCMXCIX");
});
    
/*
console.log("2 = " + convertToRoman(2));
console.log("3 = " + convertToRoman(3));
console.log("4 = " + convertToRoman(4));
console.log("5 = " + convertToRoman(5));
console.log("9 = " + convertToRoman(9));
console.log("12 = " + convertToRoman(12));
console.log("16 = " + convertToRoman(16));
console.log("29 = " + convertToRoman(29));
console.log("44 = " + convertToRoman(44));
console.log("45 = " + convertToRoman(45));
console.log("68 = " + convertToRoman(68));
console.log("83 = " + convertToRoman(83));
console.log("97 = " + convertToRoman(97));
console.log("99 = " + convertToRoman(99));
console.log("400 = " + convertToRoman(400));
console.log("500 = " + convertToRoman(500));
console.log("501 = " + convertToRoman(501));
console.log("649 = " + convertToRoman(649));
console.log("798 = " + convertToRoman(798));
console.log("891 = " + convertToRoman(891));
console.log("1000 = " + convertToRoman(1000));
console.log("1004 = " + convertToRoman(1004));
console.log("1006 = " + convertToRoman(1006));
console.log("1023 = " + convertToRoman(1023));
console.log("2014 = " + convertToRoman(2014));
console.log("3999 = " + convertToRoman(3999));
*/