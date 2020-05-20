

module.exports = {
    //Rota para buscar no banco os meu Summoners cadastrados
    // async index(req, res) {
        
    //     res.send("Hello World");
    // },

    async search(req, res){
        try{
            const { RastreioBrasil } = require('correios-brasil');

            const { codRastreio } = req.body;
            
            correios = new  RastreioBrasil(codRastreio);
            
            let response = await correios.rastrearEncomendas();

            console.log("Search success!");

            return res.json(response);

        }catch(error){
            console.log("Search error!");

            return res.json("Search error!");
        }
        
    }
};