Summary_Materi Clean Code

1. Clean code adalah istilah untuk kode yang mudah dibaca, dipahami, dan diubah oleh programmer.

    Mengapa perlu clean code?

        •	Work Collaboration, yaitu untuk kemudahan dan kelancaraan dalam berkolaborasi dengan code yang mudah dipahami.
        •	Feature Development, yaitu untuk kemudahan dalam pengembangan program.
        •	Faster Development, yaitu untuk dapat melakukan pengembangan dengan lebih cepat atau dapat memahami program tanpa perlu mempelajari lagi program tersebut.

2. Karakteristik clean code :
    •	Penamaan yang mudah dipahami.
    •	Mudah dieja dan dicari.
    •	Singkat, tetapi mendeskripsikan konteks.
    •	Penamaan yang konsisten, misalnya memberikan semua penamaan dengan lowercase atau uppercase saja.
    •	Hindari penambahan konteks yang tidak perlu.
    •	Berikan komentar pada suatu blok tertentu yang membutuhkan saja.
    •	Good function, yaitu function yang tidak terlalu banyak argumen dan memiliki object di dalamnya yang menunjukkan apa saja yang di dalam function tersebut.
    •	Gunakan konvensi, yaitu mengikuti aturan penamaan kode, misalnya dari style guide airbnb dan Google.
    •	Formatting, yaitu pengaturan dari lebar baris, jumlah baris, kode yang berhubungan saling berdekatan, deklarasi variabel berdekatan dengan penggunaannya. 
    •	Memperhatikan indentasi atau penjorokan tulisan.
    •	Menggunakan prettier atau formatter, yaitu mengikuti formatting standar dari bahasa pemrograman yang digunakan.

3. Clean code principle :

    Contoh clean code adalah KISS (Keep It So Simple), yaitu menghindari membuat fungsi yang dibuat untuk melakukan beberapa tugas.

    Tips untuk mencapai KISS :
        •	Fungsi atau class harus kecil/simple
        •	Fungsi dibuat untuk melakukan satu tugas saja
        •	Jangan menggunakan terlalu banyak argumen pada fungsi
        •	Harus diperhatikan untuk mencapai kondisi yang seimbang, simple/kecil, dan jumlahnya minimal.

    Contoh lain adalah DRY (Don't Repeat Yourself), yaitu menghindari duplikasi code akibat sering copy paste dengan cara membuat sebuah fungsi yang dapat digunakan berulang kali.

    Refactoring adalah proses restrukturisasi kode yang dibuat dengan mengubah struktur internal tanpa mengubah perilaku eksternal. Dengan refactoring, prinsip KISS dan DRY dapat dicapai.

    Teknik Refactoring :
        •	Membuat sebuah abstraksi, berisikan variabel-variabel yang akan digunakan beberapa kali.
        •	Memecah kode dengan fungsi/class, yaitu membuat fungsi-fungsi berdasarkan tugasnya, jadi tidak ada fungsi untuk melakukan banyak tugas sekaligus.
        •	Memperbaiki penamaan dan lokasi kode
        •	Deteksi kode yang memiliki duplikasi
