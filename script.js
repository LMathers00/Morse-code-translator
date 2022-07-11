 const morseAlphabet = {
"0": "-----",
"1": ".----",
"2": "..---",
"3": "...--",
"4": "....-",
"5": ".....",
"6": "-....",
"7": "--...",
"8": "---..",
"9": "----.",
a: ".-",
b: "-...",
c: "-.-.",
d: "-..",
e: ".",
f: ".-.",
g: "--.",
h: "....",
i: "..",
j: ".---",
k: "-.-",
l: ".-..",
m: "--",
n: "-.",
o: "---",
p: ".--.",
q: "--.-",
r: ".-.",
s: "...",
t: "-",
u: "..-",
v: "...-",
w: ".--",
x: "-..-",
y: "-.--",
z: "--..",
' ': " / "
 }


const translateToMorse = (string) => {
    if(string.includes("[$&+,:;=?@#|'<>.-^*()%!]")) {
        return ("Invalid string entered")
    } else {
        return string.toLowerCase().split("").map(words => {
            return morseAlphabet[words] ? morseAlphabet[words] : words;
        }).join("")
    }
}

const displayTranslation = () => {
    document.getElementById("output_morse").innerHTML = translateToMorse(
        englishInput.value.toLowerCase()
    );
};
  
const englishInput = document.getElementById("input_english");

//////Now the other way round

const alphaNumericAlphabet = {
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-": a,
    "-...": b,
    "-.-.": c,
    "-..": d,
    ".": e,
    ".-.": f,
    "--.": g,
    "....": h,
    "..": i,
    ".---": j,
    "-.-": k,
    ".-..": l,
    "--": m,
    "-.": n,
    "---": o,
    ".--.": p,
    "--.-": q,
    ".-.": r,
    "...": s,
    "-": t,
    "..-": u,
    "...-": v,
    ".--": w,
    "-..-": x,
    "-.--": y,
    "--..": z,
    '/': " "
     }



     const translateToEnglish = (string) => {
        if(string.includes("[$&+,:;=?@#|'<>.-^*()%!]")) {
            return ("Invalid string entered")
        } else {
            return string.toLowerCase().split("").map(words => {
                return morseAlphabet[words] ? morseAlphabet[words] : words;
            }).join("")
        }
    }
    
    const displayTranslation2 = () => {
        document.getElementById("output_english").innerHTML = translateToEnglish(
            englishInput.value.toLowerCase()
        );
    };
      
    const morseInput = document.getElementById("input_morse");




    