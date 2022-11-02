var urlConfig = "config.js";
    
    $.getScript(urlConfig, function(){
        $(document).ready(function(){

            function format_link(link) {
            if (link)
                return "<a href='" + SERVER + link + "' target='_blank'><img src='https://img.shields.io/badge/PDF-EC1C24?style=for-the-badge&logo=AdobeAcrobatReader&logoColor=white'></a>";
            else return "";
            }

            CsvToHtmlTable.init({
                csv_path: FULLURL,
                element: "table-container",
                allow_download: false,
                csv_options: {
                    separator: ",",
                    delimiter: '"'
                },
                datatables_options: {
                    paging: true,
                    responsive: {
                        details: {
                            display: $.fn.dataTable.Responsive.display.childRow,
                            type: "column",
                            target: 'tr'
                        }
                    },
                    colReorder: true,
                    order: [ 4, 'desc' ],
                    columnDefs: [
                        {
                            className: 'control',
                            orderable: false,
                            targets:   0
                        },
                        { responsivePriority: 10001, targets: 0 },
                        { responsivePriority: 1, targets: 4 },
                        { responsivePriority: 10001, targets: 0 },
                        { responsivePriority: 10001, targets: 0 },
                        { responsivePriority: 1, targets: 4 },
                        { responsivePriority: 1, targets: 4 }
                    ]
                },
                custom_formatting: [
                    [4, format_link]
                ]
            });
        });
    });