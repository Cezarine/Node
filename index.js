import chalk, { Chalk } from 'chalk';
import fs from 'fs';

const encoding = 'utf-8';

function trataErro(erro)
{
    if (erro.errno = -21) 
    {
        throw new Error(chalk.red('Diretorio nao encontrado', erro.code));
    }
    else
    {
        throw new Error(chalk.red('Un error occurred', erro.code));
    }
}

//-------------------------------------Assincrono async/await
async function pegaArquivo(caminhoArquivo)
{   try
    {
        const texto = await fs.promises.readFile(caminhoArquivo, encoding)
        console.log(chalk.green(texto));
    }
    catch(erro)
    {
        trataErro(erro);
    }
    
}

/*{-------------------------------------------------------------------------Sincrono


    /*{ -----------------------------------promises com then()
        function pegaArquivo(caminhoArquivo)
        {
            fs.promises
                .readFile(caminhoArquivo, encoding)
                .then((texto) => console.log(chalk.green(texto)))
                .catch(trataErro);
        }
    }*/

    
    /*{ ----------------------------------------------------------------------------------------
        function pegaArquivo(caminhoArquivo)
        {
            fs.readFile(caminhoArquivo, enconding, (erro, texto) => {
                if (erro)
                {
                    trataErro(erro);
                }
                console.log(chalk.green(texto));
            })
        }
}*/
pegaArquivo('./arquivos/texto.md');
pegaArquivo('./arquivos/');