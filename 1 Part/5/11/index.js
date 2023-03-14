//1

// let date = new Date(2012, 1, 20, 3, 12)
//
// console.log(date)

//2

// getWeekDay = (date) => {
//     let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
//
//     return days[date.getDay()]
// }
//
// let date = new Date(2012, 0, 3)
// console.log(getWeekDay(date))

//3
// getLocalDay = (date) => {
//     let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
//
//     return date.getDay()
// }
//
// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// console.log( getLocalDay(date) );       // вторник, нужно показать 2

//4

// getDateAgo = (date, days) => {
//     let dateCopy = new Date(date);
//
//     dateCopy.setDate(date.getDate() - days);
//     return dateCopy.getDate();
// }
//
// let date = new Date(2015, 0, 2);
//
// console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

//5

// getLastDayOfMonth = (year, month) => {
//     return new Date(year, month + 1, 0).getDate()
// }
//
// console.log( getLastDayOfMonth(2012, 1) );

//6

// getSecondsToday = () => {
//     let date = new Date()
//
//     return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()
// }
//
// console.log(getSecondsToday()) //

//7

// getSecondsToTomorrow = () => {
//     let date = new Date()
//     let secondsToday = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()
//     let secondsInADay = 86400;
//
//     return secondsInADay - secondsToday;
// }
//
// console.log(getSecondsToTomorrow()) //

//8

//мне их решение понравилось, у меня не очень получалось
formatDate = (date) => {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;

    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (diffSec < 1) {
        return 'прямо сейчас';
    } else if (diffMin < 1) {
        return `${diffSec} сек. назад`
    } else if (diffHour < 1) {
        return `${diffMin} мин. назад`
    } else {
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}

console.log(( formatDate(new Date(new Date - 1)) )); // "прямо сейчас"

console.log(( formatDate(new Date(new Date - 30 * 1000)) )); // "30 сек. назад"

console.log(( formatDate(new Date(new Date - 5 * 60 * 1000)) )); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(( formatDate(new Date(new Date - 86400 * 1000)) ));
