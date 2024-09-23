function pow(x, y) {
    let result = 1;
  
    if (y === 0) {
      result = 1; //перевірила чи дорівнює y нулю, результат 1, тому що степінь дорівнює 0
    } else if (y > 0) {
      result = 1; //перевірила чи є він додатнім, ініціалізуємо результат
      for (let i = 0; i < y; i++) {
        result = result * x; //створила цикл for, який виконується y разів і на кожній ітерації циклу множимо result на x
      }
    }
  
    return result;
  } // Виклик функції
  console.log(pow(4, 2)); //результат 16