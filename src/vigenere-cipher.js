class VigenereCipheringMachine {
    flag = true;
    constructor(command) {
        if (command === false) this.flag = false;
    }
    encrypt(message, key) {
        if (message, key === undefined) throw new Error();
        const mes = message.toUpperCase();
        const k = key.toUpperCase();
        let res = '';
        for (let i = 1, j = 1; i <= mes.length; i++) {
            let con = mes[i - 1];
            if (65 > con.charCodeAt() || con.charCodeAt() > 90) {
                res += con;
                continue;
            }
            res += String.fromCharCode(((con.charCodeAt() + k[j - 1].charCodeAt() - 130) % 26) + 65);
            if (j % key.length === 0) j = 0;
            j++;
        }
        return this.flag === true ? res : res.split('').reverse().join('');
    }
    decrypt(encryptedMessage, key) {
        if (encryptedMessage, key === undefined) throw new Error();
        let res = '';
        const k = key.toUpperCase();
        for (let i = 1, j = 1; i <= encryptedMessage.length; i++) {
            let enccon = encryptedMessage[i - 1];
            if (65 > enccon.charCodeAt() || enccon.charCodeAt() > 90) {
                res += enccon;
                continue;
            }
            res += String.fromCharCode(((enccon.charCodeAt() - k[j - 1].charCodeAt() + 26) % 26) + 65);
            if (j % key.length === 0) j = 0;
            j++;
        }
        return this.flag === true ? res : res.split('').reverse().join('');
    }
}
module.exports = VigenereCipheringMachine;