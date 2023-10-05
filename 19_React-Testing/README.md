Summary_Materi React Testing

1. Testing adalah proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode.

    Manfaat testing :
        - Ketika aplikasi memiliki coverage yang baik (mayoritas codebase tercover oleh test), kita akan merasa percaya diri apabila perlu mengubah suatu bagian pada aplikasi. Saat melakukan perubahan tersebut dan bagian lain menjadi broken, kita akan segera mengetahuinya.
        - Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi bebas dari bug, tetapi dapat mencegah beberapa hal yang berpotensi menjadi bug.

    Secara umum kategori testing ada dua, yaitu :
        a. Rendering component trees, di dalam environment tes yang sudah disederhanakan dan ditegaskan pada outputnya.
        b. Menjalankan aplikasi lengkap, di dalam environment peramban (browser) asli, disebut juga dengan "end-to-end".

    Pertimbangan Memiliki Tools :
        - Kecepatan iterasi dan environment yang realistis, yaitu beberapa tools menawarkan feedback loop yang cepat antara membuat sebuah perubahan dan melihat hasilnya, tetapi tidak memodelkan sifat dari peramban dengan tepat. Tools lain mungkin menggunakan environment peramban yang asli, tetapi mengurangi kecepatn iterasi danlebih flakier pada server integrasi berkelanjutan.

        - Seberapa banyak mock, yaitu dengan komponen, perbedaan antara tes "unit" dan tes "integrasi" bisa tidak sesuai. 

    Rekomendasi Tools :
        - Jest, adalah test runner pada JavaScript yang memungkinkan untuk mengakses DOM melalui jsdom. Sementara jsdom hanyalah perkiraan cara kerja browser yang seringkali cukup baik mengetes komponen pada React. Jest memberikan kecepatan iterasi yang bagus dikombinasikan dengan fitur-fitur yang powerful seperti mocking modules dan timer sehingga kita dapat memiliki kontrol lebih pada kode yang dijalankan.

        - react testing Library, merupakan seperangkat helpers yang memungkinkan mengetes komponen pada react tanpa bergantung pada detail implementasinya. Pendekatan ini membuat refactoring menjadi mudah dan mendorong untuk menerapkan best practices untuk aksesibilitas. Mungkin tidak memberikan cara untuk me-render secara "dangkal" pada komponen tanpa anak, test runner seperti Jest memungkinkan untuk melakukan mocking.

2. Membuat Basic testing menggunakan RTL (React testing Library)

Render dan Debug, render RTL berfungsi untuk merender file jSX apapun yang dibutuhkan. Kemudian kita akan memiliki akses ke komponen React yang ditest. Untuk mengetahui bahwa file JSX sudah terender, digunakan fungsi debug RTL. RTL digunakan untuk berinteraksi dengan komponen kita, seperti manusia.

Element digunakan untuk assertions atau untuk interaksi pengguna. Dapat dipilih elemen dengan fungsi object screen RTL. Contohnya :
    - getByText untuk memiliki teks dari elemen yang sudah dipilih.
    - labelText menggunakan getByLabelText
    - PlaceholderText menggunakan getByPlaceholderText
    - AltText menggunakan getByAltText
    - DisplayValue menggunakan getByDisplayValue.

3. Handle Event, Handle Asynchronous, dan Testing Custom Hook

    A. Handle event, yaitu dilakukan pada event onChange.

    B. Handle Asynchronous
    Salah satunya adalah ketika hendak mengetes fetch sebuah APi.

    C. Testing Custom Hook
    Library yang digunakan adalah React Hooks Testing Library yang akan memberikan alat-alat untuk mengetes hooks tanpa merender satu komponen.