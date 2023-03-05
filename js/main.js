// let numberOfFilms = +prompt("How many films have you already watched")
// // alert(`Wow ${numberOfFilms} is a lot`)
//
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: {},
//     privat: false,
// }
// let lastFilm1 = prompt("What films you wached lastes")
// let lastFilmScore1 = prompt("Score film")
//
// let lastFilm2 = prompt("What films you wached lastes")
// let lastFilmScore2 = prompt("Score film")
//
// personalMovieDB.movies[lastFilm1] = lastFilmScore1
// personalMovieDB.movies[lastFilm2] = lastFilmScore2
//
// console.log(personalMovieDB)


// function minMax(arr) {
//     return [Math.min.apply(null, arr), Math.max.apply(null, arr)]
// }
// console.log(minMax([2, 1]))

// const minMax = (arr) => [Math.min(...arr), Math.max(...arr)];
// console.log(minMax([2, 9, 10, 25, 47, 4, 1]))

// -------------- Повторение символов строки
// function accum(string){
//     let arr = string.toUpperCase().split("");
//     let repeatArr = arr.map(function (el,i){
//         return el += el.repeat(i).toLowerCase()
//     });
//     let resString = repeatArr.join('-')
//     return resString;
// }
// console.log(accum('Qwert'))

// function accum(string) {
//     return string.toUpperCase().split('').map(
//         function (el, i) {
//             return el += el.repeat(i).toLowerCase()
//         }
//     ).join('-');
// }
//
// console.log(accum('Qwert'))

// const accum = (string) =>
//     string
//         .toUpperCase()
//         .split('')
//         .map((el,i) => `${el}${el.repeat(i).toLowerCase()}`).join('-')
//
// console.log(accum('Qwert'))


// function capitals(word) {
//     let bigLetters = word.toUpperCase().split('')
//     let smallLetters = word.split('');
//     let res = [];
//     for (let i = 0; i < word.length; i++) {
//         if (smallLetters[i] === bigLetters[i]) {
//             res.push(i)
//         }
//     }
//     return res
// }

// function capitals(word) {
//     let res = []
//     word.split('').forEach(function (letter, index) {
//         if (letter === letter.toUpperCase()) {
//             res.push(index)
//         }
//     });
//     return res
// }

// const capitals = (word) =>
//     word.split('').reduce((result,letter,index) => {
//         if (letter === letter.toUpperCase()) {result.push(index);}
//         return result
//     },[])

// function sayHello(name){
//     return`Hello ${name}`
// }
// console.log(sayHello('Roman'))

// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1]
// }
// console.log(returnNeighboringNumbers(5))

// function getMathResult(num1, num2) {
//     if (isNaN(num2) || num2 <= 0) return num1
//     let res = '';
//     for (let i = 1; i <= num2; i++){
//         res += i !== num2 ? `${num1 * i}---` :`${num1 * i}`
//     }
//     return res
// }
// console.log(getMathResult(5,3))


// function calculateVolumeAndArea(edge) {
//     if (typeof edge == "string" || edge % 1 !== 0  || edge <= 0) return 'При вычислении произошла ошибка'
//     return `Объем куба: ${edge ** 3}, площадь всей поверхности: ${6 * (edge ** 2)}`
// }
//
// console.log(calculateVolumeAndArea(3))


// function getCoupeNumber(seat) {
//     if (typeof seat == "string" || seat % 1 !== 0  || seat <= 0) return 'Ошибка. Проверьте правильность введенного номера места'
//     if (seat === 0 || seat > 36 ) return 'Таких мест в вагоне не существует'
//     return Math.ceil(seat / 4)
// }
//
// console.log(getCoupeNumber(33))

function getTimeFromMinutes() {

}
