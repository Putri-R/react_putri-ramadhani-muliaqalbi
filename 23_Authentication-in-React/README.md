Summary Materi Authentication in React

1. Authorization with React

Tujuannya untuk memberikan spesifik akses kepada orang yang benar untuk mendapatkan resource tersebut. Ini berkaitan dengan sekuriti informasi dan sekuriti komputer dan akses kontrol terhadap routing secara benar.

2. Full Auth Work
    a. Pada react app
        - User registration : menggunakan POST untuk mengirimkan username, email, dan password ke back-end
        - User login : menggunakan POST untuk mengirimkan username dan password ke back-end
        - Access Resource : melakukan request data dengan JWT di header

    b. Pada back-end
        - user registration : mengecek data user di database dan mengirimkan message ke react app
        - user login : melakukan authetication data user dan membuat JWT. Kemudian mengirimkan JWTResponse (token, type, user info, authorities)
        - Access resource : mengecek JWT, mendapatkan informasi dan autheticate user, melakukan authorize menggunakan user's authorities. Kemudian mengirimkan respones berdasarkan authorities.

3. Login with React

Login digunakan untuk penanganan di sebuah website aplikasi. Login merupakan akses untuk individu terhadap sistem komputer dengan cara identifikasi dan otentikasi. Misalnya dengan menginputkan username dan password.