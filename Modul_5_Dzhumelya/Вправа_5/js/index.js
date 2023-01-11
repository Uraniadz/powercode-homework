let calculator = {
    save: {},
    read: function () {
        const num_1 = prompt('Введіть число', '');
        if (typeof num_1 === "object") {
            alert('You entered CANCEL');
            return;
        }else if (isNaN(num_1)){
            alert('This is no number. Enter only number');
            return;
        }else {
            this.save.numOne = Number(num_1);
        }
        const num_2 = prompt('Введіть число', '');
        if (typeof num_2 === 'object') {
            alert('You entered CANCEL');
            return;
        }else if (isNaN(num_2)){
            alert('This is no number. Enter only number');
            return;
        }else {
            this.save.numTwo = Number(num_2);
        }
    },
    sum: function () {
        return this.save.numOne + this.save.numTwo;
    },
    mul: function () {
        return this.save.numOne * this.save.numTwo;
    },
    div: function () {
        return this.save.numOne / this.save.numTwo;
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
alert(calculator.div());
