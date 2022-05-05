let ans3 = 0;

function SelectChanged(sel) {
    ans3 = sel.options[sel.selectedIndex].text;
}

function CheckAnswers() {
    answer_one ="Сила";
    answer_two =2;
    answer_three ="Божий замысел";
    cheker = new Array(3);
    for (let i = 0; i < 3; i++) cheker[i] = false;
    if (answer_one == document.test_form.ans1.value) cheker[0] = true;
    if (answer_two == document.test_form.ans2.value) cheker[1] = true;
    if (answer_three == ans3) cheker[2] = true;
    flag = true;
    for (let i = 0; i<3; i++)
        if (cheker[i] == false) flag = false;
    if (flag == true) alert('Правильно');
    if (flag == false) alert('Ошибка заполнения');
}

CheckAnswers();