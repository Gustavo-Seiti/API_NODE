
module.exports = app =>{
    app.get("/atendimentos", (req, res) => {
        res.send("Tudo certo aí parceiro?")
    })

    app.post("/atendimentos", (req, res) => {
        res.send('Você está na nota de atendimentos em um POST')
    })
}
