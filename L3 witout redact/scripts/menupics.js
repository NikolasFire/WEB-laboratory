function TextIconSwap(button_object, icon_path) {
    let curr_page = '';
    for (let i = 5; i < icon_path.length; i++) {
        if (icon_path[i] == '_') {
            break;
        }
        curr_page += icon_path[i];
    }
    if (document.body.getAttribute('name')==(curr_page)) { //эта страница открыта
        return;
    }
    button_object.innerHTML = '<img src="' + icon_path + '" height="20px">';
    console.log('mouseovered and here was text');
}

function IconTextSwap(button_object, text) {
    button_object.innerHTML = text;
    console.log('mouseouted and here was img');
}