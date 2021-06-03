// создание телеграмм бота
const  { Telegraf }  =  require ( 'telegraf' )
const bot = new Telegraf('1850273515:AAEnjzSN92LEOHPG0_zbD-fjfJK9iE9SC-M') //у каждого свои цифры, нельзя делиться 

bot.start(ctx => ctx.reply('Привет, хозяин '))

const hellos = [
    'привет', 'Привет', 'Здравствуй', 'Здравствуйте'
]

const moods = [ //создали массив
    'Отлично', 'Пойдет', 'Хорошо', 'Плохо', 'Великолепно'
]

bot.hears(hellos, ctx => ctx.reply(ctx.message.text))

bot.hears('Как дела?', ctx => ctx.reply(
    moods[Math.floor(Math.random() * moods.length)] //необязательно писать внутри реплай, открываем {} после стрелки, пишем условия и тд, потом пишем ctx.replay('хорошо')
)) // реплай отвечает

bot.hears('') // пишем для того чтобы вводить в тг (слушает)

console.log('BOT HAS BEEN STARTED')
bot.launch() // для вывода 