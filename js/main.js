'use strict'


let docWidth = document.documentElement.clientWidth



// скрипт для фона


let banner_resize = function() {
    var banners = [].slice.call(document.querySelectorAll('.idc-bg-wrapper'));
    banners.forEach(function(elem) {
        return elem.style.width = document.documentElement.clientWidth + 'px';
    });
}

let TooltipMobile = function(docwidth) {
    if (docwidth < 1200) {
        let AllTooltip = [].slice.call(document.querySelectorAll('.idc-information'));
        /*    console.log(AllTooltip.length) */
        AllTooltip.forEach(function(elem) {
            elem.addEventListener('click', function() {
                this.classList.add('open')
            })
        });
        // Обработки клика по документу вне области tooltip //
        document.addEventListener('click', function(e) { // событие клика по веб-документу
            let ToolTipOpen = document.querySelector('.idc-information.open')
            console.log(ToolTipOpen)
            console.log(e.target)
            const target = e.target
            if (ToolTipOpen.contains(target)) return false
            else {
                ToolTipOpen.classList.remove('open')
            }
        });
        //----------------------//
    } else return false;
}


document.onreadystatechange = function() {

    if (document.readyState === 'complete') {
        // Ваш скрипт



        window.addEventListener('resize', function() {
            docWidth = document.documentElement.clientWidth
            banner_resize();
            TooltipMobile(docWidth)
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
        // Инициализация работы тултипов c учётом тултипа сравнения в мини карточках //
        TooltipMobile(docWidth)
    }

};