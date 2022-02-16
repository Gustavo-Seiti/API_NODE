
const Atendimento = require('../models/atendimentos')

module.exports = app =>{
    app.get("/atendimentos", (req, res) => {
        console.log("Pegamos a rota principal")
        Atendimento.listar(res);
    })

    app.get("/atendimentos/:id", (req, res) =>{
        const id = parseInt(req.params.id)
        

        
        Atendimento.buscaPorId(id, res)
    })

    app.post("/atendimentos", (req, res) => {
        const atendimento = req.body

        Atendimento.adicionar(atendimento, res)
    })

    app.patch("/atendimentos:id", (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id,valores, res)
    })

    app.delete("/atendimentos/:id", (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })


}
