    let fotos = [
        "1.jpg", "2.jpg", "3.jpg",
        "4.jpg", "5.jpg", "6.jpg",
        "7.jpg", "8.jpg", "9.jpg",
        "10.jpg", "11.jpg", "12.jpg",
        "13.jpg", "14.jpg", "15.jpg"
    ];
    let titles = [
        "Со съемок",
    "25 настолок","Я сейчас","Провожу разведку",
    "Коллекция толкиниста","Задержан отрядом NEET",
    "Наша команда","На работе","Сменил имидж",
    "Научная литература","Думаю, что еще добавить",
    "Неповторимый оригинал","Жалкая пародия",
    "Dead Мороз","Steam"
    ];

    

function loadPhotos() {
    var path = "/img/photos/";

    for (let i = 0; i < fotos.length; i++) {
        fotos[i] = path + fotos[i];
    }

    document.write('<table align="center" class="album">');

    for (var i = 1; i <= fotos.length; i++) {
        if ((i-1) % 5 == 0 && i != 1) {
            document.write("</tr><tr>");
        }
        if (i == 1) {
            document.write("<tr>");
        }
        document.write('<td><img src="' + fotos[i-1] +'" height="185px" width="192px"><h1 class = album>' +
            titles[i-1] +' </h1></img></td>');
        if (i == fotos.length) {
            document.write("</tr></table>");
        }
    }
}

loadPhotos();
