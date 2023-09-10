React Fundamental

1. React Fundamental

    A. JSX (JavaScript XML)

        JSX merupakan ekstensi syntax pada JavaScript yang penggunaannya disarankan pada React karena lebih menggambarkan apa yang seharusnya pada user interface. JSX akan menghasilkan React element.

        JSX dibuat berdasarkan fakta bahwa logika rendering sangat terikat dengan logic UI, seperti bagaimana penanganan event, bagaimana perubahan state seiring dengan waktu, dan bagaimana data disiapkan untuk ditampilkan. Menaruh expression pada JSX dengan menggunakan kurung kurawal. JSX merupakan expression.

        Spesifikasi jenis pada elemen React:
        •	Kapitalisasi untuk komponen React
        •	Huruf kecil (lowercase) untuk komponen bawaan

        Menentukan atribut dengan JSX :
        •	Tanda kutip untuk menentukan string literal
        •	Kurung kurawal untuk menyematkan ekspresi JavaScript
        •	React DOM menggunakan camelCase sebagai konvensi penamaannya

        Menspesifikasikan elemen anak dengan JSX :
        •	Jika tag bersifat kosong (tidak memiliki elemen anak), maka dapat menutupnya secara langsung dengan />
        •	Tag JSX dimungkinkan untuk memiliki elemen child

    B. React Component

        React Component merupakan bagian kode yang dapat digunakan kembali untuk menentukan tampilan, behavior, dan state sebagian UI. Komponen membantu untuk memecah UI menjadi bagian tersendiri yang dapat digunakan kembali.

        Function dan class component:
        Komponen dapat dipecah dengan menggunakan function ataupun class. Class harus extend dari React Component.

        Komposisi komponen dan props:
        •	Props adalah singkatan dari properties untuk memberikan argumen atau data pada komponen. Props membantu untuk membuat komponen menjadi lebih dinamis. Props dioper ke komponen, seperti halnya memberikan atribut pada tag HTML. Props pada komponen adalah read-only (tidak dapat diubah).
        •	One way data flow, yaitu parent component dapat mentransfer datanya ke child melalui props, tetapi child tidak dapat mentransfer datanya ke parent.
        •	Komposisi komponen terbagi atas dua, yaitu kontainmen dan spesialisasi :
            -	Kontainmen, yaitu komponen yang tidak langsung mengetahui komponen childnya karena komponen child yang memiliki value    yang bergantung pada suatu keadaan.
            -	Spesialisasi, yaitu komponen yang dianggap sebagai kasus yang spesial dari komponen lainnya.

    C. React Lifecycle (siklus hidup pada komponen React)

        React lifecycle adalah sederetan event yang terjadi mulai dari awal komponen muncul hingga hilang pada aplikasi. Terdapat 3 buat tahapan siklus, yaitu mounting (hidup), updating (tumbuh), dan unmounting (mati). Mounting dan unmounting hanya terjadi sekali, tetapi updating dapat terjadi berkali-kali, seperti apabila terdapat state baru ataupun terjadinya update. Tiap siklus memiliki 3 fase, yaitu render fase, pre-commit fase, dan commit fase. Render fase adalah fungsi harus pure dan tidak memiliki side effects. Pre-commit fase dimana kita bisa membaca DOM. Commit fase, dimana kita dapat mengolah DOM dan melakukan side effects

        Beberapa lifecycle method yang umum (banyak digunakan) :
        •	render(), merupaka method yang harus ada di class dan tidak boleh terdapat side affect/harus pure function.
        •	componentDidMount(), merupakan method yang dipanggil ketika komponen sudah di render dan dapat dilakukan pemanggilan API. Pada method ini, dapat dilakukan side effects.
        •	componentDidUpdate(), merupakan method yang dipanggil ketika terjadi update. 
        •	componentWillUnmount(), merupakan method yang dipanggil ketika komponen akan dihancurkan atau terjadi clean up actions.

2. Render Bersyarat dan List

    Render bersyarat yaitu melakukan render terhadap satu atau beberapa komponen berdasarkan state dari aplikasi. Misalnya menggunakan if, inline if dengan operator &&, inline if-else dengan ternary conditional operator, dan pemberian return null untuk mencegah komponen dirender.

    Render List dapat dibuat dengan menggunakan kurung kurawal {} yang berisikan beberapa elemen dan menyertakannya dalam JSX. Dalam merender list, digunakan key untuk membantu react mengidentifikasi item yang telah diubah, ditambahkan, atau dihilangkan.

3. Struktur directory pada React
    •	Pengelompokkan berdasarkan fitur atau rute
    •	Pengelompokkan berdasarkan jenis file

    Pemberian styling
    •	Menggunakan class dan CSS, yaitu dengan membuat file CSS dan ditargetkan oleh file react.
    •	Menggunakan atribut style, seperti halnya inline-CSS
    •	Menggunakan modul CSS, yaitu dengan menggunakan class yang akan menerapkan CSS hanya pada elemen tersebut saja.
