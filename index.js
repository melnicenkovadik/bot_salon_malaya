const TelegramApi = require('node-telegram-bot-api')
const {
    masterOptions,
    manikOptions,
    hairOptions,
    menu
} = require('./options.js')
const token = '1743094486:AAHoBydLtywcbWyAUz2IPXvNboWT930OOnc'
const bot = new TelegramApi(token, {polling: true})
var spawn = require('child_process').spawn;
spawn('node', ['./index.js'], {
    detached: true
});
const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Начальное приветствие'},
        {command: '/appointment', description: 'Запись на прием'},
        {command: '/manikMaster', description: 'Запись к мастеру маникюра'},
        {command: '/hairMaster', description: 'Запись к парикхмехеру'}
    ])
    bot.on('message', (msg) => {
        const text = msg.text
        const chatId = msg.chat.id
        if (text === '/start') {
            bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ee9/fa8/ee9fa8b6-2555-3d28-a06c-9af0e1b28f41/192/16.webp')
            return bot.sendMessage(chatId, `Привет ${msg.from.first_name} ${msg.from.last_name !== undefined ? msg.from.last_name : ''}! \nДобро пожаловать в телеграм бот клуба красоты Beauty Lady MA`, menu)
        }
        if (text === '/appointment') {
            bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ee9/fa8/ee9fa8b6-2555-3d28-a06c-9af0e1b28f41/10.webp')
            return bot.sendMessage(chatId, `Вы хотите записать к мастеру маникюра или к пакхмахеру?`, masterOptions)
        }
        if (text === '/manikMaster') {
            bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ee9/fa8/ee9fa8b6-2555-3d28-a06c-9af0e1b28f41/14.webp')
            return bot.sendMessage(chatId, `Вашего мастера зовут Алина, cвободные часы сегодня:`, manikOptions)
        }
        if (text === '/hairMaster') {
            bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ee9/fa8/ee9fa8b6-2555-3d28-a06c-9af0e1b28f41/21.webp')
            return bot.sendMessage(chatId, `Вашего мастера зовут Маша, cвободные часы сегодня:`, hairOptions)
        }
        bot.sendMessage(chatId, `${msg.from.first_name} ,я тебя не понимаю, попробуй ещё раз!`)
    })
    bot.on('callback_query', (msg) => {
        const data = msg.data;
        const chatId = msg.message.chat.id;
        if (data === 'alinkaslz') {
            const alina = '392478621'
            const vad = '616247230,'
            bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ee9/fa8/ee9fa8b6-2555-3d28-a06c-9af0e1b28f41/2.webp')
            bot.sendMessage(alina, ` ${msg.from.first_name} хочет записаться к тебе напиши клиенту сюда @${msg.from.username}`)
            return bot.sendMessage(chatId, ` @${data} напишет Вам сразу как освободится, спасибо и хорошего дня!`)
        }
        if (data === 'mariaArinina') {
            const maria = '804816708'
            bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ee9/fa8/ee9fa8b6-2555-3d28-a06c-9af0e1b28f41/2.webp')
            bot.sendMessage(maria, ` ${msg.from.first_name} хочет записаться к тебе напиши клиенту сюда @${msg.from.username}`)
            return bot.sendMessage(chatId, ` @${data} напишет Вам сразу как освободится, спасибо и хорошего дня!`)
        }
        if (data === '/manikMaster') {
            bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ee9/fa8/ee9fa8b6-2555-3d28-a06c-9af0e1b28f41/14.webp')
            return bot.sendMessage(chatId, `Вы можете выбрать свободное время сегодня, или лично написать своему мастеру`, manikOptions)
        }
        if (data === '/hairMaster') {
            bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ee9/fa8/ee9fa8b6-2555-3d28-a06c-9af0e1b28f41/14.webp')
            return bot.sendMessage(chatId, `Вы можете выбрать свободное время сегодня, или лично написать своему мастеру`, hairOptions)
        }
        if (data === '/appointment') {
            bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ee9/fa8/ee9fa8b6-2555-3d28-a06c-9af0e1b28f41/10.webp')
            return bot.sendMessage(chatId, `Вы хотите записать к мастеру маникюра или к пакхмахеру?`, masterOptions)
        }
    })
}
start()
