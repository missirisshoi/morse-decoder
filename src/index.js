const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var result = '';
    for (var i=0; i<expr.length; i+=10) {
        //выбираем поочередно по 10 символов из входящей строки
        let symbol10 = expr.slice(i, i+10);
        //если получено 10 звездочек - это пробел
        if (symbol10 == '**********') {
            result += ' ';
        }
        //если звездочек нет, переводим выбранные 10 символов в точки и тире
        else {
            let symbol = '';
            for (var k=0; k<9; k+=2) {
                //перебираем по 2 символа и присваиваем соответствующее значение (. или -)
                let symbol2 = symbol10.slice(k, k+2);
                if (symbol2 == 10) {
                    symbol += '.';
                }
                else if (symbol2 == 11) {
                    symbol += '-';
                }
            }
            //выбираем из таблицы Морзе символ, соответствующий полученному коду из точек и тире
            result += MORSE_TABLE[symbol];
        }
    }
    //возвращаем результат
    return result;
}

module.exports = {
    decode
}