# Certificados

<a href="https://georgemaia.github.io/certificados" target="_blank">
    <img src="./images/visual.png">
</a>

Repositório com certificados de cursos, eventos e capacitações.

Certificates management using JavaScript on Github Pages with PDF download and keyword search on datatables.

URL: https://georgemaia.github.io/certificados

![GitHub followers](https://img.shields.io/github/followers/georgemaia?style=social)
<a href="https://www.linkedin.com/in/georgemaia/">
    <img src="https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/georgemaia/">
</a>

<a href="https://github.com/georgemaia/certificados">
    <img src="https://img.shields.io/badge/By-Certificates-critical?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAMAAAAs2N9uAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAYlQTFRFDkaRC0OQADeIAB57AB16ADyKDEORBjyJC0aSADSHKVqc9/b56e305+vz////CT6OADeIBzyKAD2NAANp0dno5enxAAdtADiIDEWQ+fj4oKKlra6xoqOn7u7tACJ5CEKQ/v79zMzN1dTVzc3O9vb3AB94B0GP/v7+6Ojp7Ozt6Ojq+/v7AB549vX1hIaIlJaYgYCF/vHO/b47+8SC+fn6pqaqtLS3tLS4oaOl//np/acA/K4A+YQA+atBDEWS/v7/0tLU2trc0NDT/uWq/awA/LYU+ZQU+pUJACB5Aj6NqbfV//78xsjJzs/QztDQxMTH/vvz/rkA/sMP/p8I/rZVx8/jACl+BkKPABJzfJnC/6No+oMD3DcAdJbJABNzBTuKC0WRATyLCkCNZYO2YIC0X3+zS4/KrDhl9AAX2wAAX53UADWJBD6NCD2LACx+ACF3Aj+OADOGADGGADmb5hcl9Bge7Q4JADWIAEOVCUOQCD+NAAAA9xsk6xoiyhAWW8fyW8fy5Cs3wh8qFypTlwAAAIN0Uk5Tv7+/v7+/v+3///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////83MyEhIQa3//8lHCEyAJP//wECNUeuPNI/AAAA1klEQVR4nGNgYGRiZkEAVjZ2Bg5OLm4eXhjg4xcQZBASFuFDAqJi4gwSfHySUtJQICPLxyfHIM/Hp6CoBAXKKnx8qgxqfHzqGppQoKXNx6cDEkIFYCFdPX19fQM+PkMjY5iQiamZmbkFn6WVtY0tSMiOj8/ewdHR0YnP2cXVzZ2Pz4PB04vP28fX18+fLyAwKDiELzSMITwiEmZwVHQMX2xcPENCYlJySioIpKVnZGZl5+Qy5OUXFBaBQXFJaVl5RWUVQzUC1NTWgSiG6voGmFBjdROIAgBJkTv/kHbjnAAAAABJRU5ErkJggg==">
</a>

## USAGE

In the settings page of the repository, turn on Github Pages. After, change the SERVER constant in the config.js with your full address of the certificates files.

```javascript
const SERVER = "http://localhost/certificados-repo/files/";
```

Change the FILENAME constant in the config.js with your certificates list in CSV format.

```javascript
const FILENAME = "certificados.csv";
```

Then upload the PDFs files in the folder of the server. Edit the csv file certificados.csv with yours certificates.

## JSON to Resume Schema

Exports the csv data to the JSON format used in Schema Resume. Just open resume-json.html and copy the JSON to the Github GIST.

```json
"certificates": [
    {
      "name": "Certificate",
      "date": "2025-06-06",
      "issuer": "Company",
      "url": "https://certificate.com"
    },
    {
      "name": "Certificate",
      "date": "2026-06-05",
      "issuer": "Company 2",
      "url": "https://certificate.com"
    }
  ]
```

Model to save in github gist: resume.json