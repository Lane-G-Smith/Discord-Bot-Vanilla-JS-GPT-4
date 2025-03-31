<h1 align="center">Discord-Bot-Vanilla-JS-GPT-4</h1>
<table align="center">
  <tr>
    <td align="center" height="108" width="108">
        <img     src="https://www.lanesmith.info/assets/Discord.jpg"
        width="48"
        height="48"
        />
        <br /><strong>Discord.js</strong>
    </td>
    <td align="center" height="108">
      <p align="center">A simple vanilla javascript Discord bot for interacting with AI models by OpenAI. This bot can serve a variety of different functions by changing a few lines of text in it's internal prompt. No coding skills are required.
      </p>
     </td>
   </tr>
 </table>
<table align="start">
  <tr>
    <td align="center">
    <p align="center">Give personality to a virtual friend in your gaming server
      </p>
      </td>
   </tr>
 </table>
 <table align="start">
  <tr>
    <td align="center">
    <p align="center">Get answers to random trivia from your PC or phone (Discord Mobile)
      </p>
      </td>
   </tr>
 </table>
 <table align="start">
  <tr>
    <td align="center">
    <p align="center">Create your very own friendly personal assistant
      </p>
      </td>
   </tr>
 </table>

# GPT-4 bot installation and deployment Instructions

## !!This bot does NOT respond to DMs, it must be in a server with you!!

### Get the bot 'shell' from Discord. It's free, and it takes 5 minutes
```sh
https://discord.com/developers/applications
```
### Go to OpenAI and open an account
```sh
https://platform.openai.com/signup
```
### Install node.js
```sh
https://nodejs.org/en/
```
### Install git
```sh
https://git-scm.com/downloads
```
### Create a new folder and navigate to it in the terminal to set up git
```sh
git init
```
### Navigate to the new git folder in the terminal and clone this repository
```sh
https://github.com/Lane-G-Smith/Discord-Bot-Vanilla-JS-GPT-4.git
```
### Navigate to Discord-Bot-Vanilla-JS-GPT-4 folder and install dependencies
```sh
npm install
```
### Rename example_.env to .env
### Place your secret Discord bot token from the first step into the .env file
```sh
TOKEN=your_unique_Discord_bot_token_here
```
### Place your secret OpenAI API key from the second step into the .env file
```sh
OPENAI_API_KEY=your_unique_OpenAI_API_key_here
```
### Modify a few lines of the code (46-59, self-explanatory when you look at it) to personalize the functionality
```sh
The characteristics of your AI and how to answer questions, example questions, example answers
```
### Set a trigger word that you want to prompt a response (line 39)
```sh
replace "Your-Trigger-Word" with whatever you want
```
### To host the bot locally, open the project in the terminal and run node
```sh
node index.js
```
### To host the bot locally and keep it running in the background indefinitely, install PM2
```sh
npm install pm2 -g
```
### Run your bot locally using pm2 https://pm2.keymetrics.io/
```sh
pm2 start index.js
```
### Congratulations, your bot should now be live & confirmation should be logged in the terminal. Use your personal link from the Discord developer portal to invite your bot to a Discord server
```sh
https://discord.com/developers/applications
```
