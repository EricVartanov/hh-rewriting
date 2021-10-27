'use strict'






// скрипт для фона


let banner_resize = function() {
    var banners = [].slice.call(document.querySelectorAll('.idc-bg-wrapper'));
    banners.forEach(function(elem) {
        return elem.style.width = document.documentElement.clientWidth + 'px';
    });
}




document.onreadystatechange = function() {

    if (document.readyState === 'complete') {
        // Ваш скрипт



        window.addEventListener('resize', function() {
            banner_resize();
        });
        banner_resize();


        // Aos 

        AOS.init({
            once: true,
        });


        // параллакс

        var rellax = new Rellax('.rellax', {
            center: true // данное свойство отвечает за корректное позиционирование элементов параллакса
        });
        let pageWidth = document.documentElement.clientWidth
        if (pageWidth < 1004) {
            rellax.destroy();
        }

    }
};