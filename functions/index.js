const capitalize = (str) => {
    if (!str.length) return;
  
    return str[0].toUpperCase() + str.slice(1);
  };
  
  const reverseString = (str) => {
    return str.split("").reverse().join("");
  };
  
  const calculator = {
    add: (num1, num2) => num1 + num2,
    sub: (num1, num2) => num1 - num2,
    div: (num1, num2) => num1 / num2,
    mul: (num1, num2) => num1 * num2,
  };
  
  const caesarCipher = (str, shift) => {
    if (shift === 0) return str;
  
    return str.replace(/[a-z]/g, (char) =>
      String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97)
    );
  };
  
  const arrayAnalysis = (arr) => {
    return {
      average: arr.reduce((a, b) => a + b, 0) / arr.length,
      min: Math.min(...arr),
      max: Math.max(...arr),
      length: arr.length,
    };
  };
  
// module.exports = {
//     capitalize,
//     reverseString,
//     calculator,
//     caesarCipher,
//     arrayAnalysis
// };

  export {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    arrayAnalysis
  }

