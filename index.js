const customExpress = require("./config/customExpress");
const conexao = require('./infraestrutura/conexao')

const port = process.env.PORT || 3000;

conexao.connect(erro =>{
    if(erro){
        console.log(erro);
    }else{
        console.log('Conectado com sucesso');

        const app = customExpress();


        app.listen(port, () => console.log("O servidor está rodando na porta 3000!"));

    }

})

