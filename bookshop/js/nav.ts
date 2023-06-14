const link = document.querySelectorAll('.main_nav_link');

let linkIndex: number = 0; 

function tapLink(index) {

    for (let i = 0; i < link.length; i++){ 

        link[i].classList.remove('active_link');
        link[index].classList.add('active_link');
    }
}

link.forEach((item, indexLink) => {
    item.addEventListener('click', () => {
        linkIndex = indexLink;
        tapLink(linkIndex);
      
    });
});
