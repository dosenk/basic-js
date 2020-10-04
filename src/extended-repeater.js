module.exports = function repeater(str, options) {
    let s = String(str);
    let rt = options.hasOwnProperty('repeatTimes') ? options.repeatTimes : 1;
    let art = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1;
    let a = options.hasOwnProperty('addition') ? String(options.addition) : '';
    let sep = options.hasOwnProperty('separator') ? String(options.separator) : '+';
    let asep = options.hasOwnProperty('additionSeparator') ? String(options.additionSeparator) : '|';

    for (let j = 1; j < art; j++) {
        a += asep + options.addition;
    }
    s += a;
    for (let i = 1; i < rt; i++) {
        s += sep + String(str).concat(a);
    }
    return s;
};

// console.log(repeater('my test string', { repeatTimes: 5, separator: '?!', addition: 'PLUS', additionRepeatTimes: 1, additionSeparator: '))' }));
// options              это один object из параметров, который содержит свойства:
// repeatTimes          устанавливает number повторения str;
// separator            является string разделяющие повторений str;
// addition             является дополнительным, string который будет добавляться к каждому повторению str;
// additionRepeatTimes  устанавливает number повторения addition;
// additionSeparator    это string разделительные повторения addition.