import chalk from 'chalk';
import fs from 'fs';
import pegaArquivo  from './index.js';

const caminho = process.argv;

function ImpremeList(pResultado)
{
    console.log(chalk.yellow("Lista de Links: "), pResultado);   
}


async function processaTexto(argumentos)
{
    const caminho = argumentos[2];
    if (fs.lstatSync(caminho).isFile())
    {
        const vResultado = await pegaArquivo(caminho);
        ImpremeList(vResultado);       
    }
    else if (fs.lstatSync(caminho).isDirectory())
    {
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nomeArquivo) => {
            const list = await pegaArquivo(`${caminho}/${nomeArquivo}`);
           // ImpremeList(`${caminho}/${nomeArquivo}`);
            ImpremeList(list);
        });// Para cada elemento(caminho) dentro de arquivos(vou chama-los de "nomeArquivo") vou chamar a function "pegaArquivo" passando
        // como parametro (caminho/nomeArquivo)="/arquivos/texto.txt"
        //console.log(arquivos);
    }
}

processaTexto(caminho);
