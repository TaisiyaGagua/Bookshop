var link = document.querySelectorAll('.main_nav_link');
let li_nav = document.querySelectorAll('.li_nav');

var linkIndex = 0;
function tapLink(index) {
    for (var i = 0; i < link.length; i++) {
        link[i].classList.remove('active_link');
        li_nav[i].classList.remove('li_display');
        link[index].classList.add('active_link');
        li_nav[index].classList.add('li_display');
    }
}
link.forEach(function (item, indexLink) {
    item.addEventListener('click', function () {
        linkIndex = indexLink;
        tapLink(linkIndex);
    });
});

