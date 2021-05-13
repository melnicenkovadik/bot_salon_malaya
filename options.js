module.exports = {

    masterOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Мастер маникюра', callback_data: '/manikMaster'}],
                [{text: 'Парикхмахер', callback_data: '/hairMaster'}]
            ]
        })
    },
    manikOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '10:00', callback_data: '10:00'}, {text: '12:00', callback_data: '12:00'}, {
                    text: '14:00',
                    callback_data: '14:00'
                }],
                [{text: 'Написать Алине', callback_data: 'alinkaslz'}],
            ]
        })
    },
    hairOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '10:00', callback_data: '10:00'}, {text: '12:00', callback_data: '12:00'}, {
                    text: '14:00',
                    callback_data: '14:00'
                }],
                [{text: 'Написать Маше', callback_data: 'mariaArinina'}],
            ]
        })
    },
    menu: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Продолжить', callback_data: '/appointment'}],

            ]
        })
    }
}
