import {expect, it} from "@jest/globals";
import {morseAlphabet} from "./script";

//writing a test case 
it("takes an pangram and returns the correct morse", () => {
    //pangram is a sentence which contains every letter of the alphabet
    const result = translate('A quick brown fox jumps over the lazy dog');
    //check the result 
    expect(result).toBe('.- / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.');
});
 it ("takes a number and cranslates correctly", () => {
    const result = translate('275');
    expect(result).toBe('..--- --... .....')
 })

 it ("Takes an invalid string and displays error", () => {
    const result = translate('~#@');
    expect (result).toBe('Invalid string entered')
 })