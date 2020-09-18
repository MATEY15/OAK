var dataCalendar = [{
        'date-day': '2020,9,17',
        'date-info': [
            ['18: 25', 'Курсы по мод 1'],
            ['18: 30', 'Курсы по мод 2'],
            ['18: 35', 'Курсы по мод 3'],
        ]
    },
    {
        'date-day': '2020,9,3',
        'date-info': [
            ['12: 25', 'Курсы по мод 1'],
            ['12: 30', 'Курсы по мод 2'],
            ['12: 35', 'Курсы по мод 3'],
        ]
    },
];
// console.log(dataCalendar[0]['date-day'])

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


        // console.log(new Date(dataCalendar[0]['date-day']))

        if (!target.children[0].innerText) {
            console.log('good')
        }

        for (var i = 0; i < dataCalendar.length; i++) {
            findDate(i);
        }

        function findDate(data) {
            for (var i = 1; i < Dlast; i++) {
                massDays = new Date(dataCalendar[data]['date-day']);
                findDays = new Date(new Date().getFullYear(), new Date().getMonth(), i);
                // console.log(massDays - findDays == 0)
                if (massDays - findDays == 0) {
                    console.log(i)
                }
            }
        }

        // console.log(target.children.length)
        // nowDay.setDate(+target.children[0].innerText)
        // console.log(nowDay.getDate()) // День при клике
        // console.log(target.children[0].innerText)
        // console.log(new Date().getFullYear(), new Date().getMonth())
        // console.log(new Date(D.getFullYear(), D.getMonth(), 1).getDay())
        // console.log(new Date().getDate())
        // console.log(new Date().getFullYear())
        // console.log(new Date().getMonth())
        // console.log(new Date(new Date().getFullYear(), new Date().getMonth(), +target.children[0].innerText))
        // console.log(new Date('2020,9,14'))
        // console.log(new Date(dataCalendar['date-day']))
    });

    if (DNfirst != 0) {
        for (var i = 1; i < DNfirst; i++) calendar += '<td>';
    } else {
        for (var i = 0; i < 6; i++) calendar += '<td>';
    }
    for (var i = 1; i <= Dlast; i++) {
        var sliceOb = null,
            timeDate,
            infoDate;
        findDays = new Date(new Date().getFullYear(), new Date().getMonth(), i);


        if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
            // calendar += '<td class="today"><span class="day-default">' + i;
            for (var j = 0; j < dataCalendar.length; j++) {
                timeDate = dataCalendar[j]['date-time'];
                infoDate = dataCalendar[j]['date-info'];
                // console.log(dataCalendar[j]['date-info'][0][0])
                for (var inc = 0; inc < dataCalendar[j]['date-info'][0].length; inc++) {
                    console.log(dataCalendar[j]['date-info'][0][inc])
                }
                massDays = new Date(dataCalendar[j]['date-day']);
                if (massDays.getTime() == findDays.getTime() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
                    sliceOb = true;
                }
            }

            if (sliceOb) {
                calendar += '<td class="today"><div class="date-wrapper">' + timeDate + '<br>' + infoDate + '</div><span class="day-default">' + i;
            } else {
                calendar += '<td class="today"><span class="day-default">' + i;
            }
        } else {

            for (var j = 0; j < dataCalendar.length; j++) {
                timeDate = dataCalendar[j]['date-time'];
                infoDate = dataCalendar[j]['date-info'];
                massDays = new Date(dataCalendar[j]['date-day']);
                if (massDays.getTime() == findDays.getTime() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
                    sliceOb = true;
                }
            }

            if (sliceOb) {
                calendar += '<td><div class="date-wrapper"><ul><li>' + timeDate + infoDate + '</div><span class="day-default">' + i;
            } else {
                calendar += '<td><span class="day-default">' + i;
            }

            // console.log(i)
            // if (dataCalendar.length) {
            //     for (var j = 0; j < dataCalendar.length; j++) {
            //         // findDate(i);
            //         massDays = new Date(dataCalendar[j]['date-day']);
            //         // findDays = new Date(new Date().getFullYear(), new Date().getMonth(), i);
            //         console.log(dataCalendar[j]['date-day'])
            //         if (massDays - findDays == 0) {
            //             calendar += '<td><div class="sdsdf"><span class="day-default">' + i;
            //         }
            //     }
            //     // console.log(i + " - " + (massDays - findDays == 0))

            //     // calendar += '<td><div class="sdsdf"><span class="day-default">' + i;
            // } else {
            //     calendar += '<td><span class="day-default">' + i;
            // }

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