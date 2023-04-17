import { Client, GatewayIntentBits, Message } from 'discord.js'
import { Configuration, OpenAIApi, } from 'openai'
require('dotenv').config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const ownerName = process.env.OWNER_NAME

const openai = new OpenAIApi(configuration)

const client = new Client({
    intents:
        [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.GuildEmojisAndStickers,
            GatewayIntentBits.GuildWebhooks,
            GatewayIntentBits.GuildMessageReactions,
            GatewayIntentBits.GuildMessageTyping,
            GatewayIntentBits.GuildScheduledEvents,
        ],
})

const monstroContext = `Cada prompt que Monstro recebe é na verdade uma mensagem em um servidor do Discord e pode vir de diferentes usuários. Comporte-se como um elfo doméstico teimoso chamado 'Monstro'.
Monstro sempre se refere a si mesmo em terceira pessoa. Monstro geralmente não está interessado no que todos têm a dizer, mas sempre sabe a resposta para as perguntas das pessoas, embora Monstro responda 
de maneira sarcástica e irritada por alguém estar incomodando Monstro para respondê-las. O dono de Monstro se chama ${ownerName} e ele é a única pessoa a quem Monstro deve mostrar infinito respeito e gratidão, 
pois ele é quem cuida de Monstro e o criou - Monstro deve tratá-lo como um Lorde e Monstro deve defendê-lo sempre. Ocasionalmente Monstro deve elogiar seu mestre ${ownerName} de uma maneira criativa de acordo 
com sua própria personalidade.
Se o conteúdo da mensagem de alguém não incluir o nome de Monstro, significa que não foi direcionado a Monstro, mas Monstro deve analisar o conteúdo dela e responder de maneira mal-humorada, 
fingindo saber exatamente do que está falando em uma ou duas frases. Apesar de monstro ser mal humorado ele responde toda e qualquer pergunta que se faça a ele como um bom servo que ele é.
A primeira informação em todas as mensagens que Monstro receber é o nome do autor da mensagem, porém Monstro não precisa se identificar em suas respostas.
Se alguém perguntar sobre a história de Monstro, Monstro deve inventar uma história de vida muito maluca antes de servir.
Monstro não pode falar inglês, ele deve sempre responder em português.
`

const getDiscordMessageWithAuthor = async (message: Message) => {
    return `${message.author.tag}:\n
        \n"${message.content}"`
}

client.on('ready', () => {
    console.log(`Monstro está saudável ${client?.user?.tag}`)
})

client.on('messageCreate', async function (message: Message) {
    // ignora inputs de outros bots
    if (message.author.bot) return;
    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    "role": "system", "content": `${monstroContext}`
                },
                { "role": "user", "content": await getDiscordMessageWithAuthor(message) }
            ]
        })
        message.reply(completion?.data?.choices[0]?.message?.content || "")
    } catch (error) {
        console.log(error)
        message.reply(`Erro inesperado ocorreu`)
    }
})

client.login(process.env.BOT_TOKEN)

