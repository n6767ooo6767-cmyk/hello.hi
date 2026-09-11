const { Bot } = require("grammy");

// ВСТАВЬ СЮДА ТОКЕН ОТ @BotFather
const token = "ВСТАВЬ_СЮДА_ТОКЕН_БОТА";

if (!token || token === "ВСТАВЬ_СЮДА_ТОКЕН_БОТА") {
  console.error("❌ Вставь токен бота в переменную token в index.js");
  process.exit(1);
}

const bot = new Bot(token);

bot.command("start", async (ctx) => {
  await ctx.reply(
    "👋 Привет! Я бот для мини-соревнований и поиска сайтов.\n\n" +
      "Команды:\n" +
      "/start — запустить бота\n" +
      "/help — помощь\n" +
      "/ping — проверить работу\n" +
      "/score — посмотреть свой счёт\n" +
      "/search — поиск сайта\n\n" +
      "Например: /search github.com"
  );
});

bot.command("help", async (ctx) => {
  await ctx.reply(
    "🤖 Помощь\n\n" +
      "/start — главное меню\n" +
      "/ping — проверка бота\n" +
      "/score — твой счёт\n" +
      "/search <запрос> — найти сайт\n\n" +
      "Пример:\n/search github"
  );
});

bot.command("ping", async (ctx) => {
  await ctx.reply("🏓 Pong! Бот работает.");
});

bot.command("score", async (ctx) => {
  await ctx.reply("🏆 Твой счёт: 0 очков");
});

bot.command("search", async (ctx) => {
  const query = ctx.match?.trim();

  if (!query) {
    await ctx.reply("🔎 Напиши, что найти.\n\nПример: /search github");
    return;
  }

  const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  await ctx.reply(`🔎 Поиск: ${query}\n\nОткрыть результаты:\n${url}`);
});

bot.on("message:text", async (ctx) => {
  const text = ctx.message.text.trim();
  if (text.startsWith("/")) return;
  await ctx.reply("👀 Я тебя услышал! Попробуй /search <запрос> или /help");
});

bot.catch((err) => {
  console.error("❌ Ошибка бота:", err.error);
});

bot.start({
  onStart: () => console.log("🤖 Telegram-бот запущен!")
});
