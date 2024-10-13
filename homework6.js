const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
      {
        name: 'Клієнт 1',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків',
        partners: [
          {
            name: 'Клієнт 1.1',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
          },
          {
            name: 'Клієнт 1.2',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
              {
                name: 'Клієнт 1.2.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу квитків',
                sells: 'Рішення для продажу квитків',
              }
            ]
          }
        ]
      },
      {
        name: 'Клієнт 2',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків'
      }
    ]
  };
  
  
function findValueByKey (object, companyName) {
    for (let key in object) {
        if (object[key]===companyName) {
            let clonedObject=Object.assign({}, object);
            delete clonedObject.clients;
            return clonedObject;
        } else if (Array.isArray(object[key])) {
          let array = object[key];
          for (const index in array) {
            let result = findValueByKey (array [index], companyName);
            if (result !==undefined) {
                let clonedObject = Object.assign ({}. result);
                delete clonedObject.partners;
                return clonedObject
            }
          }
        }
    }
    return undefined;
}
let companyInfo = findValueByKey (company, "Велика Компанія");
console.log(companyInfo);
