// const {
//   capitalize,
//   reverseString,
//   calculator,
//   caesarCipher,
//   arrayAnalysis
// } = require('../functions/index.js');

import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  arrayAnalysis
} from '../functions/index.js'

describe('capitalize', () => {
  test("CAPITALIZE TEST 1", () => {
    expect(capitalize("hi")).toBe("Hi");
    });
    
    test("CAPITALIZE TEST 2", () => {
    expect(capitalize("how'sitgoing?")).toBe("How'sitgoing?");
    });
    
    test("CAPITALIZE TEST 3", () => {
    expect(capitalize("tHeRe Once was a FarMer who had a FARM")).toBe(
      "THeRe Once was a FarMer who had a FARM"
    );
    });
    
    test("CAPITALIZE TEST 4", () => {
    expect(capitalize("yuY")).toBe("YuY");
    });
})

describe('reverseString', () => {
  test("REVERSE STRING TEST 1", () => {
    expect(reverseString("idk")).toBe("kdi");
    });
    
    test("REVERSE STRING TEST 2", () => {
    expect(reverseString("Hi There")).toBe("erehT iH");
    });
    
    test("REVERSE STRING TEST 3", () => {
    expect(reverseString("Welcome to the future")).toBe("erutuf eht ot emocleW");
    });
    
    test("REVERSE STRING TEST 4", () => {
    expect(reverseString("Today I'm going to be productive :)")).toBe(
      "): evitcudorp eb ot gniog m'I yadoT"
    );
    });
})

describe('calcualtor', () => {
  test("CALCULATOR TEST 1", () => {
    expect(calculator.add(12, 4)).toBe(16);
    });
    
    test("CALCULATOR TEST 2", () => {
    expect(calculator.sub(15, 41)).toBe(-26);
    });
    
    test("CALCULATOR TEST 3", () => {
    expect(calculator.div(2, 4)).toBe(0.5);
    });
    
    test("CALCULATOR TEST 4", () => {
    expect(calculator.mul(11, 11)).toBe(121);
    });
})

describe('caesar', () => {
  test("CAESAR CIPHER TEST 1", () => {
    expect(caesarCipher("greetings good sir!", 0)).toBe("greetings good sir!");
    });
    
    test("CAESAR CIPHER TEST 2", () => {
    expect(caesarCipher("what a wonderful day", 3)).toBe("zkdw d zrqghuixo gdb");
    });
    
    test("CAESAR CIPHER TEST 3", () => {
    expect(caesarCipher("i really need to sleep early tonight!", 6)).toBe(
      "o xkgrre tkkj zu yrkkv kgxre zutomnz!"
    );
    });

    test("CAESAR CIPHER TEST 4", () => {
      expect(caesarCipher("going to work", 11)).toBe("rztyr ez hzcv");
      });
})

describe('arrayAnalysis', () => {
  test("ARRAY ANALYSIS TEST 1", () => {
    expect(arrayAnalysis([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
    });
    
    test("ARRAY ANALYSIS TEST 2", () => {
    expect(arrayAnalysis([1, 1, 1, 1, 1])).toEqual({
      average: 1,
      min: 1,
      max: 1,
      length: 5,
    });
    });
    
    test("ARRAY ANALYSIS TEST 3", () => {
    expect(arrayAnalysis([5, 1, 2, 3, 7, 1])).toEqual({
      average: 19 / 6,
      min: 1,
      max: 7,
      length: 6,
    });
    });
    
    test("ARRAY ANALYSIS TEST 4", () => {
    expect(arrayAnalysis([0])).toEqual({
      average: 0,
      min: 0,
      max: 0,
      length: 1,
    });
    });
})