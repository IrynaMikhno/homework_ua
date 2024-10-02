let beautySalon = {
    name: "Glamour",
    services: ["manicure", "haircut", "makeup"],
    clientsPerDay: 25,
    area: 150,
    getInfo() {
        for (const key in this) {
            if(key !== "getInfo") {
            console.log(key, ':', this[key]);
            }
        
        }
    }
}


beautySalon.getInfo();
beautySalon.location = 'Kyiv';
beautySalon.getInfo();
