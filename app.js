const database = require('./configs/database')
const express = require('express')

database.mongoose.connect(database.url, 
        {useNewUrlParser: true, 
        useUnifiedTopology: true
        }).then(()=>{
            console.log('Conexão estabelecida com o banco de dados')
        }).catch(error => {
            console.log('Falha ao estabelecer conexão com o banco de dados', error);
            process.exit()
        });

// criando uma aplicação express
const app = express()

//definindo que vamos enviar e receber JSON na requisição
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT = 3000
const HOST = '0.0.0.0'

app.listen(PORT,HOST, () => {
    console.log(`Servidor executando na porta ${PORT}`)
})