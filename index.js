// const start = () => {
//     let count = 0
//     while(count <= 10 ){
//         console.log(count)
//         count = count + 1
//     }
// };

// start();

const { select } = require ('@inquirer/prompts');

const start = async () => {
    while(true){
        const opcao = await select({
            message: "Menu >",
            choices:[
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name:"Listar Metas",
                    value:"listar"
                },
                {
                    name:"sair",
                    value:"sair"
                }
            ]
        });


        switch(opcao) {
            case "cadastrar":
                console.log("vamos cadastrar")
                break
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
                console.log("Até a próxima")
                return
        }
    }
};

start();