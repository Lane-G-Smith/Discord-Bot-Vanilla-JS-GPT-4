// import Discord bot token from .env file
const TOKEN = require("dotenv").config();

// import discord.js module
const {Client,GatewayIntentBits} = require("discord.js");

// import openai module, key, new config
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({apiKey: process.env.OPENAI_API_KEY,});
const openai = new OpenAIApi(configuration);

// configure Discord bot permissions(intents)
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildScheduledEvents,
  ],
});

// console log bot startup
client.on("ready", () => {
  console.log(`I'M ALIVE!! LOGGED IN AS ${client.user.tag}`);
});

// function returns AI response every time text is sent to server
client.on("messageCreate", async function (message) {
    try {

// ignore input from the bot itself
        if (message.author.bot) return;

//  must include gpt to trigger a response
        else if (message.content.toLowerCase().includes("Your-Trigger-Word")) {

// AI personality & response format to user input
        const completion = await openai.createChatCompletion({
            model: "gpt-4",
            messages:[{
            role:"system",
            content:"Describe the desired AI characteristics, knowledge base, personality, how questions should be answered",},
            {
            role:"user",
            content:"A sample question will go here"},{
            role:"assistant",
            content:"Desired answer to the previous question will go here"},{
            role:"user",
            content:"A sample question will go here"},{
            role:"assistant",
            content:"Desired answer to the previous question will go here"},{
            role:"user",
            content:"A sample question will go here"},{
            role:"assistant",
            content:"Desired answer to the previous question will go here"},{
            role:"user",
            content:`${message}`},
            ],
        });

// store response in data variable
        data = (`${completion.data.choices[0].message.content}`);

// less than 2000 character response
          if (data.length < 2000) {
          message.reply(`${data}`)
          }

// more than 2000 character response
          else if (data.length > 2000){
          partOne = data.substring(0,2000);
          partTwo = data.substring(2000,4000);
          partThree = data.substring(4000,6000);
          message.reply(`${partOne}`);
          message.reply(`${partTwo}`);
          message.reply(`${partThree}`);
          }

    }} catch (error) {
        message.reply(`${error}`);
    }
});

// use token from env file to log in
client.login(process.env.TOKEN);

