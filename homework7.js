const regex = /^[^Aa]{6,}$/;
const testString = "Wonderful Joyful Happiness Time Task Apple";
const words = testString.split(" "); //розділяємо слова на окремі рядки
const matches = words.filter(word => regex.test(word)); //знаходимо потрібні слова
console.log(matches);
