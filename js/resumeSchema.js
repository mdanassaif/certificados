// --- Configuração ---
// Altere para a URL base onde seus arquivos PDF estão hospedados.
const BASE_URL = "https://raw.githubusercontent.com/georgemaia/certificados-repo/main/files/";
const CSV_FILE_PATH = 'certificados.csv';

const FULLURL = BASE_URL.concat(CSV_FILE_PATH);
// --------------------

// Função principal assíncrona para usar await
async function convertCsvToJson() {
    try {
        const response = await fetch(FULLURL);
        if (!response.ok) {
            throw new Error(`Erro ao carregar o arquivo: ${response.statusText}`);
        }

        const csvText = await response.text();
        const lines = csvText.trim().split('\n');

        // Pega a primeira linha como cabeçalho
        const headers = lines.shift().split(',');

        const certificatesList = lines.map(line => {
            const values = line.split(',');
            const rowObject = headers.reduce((obj, header, index) => {
                obj[header.trim()] = values[index].trim().replace(/^"|"$/g, '');
                return obj;
            }, {});

            return {
                name: rowObject['Certificate'],
                date: new Date(rowObject['Conclusion']).toISOString().split('T')[0], // Formata apenas a data
                issuer: rowObject['Issuer'],
                url: `${BASE_URL}${rowObject['File']}`
            };
        });

        // Ordena pela data em ordem decrescente
        certificatesList.sort((a, b) => b.date - a.date);

        const finalJsonData = { "certificates": certificatesList };

        // Exibe o resultado na tela
        const outputElement = document.getElementById('json-output');
        outputElement.textContent = JSON.stringify(finalJsonData, null, 2); // null, 2 para formatação

        // Também exibe no console para depuração
        console.log(finalJsonData);

    } catch (error) {
        console.error("Falha na conversão:", error);
        document.getElementById('json-output').textContent = `Erro ao processar o arquivo: ${error.message}`;
    }
}

// Executa a função quando o script é carregado
convertCsvToJson();