function valuIncome(id) {
    const Input = document.getElementById(id);
    const Input2Number = parseFloat(Input.value);
    // Input.value = ''
    return Input2Number

}
function idSelector(id) {
    return AmountHtml = document.getElementById(id)
}



let totalAmount = 0



// salary expense calculation

document.getElementById('calc-btn').addEventListener('click', function () {

    const income = valuIncome('income-input');
    const food = valuIncome('food-input');
    const rent = valuIncome('rent-input');
    const clothes = valuIncome('clothes-input');
    const expanses = food + rent + clothes;

    // error handling
    try {
        if (income <= 0) throw 'Please input positive number';
        if (rent <= 0) throw 'Please input positive to rent box :(';
        if (food <= 0) throw 'Please input positive to food box :(';
        if (clothes <= 0) throw 'Please input positive to clothes box :(';
    } catch (error) {
        idSelector('error-box').innerText = error;
        return
    }
    try {
        if (income < expanses) throw 'Expenses is bigger then income'
        if (isNaN(income) == true) throw 'Please input number'
        if (isNaN(rent) == true) throw 'Please input number'
        if (isNaN(food) == true) throw 'Please input number'
        if (isNaN(clothes) == true) throw 'Please input number'
    } catch (error) {
        idSelector('error-box').innerText = error;
        return
    }



    // color fixing error
    idSelector('income-input').style.color = 'black'
    idSelector('food-input').style.color = 'black'
    idSelector('rent-input').style.color = 'black'
    idSelector('clothes-input').style.color = 'black'


    // Ui value adding

    idSelector('expanses-text').style.color = 'black'
    idSelector('main-balance').style.color = 'black'
    totalAmount = income - expanses;
    idSelector('main-balance').innerText = totalAmount
    idSelector('expanses-text').innerText = expanses;
    idSelector('error-box').innerText = ''
})


// savings
document.getElementById('saving-calc-btn').addEventListener('click', function () {
    const savingParsents = valuIncome('saving-input')
    const income = valuIncome('income-input');
    const saving = income * savingParsents / 100;
    const RemainingBalance = totalAmount - saving;

    try {
        if (RemainingBalance < 0) throw "Saving can't bigger then Balance"
        if (totalAmount <= 0) throw 'income box is invalid'
        if (isNaN(savingParsents) == true || savingParsents <= 0) throw 'Please input valid saving amount'
    } catch (error) {
        idSelector('error-box').innerText = error;
        document.getElementById('saving-input').style.color = 'red'
        return
    }


    idSelector('saving-amount').innerText = saving;

    idSelector('Remaining-balace').innerText = RemainingBalance;
    idSelector('error-box').innerText = '';

});


