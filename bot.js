const telegraf = require("telegraf");

const BOT_TOKEN = "";
const USER_ID = 982069843;


const bot = new telegraf(BOT_TOKEN);

bot.use((msg,next)=>{
    if(msg.from.id == USER_ID){
        next();
    } else{
        msg.reply("ye area Mahabali Sarvashaktiman ka hai \n\n Nikal... Pahli Fursat Me Nikal")
    }
});

bot.command("start",function(msg){
    msg.reply("Hello,\nThis is a calculator bot made by Mahabali Sarvashaktiman.\nSend /help to get a list of commands.");
});

bot.command('c',function(msg){
    var txt = msg.update.message.text;
    var splt = txt.split(" ");
    try{
        var result = eval(splt[1]);
        msg.reply(result);
    }catch(err){
        message.reply("error");
    }

});

bot.launch();