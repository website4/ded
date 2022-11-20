const { Telegraf, Markup } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply('Приветушки дедушки',      
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