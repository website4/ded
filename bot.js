const { Telegraf, Markup } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(`5894677459:AAFiQTNDitVhKr5sFad3J3BWHc78iGcVW5Q`);
bot.start((ctx) => ctx.reply(`Приветушки дедушки 




https://sun9-63.userapi.com/impg/l1ZiY9vZjqtRyy_8FMgBnnh5PRrHcKJh7YHHzA/Hl34fFsXz7U.jpg?size=1200x1599&quality=95&sign=d8fae3d0cfa278df6d1c05b185a7259a&type=album`,      
    Markup.keyboard([
        ['Поздравления', 'Что желает тебе Вован'],
    ])
    .resize()
)
);
bot.help((ctx) => ctx.reply('С др'));
bot.on('sticker', (ctx) => ctx.reply('🥳'));
bot.hears('Что желает тебе Вован', (ctx) => ctx.reply(`Вован тебе желает:
- много денег
- очень много денег
- отличное здоровье
- поехать с Катей, Вовой, Бабушкой и с тобой в Солнечную долину 1 января
- поехать с Катей, Вовой, Бабушкой и с тобой на Эльбрус
`));

bot.hears('Поздравления', (ctx) => ctx.reply(`Счастья радости желаю и нажми на кнопку 'Вован тебе желает'`));

bot.launch();