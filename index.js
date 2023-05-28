import fs from 'fs';
import chalk from 'chalk';

function tratarErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'));
}

function pegarArquivo(caminhoDoArquivo) {
    const enconding = 'utf-8';
    fs.readFile(caminhoDoArquivo, enconding, (erro, texto) => {
        if (erro) {
            tratarErro(erro);
        }
        console.log(chalk.green(texto))
    })
}

pegarArquivo('./arquivos/');