const fs = require('fs').promises;

const lerArquivo = async () => {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8')
    const jsonContent = JSON.parse(fileContent);
    const strings = jsonContent.map(({ id, name }) => `${id} - ${name}`);
    strings.map((str) => console.log(str));
};

lerArquivo();
