let t = ['no\'l', 'bir', 'ikki', 'uch', 'to\'rt', 'besh', 'olti', 'yetti', 'sakkiz', 'to\'qqiz', 'o\'n']
let r = ['', 'o\'n', 'yigirma', 'o\'ttiz', 'qiriq', 'ellik', 'otmish', 'yetmish', 'sakson', 'to\'qson']
function getT(number, index) {
    if (number.toString().split('')[index] != '0')
        return t[number.toString().split('')[index]]

    return ''
}
function getR(number, index) {
    if (number.toString().split('')[index] != '0')
        return r[number.toString().split('')[index]]

    return ''

}

function number_to_word(number) {
    if (number <= 10 && number >= 0) {
        return t[number]
    }
    else if (number > 10 && number <= 99) {
        return `${getR(number, 0)} ${getT(number, 1)}`
    }
    else if (number > 99 && number <= 999) {
        return `${getT(number, 0)} yuz ${getR(number, 1)} ${getT(number, 2)}`
    }
    else if (number > 999 && number <= 9999) {
        return `${getT(number, 0)} ming ${getT(number, 1)} yuz ${getR(number, 2)} ${getT(number, 3)}`
    }
    else if (number > 9999 && number <= 99999) {
        return `${getT(number, 0)} million ${getT(number, 1)} ming ${getT(number, 2)} yuz ${getR(number, 3)} ${getT(number, 4)}`
    }
    else {
        return 'no\'malum'
    }
}
console.log(number_to_word(77779));