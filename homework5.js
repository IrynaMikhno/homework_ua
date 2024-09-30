var services = {
    "манікюр": "800 грн",
    "педикюр": "1000 грн",
    "нарощення вій": "950 грн",

    //знаходження загальної вартості
    price: function() {
        let total = 0;
        for (let service in this) {
            if (typeof this[service] === "string") {
                total += +this[service].replace(" грн", ""); //видаляємо " грн" і перетворюємо на число
            }
        }
        return total + " грн";
    },

    //знаходження мінімальної вартості
    minPrice: function() {
        let prices = Object.values(this)
            .filter(value => typeof value === "string")
            .map(value => +value.replace(" грн", "")); //рядок в число перетворюєио
        return Math.min(...prices) + " грн";
    },

    // знаходження максимальної вартості
    maxPrice: function() {
        let prices = Object.values(this)
            .filter(value => typeof value === "string")
            .map(value => +value.replace(" грн", "")); //рядок в число перетворюєио
        return Math.max(...prices) + " грн";
    }
};
services['корекція брів'] = "350 грн";

console.log("Загальна вартість послуг:", services.price());
console.log("Мінімальна вартість послуг:", services.minPrice());
console.log("Максимальна вартість послуг:", services.maxPrice());

