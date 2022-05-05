function list(type) {
    document.write('<' + type + 'l>' ) 
    for (var i = 1; i < list.arguments.length; i++) {
        document.write('<li class = "unactive">' + list.arguments[i]+'</li>');
    }
    document.write("</" + type + "L>")
}

list('u','<a href="#films">Фильмы</a>','<a href="#books">Книги</a>','<a href="#bgames">Настольные игры</a>','<a href="#music">Музыка</a>')