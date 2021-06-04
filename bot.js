const  { Telegraf }  =  require ( 'telegraf' )
const bot = new Telegraf(' ')  

bot.start(ctx => ctx.reply('Привет, хозяин '))

const hellos = [
    'привет', 'Привет', 'Здравствуй', 'Здравствуйте'
]

const moods = [ 
    'Отлично', 'Пойдет', 'Хорошо'
]

bot.hears(hellos, ctx => ctx.reply(ctx.message.text))

bot.hears('Как дела?', ctx => ctx.reply(
    moods[Math.floor(Math.random() * moods.length)] 
)) 
bot.hears('') 
console.log('Stop')
bot.launch() 