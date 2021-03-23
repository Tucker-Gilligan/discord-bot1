const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('dotenv').config();

// client.on('ready', () => {
//   console.log(`Logged in as ${client.user.tag}!`);
// });

const quotes = [
  'Chase the vision, not the money; the money will end up following you. — Tony Hsieh',
  'Don’t worry about failure; you only have to be right once. — Drew Houston',
  'Ideas are commodity. Execution of them is not. — Michael Dell',
  'If you are not embarrassed by the first version of your product, you’ve launched too late. — Reid Hoffman',
  'I knew that if I failed I wouldn’t regret that, but I knew the one thing I might regret is not trying. — Jeff Bezos',
  "You can bring a horse to a river, but you can't make it drink",
  'Wherever you go, there you are.',
  'Confucius say, he who stands on toilet, is high on pot.',
  "What did the fisherman say on his last day at sea?..... It's been reel!",
  "What do you call a four man rock group that doesn't play music?........ Mount Rushmore.",
];

let butterReply = [
  'PASSING THE BUTTER',
  "I CAN'T BELIEVE IT'S NOT BUTTER",
  "BUTTER'S ON A ROLL!",
  'Spreading the butter.....',
  "Did I tell you the joke about butter? I can't tell you, you might spread it",
];
const randomQuote = () => quotes[Math.floor(Math.random() * quotes.length - 1)];
const greeting = () => 'HELLO';
const throwDice = () => ~~(Math.random() * 6) + 1;
const passButter = () => {
  return butterReply[Math.floor(Math.random() * butterReply.length)];
};

client.on('ready', () => {
  console.log('Inspire Bot running');
  console.log(randomQuote());
});

const prefix = '!';

client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;

  const commandBody = msg.content.slice(prefix.length);

  const command = commandBody.toLowerCase();

  if (
    command.includes('inspire') ||
    command.includes('quote') ||
    command.includes('joke') ||
    command.includes('random')
  ) {
    msg.reply(randomQuote());
  }
  if (command === 'hello') {
    msg.reply(greeting());
  }
  if (command.includes('roll')) {
    msg.reply(throwDice());
  }
  //butter can be passed to a user of choice based on a certain command
  //OR random user is chosen to have butter passed to them.
  //
  if (command.includes('butter')) {
    msg.reply(passButter());
  }
});

client.login(process.env.BOT_TOKEN);
