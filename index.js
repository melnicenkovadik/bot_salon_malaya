require('dotenv').config();
process.env.NTBA_FIX_319 = 1;
const path = require('path')
const express = require('express')
const app = express()
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TOKEN_TELEGRAM, {polling: true});
const {
    masterOptions,
    manikOptions,
    hairOptions,
    menu
} = require('./options.js')


const start = async () => {

    bot.on('message', async (msg) => {
        const chatId = msg.chat.id
        const text = msg.text
        if (text === '/start') {
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ee9/fa8/ee9fa8b6-2555-3d28-a06c-9af0e1b28f41/192/16.webp')
            return bot.sendMessage(chatId, `Привет ${msg.from.first_name} ${msg.from.last_name !== undefined ? msg.from.last_name : ''}! \nДобро пожаловать в телеграм бот клуба красоты Beauty Lady MA`, menu)
        }
        if (text === '/appointment') {
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ee9/fa8/ee9fa8b6-2555-3d28-a06c-9af0e1b28f41/10.webp')
            return bot.sendMessage(chatId, `Вы хотите записать к мастеру маникюра или к пакхмахеру?`, masterOptions)
        }
        if (text === '/manikMaster') {
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ee9/fa8/ee9fa8b6-2555-3d28-a06c-9af0e1b28f41/14.webp')
            return bot.sendMessage(chatId, `Вашего мастера зовут Алина, cвободные часы сегодня:`, manikOptions)
        }
        if (text === '/hairMaster') {
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ee9/fa8/ee9fa8b6-2555-3d28-a06c-9af0e1b28f41/21.webp')
            return bot.sendMessage(chatId, `Вашего мастера зовут Маша, cвободные часы сегодня:`, hairOptions)
        }
        return bot.sendMessage(chatId, `${msg.from.first_name} ,я тебя не понимаю, попробуй ещё раз!`)
    })
    bot.on('callback_query', async (msg) => {
        const data = msg.data;
        const chatId = msg.message.chat.id;
        if (data === 'alinkaslz') {
            const alina = '392478621'
            const vad = '616247230,'
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ee9/fa8/ee9fa8b6-2555-3d28-a06c-9af0e1b28f41/2.webp')
            await bot.sendMessage(alina, ` ${msg.from.first_name} хочет записаться к тебе напиши клиенту сюда @${msg.from.username}`)
            await bot.sendContact(chatId, '+38 073 20 18 295', `${data}`)
            return bot.sendMessage(chatId, ` @${data} напишет Вам сразу как освободится, спасибо и хорошего дня!`)
        }
        if (data === 'mariaArinina') {
            const maria = '804816708'
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ee9/fa8/ee9fa8b6-2555-3d28-a06c-9af0e1b28f41/2.webp')
            await bot.sendMessage(maria, ` ${msg.from.first_name} хочет записаться к тебе напиши клиенту сюда @${msg.from.username}`)
            await bot.sendContact(chatId, '+38 050 04 58 225', `${data}`)
            return bot.sendMessage(chatId, ` @${data} напишет Вам сразу как освободится, спасибо и хорошего дня!`)
        }
        if (data === '/manikMaster') {
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ee9/fa8/ee9fa8b6-2555-3d28-a06c-9af0e1b28f41/14.webp')
            return bot.sendMessage(chatId, `Вы можете выбрать свободное время сегодня, или лично написать своему мастеру`, manikOptions)
        }
        if (data === '/hairMaster') {
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ee9/fa8/ee9fa8b6-2555-3d28-a06c-9af0e1b28f41/14.webp')
            return bot.sendMessage(chatId, `Вы можете выбрать свободное время сегодня, или лично написать своему мастеру`, hairOptions)
        }
        if (data === '/appointment') {
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ee9/fa8/ee9fa8b6-2555-3d28-a06c-9af0e1b28f41/10.webp')
            return bot.sendMessage(chatId, `Вы хотите записать к мастеру маникюра или к пакхмахеру?`, masterOptions)
        }
    })
}

start()
app.listen(process.env.PORT || 3000)
