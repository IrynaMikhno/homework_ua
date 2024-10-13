var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];
let reg = /^[a-z0-9._%+-]+@(gmail\.com|yahoo\.com)$/i;
function getArrayWithCorrectEmails(arr, regex) {
    let arrayWithEmails = [];
    arr.forEach(function (currentValue) {
        if (currentValue.email) {
            if (regex.test(currentValue.email)) {
                arrayWithEmails.push(currentValue.email);
            }
        }
    });
    return arrayWithEmails;
}
let newArr = getArrayWithCorrectEmails(arr, reg);
console.log(newArr);
