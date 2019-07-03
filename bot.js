const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "p!";
client.on('message', message => {
    if (message.content == "p!fast") {
        var x = ["DreamKing",
"DeathGames",
"Burger king",
"dream land",
"kuwait",
"united kingdom",
"japan",
"united states",
"end",
"amazon",
"paradise",
"easy not that hard",
"candy",
"store",
"banana",
"bird",
"its friday",
"blue",
"reset",
"kfc",
"instagram @69kkx",
"jack wills",
"Legendary",
"italy",
"asia",
"boi",
"Playing Minecraft",
"Music",
"FaceBooK",
"YouTube",
"Infinity",
"i love you",
"Don't Let Me Down",
"Space",
"Instgram",
"Google",
"Viber",
];
        var x2 = ['DreamKing',
       "DeathGames",
       "Burger king",
       "dream land",
       "kuwait",
       "united kingdom",
       "japan",
       "united states",
       "end",
       "amazon",
       "paradise",
       "easy not that hard",
       "candy",
       "store",
       "banana",
       "bird",
       "its friday",
       "blue",
       "reset",
       "kfc",
       "instagram @69kkx",
       "jack wills",
       "Legendary",
       "italy",
       "asia",
       "boi",
       "Playing Minecraft",
       "Music",
       "FaceBooK",
       "YouTube",
       "Infinity",
       "i love you",
       "Don't Let Me Down",
       "Space",
       "Instgram",
       "Google",
       "Viber",
		
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` must be quick :  __**${x[x3]}**__
you have got 15 secounds to anwser`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: Time has passed and no one has answered correctly
            The correct answer is __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} I you written the word in time  `);
        })
        })
    }
})

client.on('message', puz => {
    if (puz.content == "p!puzzle") {
        var x = ["What is the sense of smell when the snake?",
"What is the thing that adorns people and is a shame without clothes?",
"What is it that does not take place and does not walk?",
"What is the name of the Gregorian month that if you delete the first, it becomes a name?",
"What is the thing that does not enter if it is hit on the head?",
"What is the thing that is named on its color?",
"What is the thing that increases the shortage?",
"What is it that burns itself to benefit others?",
"All the holes and yet saves the water?",
"What is his flesh inside and his bone from the outside?",
"Can penetrate the glass without breaking it .. What is it?",
];
        var x2 = ['the tongue',
		"needle",
        "water",
		"July",
		"Screw",
		"The egg",
		"Age",
		"candle",
		"Sponge",
		"the turtle",
		"the light",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        puz.channel.send(`the question is:  __**${x[x3]}**__
You have 20 seconds to answer`).then(msg1=> {
            var r = puz.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return puz.channel.send(`:negative_squared_cross_mark: Time has passed and no one has answered correctly 
            `)
        })
        
        r.then((collected)=> {
            puz.channel.send(`${collected.first().author} you've solved the puzzle in time  `);
        })
        })
    }
})

    if (fkk.content == "#فكك") {
        var x = ["المتاح للجميع لا يتاح لي",
"خعاخع",
"فيلا",
"بريء",
"بسم الله الرحمن الرحيم",
"الضرورة",
"دنيا",
"صارم",
"مات",
"شعبان شبعان",
"ألعراق",
];
        var x2 = ['ا ل م ت ا ح ل ل ج م ي ع ل ا ي ت ا ح ل ى',
		"خ ع ا خ ع",
        "ف ي ل ا",
		"ب ر ي ء",
		"ب س م ا ل ل ه ا ل ر ح م ن ا ل ر ح ي م",
		"ا ل ض ر و ر ة",
		"د ن ي ا",
		"ص ا ر م",
		"م ا ت",
		"ش ع ب ا ن ش ب ع ا ن",
		"أ ل ع ر ا ق",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        fkk.channel.send(`اول شخص يفكك :  __**${x[x3]}**__
لديك 15 ثانية للاجابة`).then(msg1=> {
            var r = fkk.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return fkk.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            fkk.channel.send(`${collected.first().author} لقد قمت بفكيك الجملة في الوقت المناسب`);
        })
        })
    }
})


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Script By : pradise`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DREAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`use p!help`,"http://twitch.tv/twitch")
client.user.setStatus("dnd")
});



client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء