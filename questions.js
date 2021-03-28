
const stringSize = (text) => {
    text = 'This text has a certain number of characters';
    const result = text.length;
    return result;
}
const replaceCharacterE = (text) => {
    text = 'This text has a certain number of characters';
    const result = text.replace("e", " ");
    return result;
}
const concatString = (text1, text2) => {
    return text1.concat(text2);
}
const showChar5 = (text) => {
    return text.charAt(4, 5);
}
const showChar9 = (text) => {
    return text.substring(0, 9);
}
const toCapitals = (text) => {
    text = 'Another useful function';
    const result = text.toUpperCase();
    return result;
}
const toLowerCase = (text) => {
    text = 'This is a sentence!';
    const result = text.toLowerCase();
    return result;
}
const removeSpaces = (text) => {
    text = ' Rome wasn\'t built in a day ';
    const result = text.trim();
    return result;
}
const IsString = (text) => {
    return text.IsString = (true);
}

const getExtension = (text) => {
    return text.split('.').pop();
}
const countSpaces = (text) => {
    return text.split(" ").length - 1;
}
const InverseString = (text) => {
    return text.split("").reverse().join("");
}

const power = (x, y) => {
    return Math.pow(2, 3);
}
const absoluteValue = (num) => {
    return Math.abs(-5);
}
const absoluteValueArray = (array) => {
    return array.map(Math.abs);
}
const circleSurface = (radius) => {
    return Math.round(Math.PI * radius * radius);
}
const hypothenuse = (ab, ac) => {
    return Math.hypot(5, 8);
}
const BMI = (weight, height) => {
    return parseFloat((65 / (1.75 * 1.75)).toFixed(2));
}

const createLanguagesArray = () => {
    return languages = ["Html", "CSS", "Java", "PHP"];
}

const createNumbersArray = () => {
    return nombres = [0, 1, 2, 3, 4, 5];
}

const replaceElement = (languages) => {
    languages[2] = "Javascript";
    return languages;
}

const addElement = (languages) => {
    languages.push("Ruby", "Python");
    return languages;
}

const addNumberElement = (numbers) => {
    numbers.unshift(-2, -1);
    return numbers;
}

const removeFirst = (languages) => {
    languages.shift();
    return languages;
}

const removeLast = (languages) => {
    languages.pop();
    return languages;
}

const convertStrToArr = (social_arr) => {
    const social = social_arr.split(",");
    return social;
}

const convertArrToStr = (languages) => {
    const atos = languages.toString();
    return atos;
}

const sortArr = (social_arr) => {
    const sorta = social_arr.sort();
    return sorta;
}

const invertArr = (social_arr) => {
    const rev = social_arr.reverse();
    return rev;
}