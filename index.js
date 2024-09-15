// const start = () => {
//     let count = 0
//     while(count <= 10 ){
//         console.log(count)
//         count = count + 1
//     }
// };

// start();

const { select, input } = require ('@inquirer/prompts');

const cadastrarMeta = async () =>{
    const meta = await 
}

const start = async () => {
    while(true){
        const opcao = await select({
            message: "Menu >",
            choices:[
                {
                    name: "Cadastrar Meta",
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
                await cadastrarMeta()
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