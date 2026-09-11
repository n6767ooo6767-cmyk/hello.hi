const { Bot } = require("grammy");

const token = process.env.BOT_TOKEN;

if (!token) {
  console.error("BOT_TOKEN is not set. Add it in Railway Variables/Secrets.");
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

bot.command("help", (ctx) =>
  ctx.reply(
    "🤖 Помощь\n\n" +
      "/start — главное меню\n" +
      "/ping — проверка бота\n" +
      "/score — твой счёт\n" +
      "/search <запрос> — найти сайт\n\n" +
      "Пример:\n/search github\n/search wikipedia.org"
  )
);

bot.command("ping", (ctx) => ctx.reply("🏓 Pong! Бот работает."));

bot.command("score", (ctx) => ctx.reply("🏆 Твой счёт: 0 очков"));

bot.command("search", async (ctx) => {
  const query = ctx.match?.trim();

  if (!query) {
    return ctx.reply("🔎 Напиши, что найти.\n\nПример: /search github");
  }

  const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

  await ctx.reply(`🔎 Поиск: ${query}\n\nОткрыть результаты:\n${url}`);
});

bot.on("message:text", (ctx) => {
  const text = ctx.message.text.trim();

  if (text.startsWith("/")) return;

  return ctx.reply("👀 Я тебя услышал! Попробуй /search <запрос> или /help");
});

bot.catch((err) => {
  console.error("Bot error:", err.error);
});

bot.start({
  onStart: () => console.log("🤖 Telegram bot started"),
});
