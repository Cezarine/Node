import chalk from "chalk";

export default  async function ListaValidada(pListaLinks){
    const vLinks = ExtraiLinks(pListaLinks);
    const vStatus = await ChecaStatus(vLinks);
    return pListaLinks.map((objeto, count) => (
        {
            ...objeto, status: vStatus[count]
        }
    ))
}

function ExtraiLinks(pArrayLinks){
    return pArrayLinks.map((links) => Object.values(links).join());
}

async function ChecaStatus(pListaURLs)
{
        const vArrayStatus = await Promise.all(pListaURLs.map(async (url) => 
        { 
            try{
                const response = await fetch(url)
                return response.status;
            }catch(erro){
                return TrataErros(erro);
            }
        }))
        return vArrayStatus;
}

function TrataErros(pErro){
    if (pErro.cause.code === 'ENOTFOUND'){
        return chalk.red('Url nao encontrada, verifique ela e tente novamente');
    }else{
        return chalk.red('Un error occurred!');
    }
}
