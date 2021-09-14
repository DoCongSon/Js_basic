const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const list_tabs = $$('.tab-item');
const list_content = $$('.content-item');

const line = $('.line');
line.style.width = $('.tab-item.tab-item__active').offsetWidth + 'px';
line.style.left = $('.tab-item.tab-item__active').offsetLeft + 'px';

list_tabs.forEach((tab,index) => {
    tab.addEventListener("click", function() {
        $('.tab-item.tab-item__active').classList.remove('tab-item__active');
        $('.content-item.content-item__active').classList.remove('content-item__active');

        line.style.width = this.offsetWidth + 'px';
        line.style.left = this.offsetLeft + 'px';
        
        this.classList.add('tab-item__active');
        list_content[index].classList.add('content-item__active');


    })
})
