Summary Materi Introduction Restfull API

1. Kegunaan : mengintegrasikan aplikasi yang berbasis front-end dan back-end. Aplikasi dapat untuk mobile maupun web.

    Kelebihan : walaupun dapat berupa web, mobile, android, atau IOS, aplikasi hanya perlu 1 API.

2. API, REST

A. API (Aplication Programming Interface) adalah seabuah set functions dan prosedur yang meyediakan pembuatan aplikasi dengan akses features atau data dari sebuah operasi sistem, aplikasi, ataupun lainnya.

    Bagaimana API bekerja? API bekerja dengan adanya request dari client ke server dan response dari server ke client sebagai tanggapan terhadap requestnya.

B. REST (Representational State Transfer) adalah interface yang digunakan dua sistem komputer untuk saling bertukar informasi melalui internet.
    - Request dan Reponse Format : JSON, XML, dan SOAP
    - Menggunakan HTTP protocol
    - HTTP request method : GET, POST, PUT, HEAD, OPTION, PATCH, DELETE

C. JSON (JavaScript Object Notation) merupakan alat untuk melakukan transfer dan penyimpanan data.
    - HTTP Response Code : 200, 201, 500, 405, 401, 400, 404

3. API Testing Tools dan OpenAPI

A. API Testing Tools
    contohnya : Katalon, Apache JMeter, Postman, SoapUI

    Postman adalah HTTP client yang berfungsi untuk testing layanan web. Postman mengizinkan user untuk melakukan HTTP requests yang simple dan kompleks secara bersamaan sehingga membuat tes, develop, dan document APIs menjadi lebih mudah.

B. OpenAPI adalah API yang bisa diakses secara publik atau bebas.

    Membuat Server API dengan 2 library:
    - Package net/http yang berguna untuk membuat server API
    - Package encoding/json berguna untuk operasi JSON, seperti decode JSON ke object struct, decode JSON ke Map dan Interface, decode array JSON ke array object, dan encode object ke JSON string.