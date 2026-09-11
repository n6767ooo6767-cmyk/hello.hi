const { Bot } = require("grammy");

const token = process.env.BOT_TOKEN;

if (!token) {
  console.error("BOT_TOKEN is not set.");
  process.exit(1);
}

const bot = new Bot(token);

bot.command("start", async (ctx) => {
  await ctx.reply(
    "👋 Привет! Я бот для мини-соревнований.\n\n" +
      "Команды:\n" +
      "/start — запустить бота\n" +
      "/help — помощь\n" +
      "/ping — проверить работу\n" +
      "/score — посмотреть свой счёт"
  );
});

bot.command("help", (ctx) =>
  ctx.reply(
    "🤖 Помощь\n\n" +
      "/start — главное меню\n" +
      "/ping — проверка бота\n" +
      "/score — твой счёт\n\n" +
      "Скоро добавим настоящие соревнования и таблицу лидеров 🏆"
  )
);

bot.command("ping", (ctx) => ctx.reply("🏓 Pong! Бот работает."));

bot.command("score", (ctx) => ctx.reply("🏆 Твой счёт: 0 очков"));

bot.on("message:text", (ctx) => {
  const text = ctx.message.text.trim();

  if (text.startsWith("/")) return;

  return ctx.reply("👀 Я тебя услышал! Попробуй /help");
});

bot.catch((err) => {
  console.error("Bot error:", err.error);
});

bot.start({
  onStart: () => console.log("🤖 Telegram bot started"),
});
