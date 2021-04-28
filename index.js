const discord = require('discord.js')
const ytdl = require('ytdl-core')
const token = ''

const prefixo = '*'

const servidores = {
    'server': {
        connection: null,
        dispather: null
    }
}

const client = new discord.Client()

client.on("ready",()=>{
    console.log('Estou conectado !!!!!')
})

client.on("message",async (msg) => {

    //filtro

    if(!msg.guild)return

    if(!msg.content.startsWith(prefixo)) return

    if(!msg.member.voice.channel){
        msg.channel.send('Você precisa estar no canal de voz seu mula !')
        return
    }

    //comandos

    if(msg.content === prefixo+"oi"){
        msg.channel.send(`Oi, ${msg.author.username}`)
    }
    if(msg.content === prefixo + 'join'){
       servidores.server.connection = await msg.member.voice.channel.join()
    }
    if(msg.content === prefixo +"bora?"){
        msg.channel.send("TFT ????????? B)")
    }
    if(msg.content === prefixo +"cural"){
        msg.channel.send("AAAAAA CURAL !!!!")
    }
    if(msg.content === prefixo + "alanmula"){
        msg.channel.send("aaaaaaaaaaa lana  , só com el niggs !")
    }
    //if(msg.content === prefixo + 'play'){
    //    servidores.server.connection.play('./teste.mp3')
    //}
    if(msg.content === prefixo + 'zoio'){
        msg.channel.send('Tocando o vídeo do Zoio rindo garai !!!!!')    
        servidores.server.connection.play(ytdl('https://www.youtube.com/watch?v=_oS6_iX3Xuc'))
    }
    if(msg.content === prefixo + 'sunflower'){
        msg.channel.send('Tocando Sunflower !!!!!')    
        servidores.server.connection.play(ytdl('https://www.youtube.com/watch?v=ApXoWvfEYVU'))
    }
    if(msg.content === prefixo + 'sorteio'){
        msg.channel.send(`Sorteio o pau na sua cara B) , humilhado ! ${msg.author.username}`)
    }
})

client.login(token)