const moment = require('moment')

date = moment().utcOffset(-3).format("DD/MM/YYYY HH:mm:ss")
console.log(date)

let data = new Date();
let dataFormatada = ((data.getDate())) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear() + " " + data.getHours() + "h" + data.getMinutes() + "m";
console.log(dataFormatada);
console.log(data.toLocaleString('pt-br', {
    timeZone: 'America/Sao_Paulo'
}))