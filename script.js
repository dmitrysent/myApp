// const helpTimeBlock = document.querySelector('#helpTimeBlock');

// checkbox.addEventListener('change', function () {
//     if (this.checked) {
//         helpTimeBlock.classList.add("visible")
//     } else helpTimeBlock.classList.remove("visible")
// });


button.onclick = function() {
    const usefulTime = +document.querySelector('#usefulTime').value,
          timeOfX3 = +document.querySelector('#timeOfX3').value,
          timeOfX4 = +document.querySelector('#timeOfX4').value,
          contactsOfHourse = +document.querySelector('#contactsOfHourse').value,
          rr = +document.querySelector('#rr').value,
          fcr = +document.querySelector('#fcr').value;
        //   partTime1 = +document.querySelector('#partTime1').value,
        //   partTime2 = +document.querySelector('#partTime2').value,
        //   helpTime = +document.querySelector('#helpTime').value,
        //   checkbox = document.querySelector('#checkbox');
    

    // к/ч
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

    // RR
    switch (true) {
        case (rr < 80): kpi2 = 0.2
        break
        case (rr >= 80 && rr < 85): kpi2 = 0.5
        break
        case (rr >= 85 && rr < 88): kpi2 = 0.6
        break
        // case (rr >= 88 && rr < 91): kpi2 = 0.6
        // break
        default: kpi2 = 0.7;
    }

    // FCR
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


    /*
    const incrCoefficient = kpi2 + kpi3,                                   //повышающий коэф
        paymantWithIncrCoefficient = kpi1 * incrCoefficient,             //стоимость часа с учетом повыш коэф
        paymentBeforeTax = usefulTime * paymantWithIncrCoefficient,         //до вычета ндфл
        paymentAfterTax = paymentBeforeTax * (1 - 0.13),                    // после вычета ндфл
        // paymentWithPartTime1 = partTime1 * 0.5,                             // подработки х1.5
        // paymentWithPartTime2 = partTime2,                                   // подраотки х3
        paymentHelpBeforeTax = helpTime * 150,                              // наставничество
        paymentAll = usefulTime + paymentWithPartTime1 + paymentWithPartTime2, // все подработки
        paymentBeforeTaxWithPT = (usefulTime + paymentWithPartTime1 + paymentWithPartTime2) * paymantWithIncrCoefficient + paymentHelpBeforeTax, // 
        paymentAfterTaxWithPT = paymentBeforeTaxWithPT * (1 - 0.13);

    */

    const incrCoefficient = kpi2 + kpi3, //повышающий коэф
          paymantWithIncrCoefficient = kpi1 * incrCoefficient, //стоимость часа с учетом повыш коэф
          sumOfTimeX3X4 = timeOfX3 + timeOfX4;           // количество подработок
        //   paymentHelpBeforeTax = helpTime * 150;

    
    if (contactsOfHourse >= 10) {
        if ( (usefulTime - sumOfTimeX3X4 - 120) >= 0 ) {
            payment = 120 * paymantWithIncrCoefficient + ((usefulTime - 120 - sumOfTimeX3X4) * 380) + (timeOfX3 * paymantWithIncrCoefficient * 3) + (timeOfX4 * paymantWithIncrCoefficient * 4);
        } else {
            payment = (usefulTime - sumOfTimeX3X4) * paymantWithIncrCoefficient + (timeOfX3 * paymantWithIncrCoefficient * 3) + (timeOfX4 * paymantWithIncrCoefficient * 4);
        }
    } else {
        payment = (usefulTime - sumOfTimeX3X4) * paymantWithIncrCoefficient + (timeOfX3 * paymantWithIncrCoefficient * 3) + (timeOfX4 * paymantWithIncrCoefficient * 4);
    }

    console.log(usefulTime - sumOfTimeX3X4 - 120);
    console.log(120 * paymantWithIncrCoefficient);
    console.log(((usefulTime - 120 - sumOfTimeX3X4) * 380));
    console.log((timeOfX3 * paymantWithIncrCoefficient * 3));
    
    
    const paymentNDFL = payment * 0.87;
    // const paymentHelpAfterTax = paymentHelpBeforeTax * 0.87;
    const resultKpi2 = document.querySelector('.result-kpi2');
    const resultKpi3 = document.querySelector('.result-kpi3');
    const resultKpi = document.querySelector('.result-kpi');
    // const resultPayHelp = document.querySelector('.result-payHelp');
    // const resultPayUseful = document.querySelector('.result-payUseful');
    const resultPayAll = document.querySelector('.result-payAll');
    const resulPayAllNdfl = document.querySelector('.result-payAllNdfl');




    resultKpi2.innerHTML = `Коэффициент RR KPI2: ${kpi2}`;
    resultKpi3.innerHTML = `Коэффициент FCR KPI3: ${kpi3}`;
    resultKpi.innerHTML = `Стоимость часа с учётом KPI: ${paymantWithIncrCoefficient.toFixed(2)} рублей `;
    // resultPayHelp.innerHTML = `Выплата за наставничество: ${paymentHelpBeforeTax} рублей`;
    resultPayAll.innerHTML = `Общая выплата: ${payment} рублей`;
    resulPayAllNdfl.innerHTML = `ИТОГО к выплате с вычетом НДФЛ: ${paymentNDFL} рублей`;

}