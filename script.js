// const helpTimeBlock = document.querySelector('#helpTimeBlock');

// checkbox.addEventListener('change', function () {
//     if (this.checked) {
//         helpTimeBlock.classList.add("visible")
//     } else helpTimeBlock.classList.remove("visible")
// });

const btn = document.querySelector("#button");

btn.addEventListener("click", () => {
    const usefulTime = +document.querySelector("#usefulTime").value;
    const timeOfX3 = +document.querySelector("#timeOfX3").value;
    const timeOfX4 = +document.querySelector("#timeOfX4").value;
    const contactsOfHourse = +document.querySelector("#contactsOfHourse").value;
    const rr = +document.querySelector("#rr").value;
    const fcr = +document.querySelector("#fcr").value;

    //   helpTime = +document.querySelector('#helpTime').value,
    //   checkbox = document.querySelector('#checkbox');


    if (contactsOfHourse < 7) {
        kpi1 = 75;
    } else if (contactsOfHourse >= 7 && contactsOfHourse < 8) {
        kpi1 = 85;
    } else if (contactsOfHourse >= 8 && contactsOfHourse < 9) {
        kpi1 = 95;
    } else if (contactsOfHourse >= 9 && contactsOfHourse < 10) {
        kpi1 = 115;
    } else if (contactsOfHourse >= 10 && contactsOfHourse < 12) {
        kpi1 = 140;
    } else if (contactsOfHourse >= 12 && contactsOfHourse < 14) {
        kpi1 = 160;
    } else if (contactsOfHourse >= 14 && contactsOfHourse < 16) {
        kpi1 = 180;
    } else {
        kpi1 = 190;
    }

    if (rr < 80) {
        kpi2 = 0.2;
    } else if (rr >= 80 && rr < 85) {
        kpi2 = 0.4;
    } else if (rr >= 85 && rr < 88) {
        kpi2 = 0.5;
    } else if (rr >= 88 && rr < 91) {
        kpi2 = 0.6;
    } else {
        kpi2 = 0.7;
    }

    if (fcr < 80) {
        kpi3 = 0.2;
    } else if (fcr >= 80 && fcr < 85) {
        kpi3 = 0.4;
    } else if (fcr >= 85 && fcr < 87) {
        kpi3 = 0.5;
    } else if (fcr >= 87 && fcr < 90) {
        kpi3 = 0.6;
    } else {
        kpi3 = 0.7;
    }

    /*
      const paymentHelpBeforeTax = helpTime * 150,                              // наставничество
          paymentAll = usefulTime + paymentWithPartTime1 + paymentWithPartTime2, // все подработки
          paymentBeforeTaxWithPT = (usefulTime + paymentWithPartTime1 + paymentWithPartTime2) * paymantWithIncrCoefficient + paymentHelpBeforeTax, // 
          paymentAfterTaxWithPT = paymentBeforeTaxWithPT * (1 - 0.13);

      */


    // const incrCoefficient = kpi2 + kpi3, //повышающий коэф
    //     paymantWithIncrCoefficient = kpi1 * incrCoefficient, //стоимость часа с учетом повыш коэф
    //     paymentBeforeTax = usefulTime * paymantWithIncrCoefficient, //до вычета ндфл
    //     paymentAfterTax = paymentBeforeTax * (1 - 0.13), // после вычета ндфл
    //     // paymentWithPartTime1 = partTime1 * 0.5,                             // подработки х1.5
    //     // paymentWithPartTime2 = partTime2,                                   // подраотки х3
    //     paymentHelpBeforeTax = helpTime * 150, // наставничество
    //     paymentAll = usefulTime + paymentWithPartTime1 + paymentWithPartTime2, // все подработки
    //     paymentBeforeTaxWithPT = (usefulTime + paymentWithPartTime1 + paymentWithPartTime2) * paymantWithIncrCoefficient + paymentHelpBeforeTax, // 
    //     paymentAfterTaxWithPT = paymentBeforeTaxWithPT * (1 - 0.13);



    const incrCoefficient = kpi2 + kpi3, //повышающий коэф
        paymantWithIncrCoefficient = kpi1 * incrCoefficient, //стоимость часа с учетом повыш коэф
        sumOfTimeX3X4 = timeOfX3 + timeOfX4; // количество подработок
    //   paymentHelpBeforeTax = helpTime * 150;

    if (sumOfTimeX3X4 > usefulTime) {
        alert(`Количество подработок ${sumOfTimeX3X4}ч превышает полезное время ${usefulTime}ч. Введи Корректное значение`);
        window.location.reload();
    };

    if (contactsOfHourse >= 10) {
        if (sumOfTimeX3X4 >= 120 && (usefulTime >= sumOfTimeX3X4)) {
            payment = (timeOfX3 * 3 * paymantWithIncrCoefficient) + (timeOfX4 * 4 * paymantWithIncrCoefficient) + (usefulTime - sumOfTimeX3X4) * 380;
        } else if (usefulTime >= 120 && sumOfTimeX3X4 < 120) {
            payment = (timeOfX3 * 3 * paymantWithIncrCoefficient) + (timeOfX4 * 4 * paymantWithIncrCoefficient) + (120 - sumOfTimeX3X4) * paymantWithIncrCoefficient + (usefulTime - 120) * 380;
        } else {
            payment = (usefulTime - sumOfTimeX3X4) * paymantWithIncrCoefficient + (timeOfX3 * paymantWithIncrCoefficient * 3) + (timeOfX4 * paymantWithIncrCoefficient * 4);
        }
    } else {
        payment = (usefulTime - sumOfTimeX3X4) * paymantWithIncrCoefficient + (timeOfX3 * paymantWithIncrCoefficient * 3) + (timeOfX4 * paymantWithIncrCoefficient * 4);
    }


    let paymentNDFL = payment * (1 - 0.13);

    let wrapper = document.querySelector(".wrapper");

    let elem = document.createElement("div");
    elem.className = "result-block";
    elem.innerHTML = `
                        <p> KPI_1(контакты в час): ${kpi1} руб / ч </p> 
                        <p> KPI_2(клиентская оценка RR): ${kpi2} </p> 
                        <p> KPI_3(повторные обращения FCR): ${kpi3} </p> 
                        <p> Стоимость часа с учётом KPI: ${kpi1} * (${kpi2} + ${kpi3}) = ${paymantWithIncrCoefficient.toFixed(2)} рублей </p> 
                        <p> Сумма к перечислению: ${payment.toFixed(2)} рублей </p> 
                        
                        <p> <i>Сумма к зачислению с учётом удержания НДФЛ: <b>${paymentNDFL.toFixed(2)} рублей </b> </i> </p>
        `;
    wrapper.append(elem);
});