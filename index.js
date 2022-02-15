const customExpress = require("./config/customExpress");
const consign = require('consign');

const app = customExpress();


app.listen(3000, () => console.log("O servidor está rodando na porta 3000!"));

