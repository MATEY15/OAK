var dataCalendar = [{
        'date-day': '2020,9,17',
        'date-info': [
            '<span>12:25</span> Курсы по мод 1.1',
            '<span>12:30</span> Курсы по мод 1.2',
            '<span>12:35</span> Курсы по мод 1.3'
        ]
    },
    {
        'date-day': '2020,9,5',
        'date-info': [
            '<span>16:25</span> Курсы по мод 2.1',
            '<span>16:30</span> Курсы по мод 2.2',
            '<span>16:35</span> Курсы по мод 2.3',
            '<span>17:35</span> Курсы по мод 2.4',
            '<span>10:35</span> Курсы по мод 2.5',
        ]
    },
    {
        'date-day': '2020,9,20',
        'date-info': [
            '<span>18:25</span> Курсы по мод 3.1',
            '<span>18:30</span> Курсы по мод 3.2',
            '<span>18:35</span> Курсы по мод 3.3'
        ]
    },
    {
        'date-day': '2020,9,18',
        'date-info': [
            '<span>18:25</span> Курсы по мод 3.1',
            '<span>18:30</span> Курсы по мод 3.2',
            '<span>18:35</span> Курсы по мод 3.3'
        ]
    },
];

function Calendar2(id, year, month) {
    var Dlast = new Date(year, month + 1, 0).getDate(),
        D = new Date(year, month, Dlast),
        DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
        calendar = '<tr>',
        month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        findDays = "",
        massDays = "",
        nowDay = new Date();

    document.querySelector('#' + id).addEventListener('click', function(e) {
        var target = e.target;

        if (!target.children[0].innerText) {
            console.log('good')
        }
    });

    if (DNfirst != 0) {
        for (var i = 1; i < DNfirst; i++) calendar += '<td>';
    } else {
        for (var i = 0; i < 6; i++) calendar += '<td>';
    }
    for (var i = 1; i <= Dlast; i++) {
        var sliceOb = null,
            timeDate,
            infoDate = "";
        findDays = new Date(new Date().getFullYear(), new Date().getMonth(), i);
        for (var j = 0; j < dataCalendar.length; j++) {
            massDays = new Date(dataCalendar[j]['date-day']);
            if (massDays.getTime() == findDays.getTime() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
                sliceOb = true;
                for (var inc = 0; inc < dataCalendar[j]['date-info'].length; inc++) {
                    infoDate += '<li>' + dataCalendar[j]['date-info'][inc] + '</li>';
                }
            }
        }

        if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
            if (sliceOb) {
                calendar += '<td class="today"><div class="date-wrapper"><ul class="date-list">' + infoDate + '</div><span class="day-default">' + i;
            } else {
                calendar += '<td class="today"><span class="day-default">' + i;
            }
        } else {
            if (sliceOb) {
                calendar += '<td><div class="date-wrapper"><ul class="date-list">' + infoDate + '</div><span class="day-default">' + i;
            } else {
                calendar += '<td><span class="day-default">' + i;
            }
        }
        if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
            calendar += '<tr>';
        }
    }
    for (var i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
    document.querySelector('#' + id + ' tbody').innerHTML = calendar;
    document.querySelector('#head-calendar #mounth-now').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
    // document.querySelector('#' + id + ' thead td:nth-child(1)').innerHTML += '<span id="prev-mounth"></span><span id="next-mounth"></span>'
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
    if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) { // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
        // document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
    }
}
Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
// переключатель минус месяц
document.querySelector('#head-calendar #prev-mounth').onclick = function() {
        Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) - 1);
    }
    // переключатель плюс месяц
document.querySelector('#head-calendar #next-mounth').onclick = function() {
    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) + 1);
}