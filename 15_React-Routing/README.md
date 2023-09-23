Summary_Materi React Routing

1. Routes, dalam konteks ReactJS merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA (Single Page Application).

Perbedaan Multi Page Application dan Single Page Application:

a. Multi Page Application (MPA) disebut juga dengan tradisional web app merupakan jenis aplikasi website dimana perlu memuat ulang seluruh halaman web setiap kali membuat permintaan baru.

    Keunggulan MPA :
    - SEO website akan lebih mudah dioptimasi
    - Memudahkanmu untuk mengubah halaman tertentu untuk setiap kebutuhan yang berbeda.
    - Menggunakan tools analisis seperti Google Analytics yang dapat terintegrasi langsung dengan website.

    Kekurangan MPA :
    - Kecepatan download website yang lama dibandingkan SPA.
    - Perlu mengintegrasikan antara front-end dan back-end.
    - Lebih sering membutuhkan maintenance dan update.
    - Mungkin akan lebih sering menemukan masalah performa website.

b. Single Page Application (SPA) merupakan jenis aplikasi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut.

    Keunggulan SPA :
    - Waktu loading website yang lebih cepat
    - Tidak ada query tambahan ke server
    - Front-end yang cepat dan responsif
    - Meningkatkan pengalaman pengguna (user experience)

    Kekurangan SPA :
    - Tidak bagus dalam SEO
    - Berat saat di-load/buka pertama kali
    - Kurang aman dibandingkan website biasa
    - Masalah kompatibilitas browser

2. React Router
Komponen-komponen yang sering digunakan : 

    a. BrowserRouter : digunakan sebagai router yang menggunakan API history dari HTML5 sehingga adapat menggunakan location untuk menyinkronkan UI dengan url. Di dalam object location, merepresentasikan dimana lokasi aplikasi saat ini.

    b. Route : digunakan sebagai pengarah rute lalu lintas suatu aplikasi web.

    c. Switch : digunakan untuk membungkus kumpulan beberapa component route.

    d. Link : digunakan untuk berpindah antar halaman property to tersebut merujuk pada path di route yang akan dituju.

- Hook yang ada pada React Router :

    a. useHistory : memberi akses ke intance riwayat yang dapat digunakan untuk bernavigasi. Contoh : length, go, goBack,goForward, push, dan seterusnya.

    b. useLocation : mengembalikan objek lokasi yang mewakili URL saat ini. Dapat diibaratkan seperti useState yang mengembalikan lokasi baru setiap kali URL berubah.

    c. useParams : mengembalikan objek pasangan kundi/nilai parameter URL. Gunakan untuk mengakses match.params dari <Route> saat ini.

    d. useRouteMatch : mencoba mencocokkan URL saat ini dengan cara yang sama seperti <Route>. Sebagian besar berguna untuk mendapatkan akses ke data kecocokan tanpa benar-benar merender <Route>.

3. React Router Version 6

a. Terdapat beberapa fitur baru :
    - Penangan routing berbasis Hook, contohnya useRoutes, useNavigastion.
    - Pengelolaan routing yang lebih terpusat.
    - Penangan error lebih baik dengan menggunakan <Route> NotFound.
    - Perubahan pada konsep penggunaan URL

b. Komponen Route secara Statis : menggunakan Routes dan Route dengan menentukan komponen halamannya.

c. Komponen Route secara Dinamis : menggunakan property render.

d. Penggunaan parameter dalam Route : dengan menggunakan path sebagai tempat lokasinya dan dipanggil valuenya dengan pameter match.params.

e. Penggunaan Nested Route : digunakan pada halaman yang memiliki dinamis route ataupun tidak.

f. Penggunaan Link : untuk membawa pengguna melakukan navigasi halaman ke halaman lain dengan melakukan click atau tap.