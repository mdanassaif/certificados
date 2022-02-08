function tableFromJson() {
    // the json data. (you can change the values for output.)
    var certificados =  
    [
        {
            'Emissor': 'Alura', 
            'Certificado': 'Doctrine ORM: Acesse o banco com mapeamento objeto-relacional',
            'Carga Horária': '8', 
            'Conclusão': '19/01/2022', 
            'Arquivo': '20220207_Doctrine_ORM.pdf'
        },
        {
            'Emissor': 'Escola Conquer', 
            'Certificado': 'Produtividade e Gestão do Tempo',
            'Carga Horária': '15', 
            'Conclusão': '01/02/2022', 
            'Arquivo': '20220131_Produtividade_e_Gestao_do_Tempo.pdf'
        },
        {
            'Emissor': 'Alura', 
            'Certificado': 'PHP e PDO: Trabalhando com banco de dados',
            'Carga Horária': '8', 
            'Conclusão': '19/01/2022', 
            'Arquivo': '20220131_PHP_e_PDO_trabalhando_com_banco_de_dados.pdf'
        },
        {
            'Emissor': 'Alura', 
            'Certificado': 'E-mail Marketing: da segmentação ao AB',
            'Carga Horária': '8', 
            'Conclusão': '21/01/2022', 
            'Arquivo': '20220121_E-mail_Marketing_da_Segmentacao_ao_AB.pdf'
        },
        {
            'Emissor': 'Alura', 
            'Certificado': 'SEO Wordpress: Otimize o ranqueamento do seu site',
            'Carga Horária': '4', 
            'Conclusão': '20/01/2022', 
            'Arquivo': '20220120_Wordpress_SEO.pdf'
        },
        {
            'Emissor': 'Alura', 
            'Certificado': 'Plugin no Wordpress: Widget, shortcode e configurações',
            'Carga Horária': '8', 
            'Conclusão': '19/01/2022', 
            'Arquivo': '20220120_Wordpress_plugin.pdf'
        }
    ];

    var col = [];
    for (var i = 0; i < certificados.length; i++) {
        for (var key in certificados[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // Create a table.
    var table = document.createElement("table");

    // Create table header row using the extracted headers above.
    var tr = table.insertRow(-1);                   // table row.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // table header.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // add json data to the table as rows.
    for (var i = 0; i < certificados.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = certificados[i][col[j]];
        }
    }

    // Now, add the newly created table with json data, to a container.
    var divShowData = document.getElementById('showData');
    divShowData.innerHTML = "";
    divShowData.appendChild(table);

}