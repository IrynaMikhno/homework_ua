function checkProbabilityTheory(count) {
    let evenNumbers = 0; //кількість парних чисел
    let oddNumbers = 0;  //кількість непарних чисел

    for (let i = 0; i < count; i++) {
        let randomValue = Math.floor(Math.random() * (1000 - 100 + 1)) + 100; //випадкове число
        if (randomValue % 2 === 0) {
            evenNumbers++; //збільшуємо лічильник парних чисел
        } else {
            oddNumbers++;  //збільшуємо лічильник непарних чисел
        }
    }

    let evenPercent = (evenNumbers / count) * 100; //це відсоток парних
    let oddPercent = (oddNumbers / count) * 100;   //це ідсоток непарних

    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenNumbers}`);
    console.log(`Непарних чисел: ${oddNumbers}`);
    console.log(`Відсоток парних: ${evenPercent}%`);
    console.log(`Відсоток непарних: ${oddPercent}%`);
}
checkProbabilityTheory(10); //результат: кількість згенерованих чисел: 10; Парних чисел: 6; Непарних чисел: 4; Відсоток парних: 60%; Відсоток непарних: 40%
