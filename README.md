# Telegram Bot 🤖

A simple Telegram bot written in JavaScript for Node.js using grammY.

## Commands

- `/start` — start the bot
- `/help` — show help
- `/ping` — check that the bot is online
- `/score` — show the current score

## Run locally

1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Set the `BOT_TOKEN` environment variable to the token from BotFather.
4. Run `npm start`.

## Railway

Create a Railway service from this GitHub repository and add the variable:

`BOT_TOKEN=your_telegram_bot_token`

The start command is already configured as `npm start`.

Never commit the real bot token to GitHub.
