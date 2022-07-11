import {expect, it} from "@jest/globals";
import {translateToMorse} from "./script"

//writing a test case 
it("takes an pangram and returns the correct morse", () => {
    //pangram is a sentence which contains every letter of the alphabet
    const result = translateToMorse('A quick brown fox jumps over the lazy dog');
    //check the result 
    expect(result).toBe('.- / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.');
});
 it ("takes a number and translates correctly", () => {
    const result = translateToMorse('275');
    expect(result).toBe('..--- --... .....')
 })

 it ("Takes an invalid string and displays error", () => {
    const result = translateToMorse("[$&+,:;=?@#|'<>.-^*()%!]");
    expect (result).toBe('Invalid string entered')
 })

 it("takes a morse pangram and returns the correct english", () => {

   const result = translateToMorse('.- / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.');
   expect(result).toBe('A quick brown fox jumps over the lazy dog');
});
it ("sucessfully goes from morse to a number", () => {
   const result = translateToMorse('..--- --... .....');
   expect(result).toBe('275')
})

it ("Takes an invalid string and displays error", () => {
   const result = translateToMorse('~#@acdfg');
   expect (result).toBe('Invalid string entered')
})