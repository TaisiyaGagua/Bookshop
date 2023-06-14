var headerLink = document.querySelectorAll(".header__link");
var currentHeaderIndex = 0;
function headerLinkTab(index) {
    for (var header_i = 0; header_i < headerLink.length; header_i++) {
        headerLink[header_i].classList.remove('header_button_active');
    }
    headerLink[index].classList.add('header_button_active');
}
headerLink.forEach(function (item, indexlink) {
    item.addEventListener('click', function () {
        currentHeaderIndex = indexlink;
        headerLinkTab(currentHeaderIndex);
    });
});
