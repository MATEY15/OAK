var mTag = document.querySelector('#m-tag'),
    mRange = document.querySelectorAll('[data-range]'),
    mSidebar = document.querySelector('.m-sidebar'),
    mResult = document.querySelector('.result-m'),
    mClose = document.querySelector('#m-close'),
    mOpen = document.querySelector('#m-open'),
    allStyle = [],
    mDataAttr = "";

// document.querySelector('.top-menu li a').style.top = '10px';

// Элемент который мы изменяем
mTag.addEventListener('input', startM);

function startM() {
    console.log(mTag.value);
}

// mClose.addEventListener('click', function() {
//     mSidebar.classList.remove('active');
// })
// mOpen.addEventListener('click', function() {
//     mSidebar.classList.add('active');
// })

// Функция margin

// for (var i = 0; i < mRange.length; i++) {
//     console.log(mRange[i].value);
//     console.log(mRange[i]);
// }

mSidebar.addEventListener('input', function(e) {
    var target = e.target;

    // Atribute target console.log(target.attributes["type"].value)
    if (target.attributes["type"].value == 'range') {

        // console.log(target.value)
        // console.log(target.dataset.mFun)

        mDataAttr = target.dataset.mFun;

        // console.log(allStyle.push(mDataAttr + ': ' + target.value + 'px;'))
        // console.log(allStyle.push(mDataAttr + ': ' + target.value + 'px;'))

        console.log(document.querySelector('.box-edit').style[mDataAttr] = target.value + 'px');
        // target.nextElementSibling.text = 10;
        console.log(target.nextElementSibling.children[0].innerHTML = target.value + 'px');
        // console.log(target.nextElementSibling.children);

        // console.log(document.querySelector('.top-menu li a').textContent = "Текст элемента р изменён");
        // target.nextElementSibling.children.innerText = '<strong> hello world </strong>'
        // document.querySelector('.top-menu li a').style.styleAttr = '10px';
        // document.querySelector('.top-menu li a').setAttribute("style", allStyle);
    } else if (target.attributes["type"].value == 'number') {
        mDataAttr = target.dataset.mFun
        console.log(document.querySelector('.box-edit').style[mDataAttr] = target.value + 'px');
        console.log(target.nextElementSibling.children[0].innerHTML = target.value + 'px');

    } else if (target.attributes["type"].value == 'checkbox') {
        mDataAttr = target.dataset.mFun
        if (target.checked) {
            // document.querySelector('main *').style[mDataAttr] = target.dataset.mVisualBorder;
            document.querySelectorAll('header, header *, main, main *, footer, footer *').forEach(function(node) {
                console.log(node.style[mDataAttr] = target.dataset.mVisualBorder)
            });
        } else {
            // document.querySelector('main *').removeAttribute("style");
            document.querySelectorAll('header, header *, main, main *, footer, footer *').forEach(function(node) {
                console.log(node.removeAttribute("style"))
            });
        }
        // document.querySelectorAll('main, main *').forEach(function(node) {
        //     console.log(node.style[mDataAttr] = target.dataset.mVisualBorder)
        // });
        // console.log()
        console.log(target.checked)

    } else {
        console.log('false')
    }
    // console.log(target)

});

// console.log(mRange)