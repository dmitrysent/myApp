// const usefulTime = 169;
let usefulTime = document.querySelector('#usefulTime')
const helpTime = 13.5;
const contactsOfHourse = 16;
const rr = 91;
const fcr = 89;
const partTime1 = 0; 
const partTime2 = 84.25;



switch (true) {
    case (contactsOfHourse < 7): kpi1 = 75
    break
    case (contactsOfHourse >= 7 && contactsOfHourse < 8): kpi1 = 85
    break
    case (contactsOfHourse >= 8 && contactsOfHourse < 9): kpi1 = 95
    break
    case (contactsOfHourse >= 9 && contactsOfHourse < 10): kpi1 = 115
    break
    case (contactsOfHourse >= 10 && contactsOfHourse < 12): kpi1 = 140
    break
    case (contactsOfHourse >= 12 && contactsOfHourse < 14): kpi1 = 160
    break
    case (contactsOfHourse >= 14 && contactsOfHourse < 16): kpi1 = 180
    break
    default: kpi1 = 190;
}

switch (true) {
    case (rr < 80): kpi2 = 0.2
    break
    case (rr >= 80 && rr < 85): kpi2 = 0.4
    break
    case (rr >= 85 && rr < 88): kpi2 = 0.5
    break
    case (rr >= 88 && rr < 91): kpi2 = 0.6
    break
    default: kpi2 = 0.7;
}

switch (true) {
    case (fcr < 80): kpi3 = 0.2
    break
    case (fcr >= 80 && fcr < 85): kpi3 = 0.4
    break
    case (fcr >= 85 && fcr < 87): kpi3 = 0.5
    break
    case (fcr >= 87 && fcr < 90): kpi3 = 0.6
    break
    default: kpi3 = 0.7;
}




let incrCoefficient = kpi2 + kpi3
let paymantWithIncrCoefficient = kpi1 * incrCoefficient
let paymentBeforeTax = usefulTime * paymantWithIncrCoefficient
let paymentAfterTax = paymentBeforeTax * (1 - 0.13)
let paymentWithPartTime1 = partTime1 * 0.5;
let paymentWithPartTime2 = partTime2;
let paymentHelpBeforeTax = helpTime * 150;


let paymentBeforeTaxWithPT = (usefulTime + paymentWithPartTime1 + paymentWithPartTime2) * paymantWithIncrCoefficient + paymentHelpBeforeTax;
let paymentAfterTaxWithPT = paymentBeforeTaxWithPT * (1 - 0.13);

console.log('Стоимость часа с учётом к/ч KPI1: ' + kpi1 + ' рублей')
console.log('Коэффициент RR KPI2: ' +  kpi2)
console.log('Коэффициент FCR KPI3: ' + kpi3)
console.log('Повышающий коэффициент KPI2 + KPI3: ' + +incrCoefficient.toFixed(2))
console.log('Стоимость часа с учётом повышающего коэффициента KPI1 * (KPI2 + KPI3): ' + +paymantWithIncrCoefficient.toFixed(5) + ' рублей')
// console.log('Количество отработанных часов: ' + usefulTime + 'ч')
// console.log('Сумма к оплате до вычета НДФЛ 13%: ' + paymentBeforeTax + ' рублей')
// console.log('Сумма к оплате с вычетом НДФЛ: ' + paymentAfterTax + ' рублей')
// console.log('Количество отработанных часов (полезное время): ' + usefulTime)
console.log('Количество часов с учётом подработок (к оплате): ' + (usefulTime + paymentWithPartTime1 + paymentWithPartTime2) )
console.log('Из них количество подработок "Помощь на линии 1" по ставке х1.5: ' + partTime1)
console.log('Из них количество подработок "Помощь на линии 2" по ставке х2: ' + partTime2)
console.log('Количество часов по наставничеству: ' + helpTime)
console.log('Сумма к оплате за наставничество до вычета НДФЛ 13% : ' + paymentHelpBeforeTax)
console.log('Сумма к оплате до вычета НДФЛ 13% с учётом подработок: ' + paymentBeforeTaxWithPT + ' рублей')
console.log('Сумма к оплате с вычетом НДФЛ с учётом подработок: ' + paymentAfterTaxWithPT + ' рублей')

alert('Количество отработанного времени: ' + usefulTime)

// if (RR < 80) {
//     let kpi1 = 0.2
//     console.log(kpi1);
// }
// else if (RR >= 80 && RR < 85 ) {
//     let kpi1 = 0.4
//     console.log(kpi1);
// }
// else if (RR >= 85 && RR < 88 ) {
//     let kpi1 = 0.5
//     console.log(kpi1);
// }
// else if (RR >= 88 && RR < 91 ) {
//     let kpi1 = 0.6
//     console.log(kpi1);
// }
// else {
//     kpi1 = 0.7;
//     console.log(kpi1);
// };
// console.log(kpi1);


// const FCR = 85

// if (FCR < 80) {
//     let kpi2 = 0.2
//     console.log(kpi2);
// }
// else if (FCR >= 80 && FCR < 85 ) {
//     let kpi2 = 0.4
//     console.log(kpi2);
// }
// else if (FCR >= 85 && FCR < 87 ) {
//     let kpi2 = 0.5
//     console.log(kpi2);
// }
// else if (FCR >= 87 && FCR < 90 ) {
//     let kpi2 = 0.6
//     console.log(kpi2);
// }
// else {
//     let kpi2 = 0.7;
//     console.log(kpi2);
// };

// console.log(kpi2);