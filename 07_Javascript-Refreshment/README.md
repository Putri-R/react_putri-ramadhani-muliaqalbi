Summary_Materi Javascript Refreshment

1. JavaScript adalah bahasa pemrograman yang high-level, scripting, untyped, dan interpreted. JavaScript adalah bahasa pemrograman tingkat tinggi karena merupakan bahasa yang mudah untuk dipahami oleh manusia. JavaScript ini dibuat untuk dapat berinteraksi dengan halaman web. JavaScript merupakan bahasa pemrograman yang untyped/tidak dipengaruhi oleh tipe data. JavaScript termasuk interpreted karena merupakan bahasa yang fleksibel dan mudah untuk diuji.

2. Declaration adalah proses pembuatan variabel untu menyimpan data. Scoping adalah menentukan dimana varibel, fungsi, dan objek diatur dan dapat diakses dalam code yang dibuat. Terdapat 3 jenis Scoping :
- Global, yaitu saat mendeklarasikan variabel, maka variabel tersebut akan dapat diakses untuk setiap kondisi, seperti diakses di function dan blok.
- Function/Local, yaitu pada saat mendeklarasikan variabel, tidak dapat diakses di luar function.
- Block, saat mendeklarasikan variabel di dalam block, yang dapat di akses di luar block, hanya variabel var saja.

Hoisting adalah membuat beberapa jenis variabel atau fungsi dapat diakses/digunakan dalam kode sebelum dideklarasikan. Contohnya adalah var dan function.

Terdapat 2 kategori tipe data, yaitu 
- Primitive, adalah unit pemrosesan terkecil dan elemen paling sederhana yang tersedia dalam bahasa pemrograman. Misalnya string, boolean, number, bigInt, undefined, null, dan symbol(ES6).
- Objects adalah unit yang menyimpan properti dan fungsi (method). Misalnya object, array, function, date, set, map, weak set, dan weak map.

Destructuring adalah ekspresi dari JavaScript yang memungkikan untuk menyalin nilai dari array atau property dari objek ke dalam variabel yang berbeda.

Spread merupakan sytax yang dapat digunakan ketika semua elemen dari object atau array perlu dimasukkan ke dalam sebuah daftar/list.

3. Method adalah sebuah fungsi yang terkait dengan object yang membuat program sesederhana mungkin sesuai kegunaan masing-masing. Diantaranya adalah concat, map, foreach, slice, filter, dan reduce.

Control Flow adalah mengatur alur eksekusi pada statement atau jalannya program sesuai keinginan kita. Terbagi dua, yaitu loop/iterasi seperti for, while, dan do while dan pengkondisian/percabangan, seperti if else, switch, block, try catch, break, continue, dan throw.

Function adalah sebuah object karena memiliki property dan method. Berguna untuk melakukan serangkaian komputasi/prosedur yang dapat digunakan berulang kali.

Class adalah suatu keyword/prototype dari suatu object yang akan dibuat. 
- Constructor merupakan method di dalam class yang akan selalu terpanggil pertama kali ketika membuat object. 
- Method merupakan fungsi yang terdapat di dalam sebuah class.  
- Attributes adalah kumpulan variabel yang membentuk object yang dimiliki oleh suatu class. 
- Extend digunakan untuk membuat kelas anak dari kelas induk yang mewarisi semua tribut dan method dari kelas induknya.

Async Wait :
- Synchronous, yaitu mengeksekusi setiap perintah satu persatu sesuai urutan kode yang dituliskan.
- Asynchronous, yaitu hasil eksekusi yang tidak selalu berdasarkan urutan kode, tetapi berdasarkan waktu proses.
- Callback merupakan fungsi yang dieksekusi setelah fungsi lain selesai dijalankan.
- Promise adalah objek yang merepresentasikan keberhasilan atau kegagalan pada sebuah event yang asynchronour dimasa mendatang.
- Await adalah sebuah keyword yang terdapat pada async function yang tujuannya menghentikan eksekusi sambil menunggu promise selesai.

DOM (Document Obejct Model) adalah suatu API untuk HTML yang merepresentasikan halaman web pada suatu dokumen menjadi sebuah object.