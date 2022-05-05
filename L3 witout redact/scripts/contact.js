window.onload = function () {
    var valid = [false, false,];
    //Проверка ФИО
    document.getElementById('fio').onblur = function () {
        var fio_d = this.value;
        var val = true;
        valid[0] = false;
        
        if (val) {
            var count_word = 0;
            for (var i = 0; i < fio_d.length; i++) {
                if ((fio_d[i] == " ") && (fio_d[i + 1] != " ")) {
                    count_word++;
                }
            }
            if (count_word != 2) {
                document.getElementById('demo1').innerHTML = "Нужно ввести 3 слова";
                this.style.boxShadow = "0 0 15px 4px #f00";
                val = false;
            }
        }
        if (val) {
            document.getElementById('demo1').innerHTML = "";
            this.style.boxShadow = "0 0 15px 4px #f00";
            valid[0] = true;
        }
        if (fio_d == "") {
            document.getElementById('demo1').innerHTML = "Поле пустое!";
            this.style.boxShadow = "0 0 15px 4px #f00";
            val = false;
        }
        else {
            for (i = 0; i < fio_d.length; i++) {
                if ((fio_d[i] != " ") && ((fio_d[i] < 'А') || (fio_d[i] > 'я')))
                    document.getElementById('demo1').innerHTML = "Недопустимое значение!";
                    this.style.boxShadow = "0 0 15px 4px #0f0";
                val = false;
            }
        }
    }
    //Проверка телефона
    document.getElementById('phone').onblur = function () {
        var phone = this.value;
        var val = true;
        valid[0] = false;
        if (phone == "") {
            document.getElementById('demo2').innerHTML = "Поле пустое!";
            this.style.boxShadow = "0 0 15px 4px #f00";
            val = false;
        }
        if (isNaN(phone)) {
            document.getElementById('demo2').innerHTML = "Номер должен быть числом!";
            this.style.boxShadow = "0 0 15px 4px #f00";
            val = false;
        }
        if ((phone.length < 9) || (phone.length > 11)) {
            document.getElementById('demo2').innerHTML = "Номер не должен быть от 9 до 11 символов";
            this.style.boxShadow = "0 0 15px 4px #f00";
            val = false;
        }
        if ((phone[0] != '+') || ((phone[1] != 7) && (phone[1] != 3))) {
            document.getElementById('demo2').innerHTML = "Номер должен начинаться с +3 или +7";
            this.style.boxShadow = "0 0 15px 4px #f00";
            val = false;
        }
        if (val) {
            this.style.boxShadow = "0 0 15px 4px #0f0";
            document.getElementById('demo2').innerHTML = "";
            valid[1] = true;
        }
    }
}

