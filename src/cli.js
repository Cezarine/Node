import chalk from 'chalk';
import pegaArquivo  from './index.js';

const caminho = process.argv;

function processaTexto(caminho)
{
    Console.Log(chalk.yellow("Lista de Links: "), pegaArquivo(caminho[2]));
}

processaTexto(caminho);
