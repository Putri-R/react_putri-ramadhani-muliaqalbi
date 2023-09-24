Summary_Materi React Form

1. Form merupakan formulir pada halaman aplikasi web untuk mengahndle inputan user. Form biasa ditemukan saat login, pendaftaran, memberikan feedback, mengisi data, dan lainnya.

    Macam-macam form yang terdapat di React :
        - Element <input> : digunakan untuk memberikan inputan yang tidak terlalu panjang.
        - Element <textarea> : digunakan untuk memberikan inputan yang cukup panjang, seperti deskripsi.
        - Element <select> : digunakan untuk inputann berupa pilihan yang ditentukan.
        - Radio Button : merupakan salah satu type di elemen <input> dan digunakan untuk user dapat memilih hanya 1 pilihan yang ada.
        - Checkbox : merupakan salah satu type di elemen <input> yang berguna untuk user dapat memilih lebih dari 1 pilihan yang tersedia.
        - Type elemen input lainnya : text (default), button, color, checkbox, date, datetime-local, email, file, hidden, image, month, number, password, radio, range, reset, search, submit, tel, time, url, week.

2. Controlled Component dan Uncontrolled Component

    A. Controlled Component (Komponen Terkontrol)
        Controlled Component merupakan pengontrolan nilai pada elemen masukan form dengan menggabungkan cara menyimpan dan memperbarui state di HTML dan React menggunakan state pada React.
        1) Controlled Component pada tag textarea
        Textarea pada React menggunakan atribut value yang akan menampilkan perubahan input pada textarea.
        2) Controlled Component pada tag select
        Select pada React menggunakan atribut value untuk menampilkan nilai awal pada select
        3) Menghandle banyak input di Controlled Component,
        yaitu ketika membutuhkan penanganan terhadap banyak elemen pada controlled Component. Maka digunakan atribut name pada setiap elemen dan membiarkan fungsi handler memilih apa yang perlu dilakukan berdasarkan nilai dari event.target.name

        Pada Controlled Component, komponen form dapat merespon perubahan dengan segera, seperti :
            - umpan balik di tempat, misalnya validasi
            - menonaktifkan tombol kecuali semua field memiliki data yang valid
            - mengimplementasikan format inpute tertentu, misalnya nomor kartu kredit

        Suatu elemen menjadi controlled jika nilai elementersebut ditetapkan melalui prop.

    B. Uncontrolled Component (Komponen Tidak Terkontrol)
        Uncontrolled Component merupakan alternatif lain dari controlled component, dimana data form akan ditangani oleh DOM. Uncontrolled Component menggunakan ref untuk mendapatkan nilai form dari DOM.

        Uncontrolled Component merupakan input yang tidak terkontrol. di React, nilainya dapat didapatkan dengan menggunakan ref (useRef), misalnya dengan menggunakan klik button.
        Nilai default pada Uncontrolled Component menggunakan defaultChecked untuk checkbox dan radio, dan menggunakan dedaultValue untuk select dan textarea.
        Pada React, tag file input merupakan Uncontrolled Component karena nilainya hanya bisa disetel oleh pengguna, bukan oleh kode program.

3. Basic Validation pada form input

    Mengapa membutuhkan validasi?
        - Mencari input data yang benar dan sesuai format karena web/aplikasi tidak dapat berjalan apabila data tidak sesuai kebutuhan.
        - Melindungi akun pengguna, agar pengguna memasukkan data password yang aman.
        - Melindungi sistem/aplikasi, dengan meminimalisir perilaku pengguna yang ingin meretas sistem/aplikasi.

    Tipe validasi data formulir :
    a. Client-side validation atau validasi dari sisi klien (browser). Untuk data input yang sesuai kebutuhan form. 
        Kelebihannya adalah user-friendly karena adanya pemberitahuan apabila terdapat kesalahan pengguna.

        Terbagi atas 2 :
        - Built-in form Validation, yaitu menggunakan fitur validasi langsung dari HTML5 dan tidak membutuhkan JavaScript, tetapi tidak bisa dikostumisasi.

        Beberapa built-in form validation :
        - required : digunakan untuk menentukan field form perlu diisi sebelum formulir dikirim.
        minlength dan maxlength : digunakan untuk menentukan jumlah karakter minimal dan maksimal yang bisa diimasukkan.
        - min dan max : digunakan untuk menentukaan nilai minimum dan maksimum angka yang bisa dimasukkan.
        - type : digunakan untuk menentukan apakah data berupa angka, email, atau lainnya.
        - pattern : digunakan untuk menentukan regular expression (regex) yang mendefinisikan pola data yang boleh dimasukkan.

        Menggunakan JavaScript, validasi dapat dikostumisasi. Kapan menggunakan JavaScript Validasi :
        - Ketika ada perubahan pada form, yaitu dengan mentrigger event onChange.
        - Ketika klik tombol submit, yaitu akan mentrigger event onSubmit.

    b. Server-side validation
        Sisi server bertugas untuk memvalidasi data kembali sebelum disimpan di database. Apabila terdapat kesalahan, maka akan dikirim response ke client berupa koreksi bagian kesalahan. Validasi ini tidak user-friendly karena validasi dilakuakn setelah form di-submit.