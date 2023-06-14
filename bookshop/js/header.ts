const headerLink: NodeListOf<Element> = document.querySelectorAll(".header__link");

let currentHeaderIndex: number = 0;

function headerLinkTab(index: number): void {
    for (let header_i = 0; header_i < headerLink.length; header_i++) {
        headerLink[header_i].classList.remove('header_button_active');
    }
    headerLink[index].classList.add('header_button_active');
}

headerLink.forEach((item: Element, indexlink: number) => {
    item.addEventListener('click', () => {
        currentHeaderIndex = indexlink;
        headerLinkTab(currentHeaderIndex);
    });
});
