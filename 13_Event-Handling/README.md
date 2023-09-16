Summary_Materi Event Handling

1. State pada react adalah data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa diakses oleh component lain.
Beberapa hal mengenai state :
    •	Data yang bisa dimodifikasi menggunakan setState
    •	Setiap terjadi modifikasi akan terjadi render ulang pada component tersebut
    •	Bersifat Asynchronous
    •	Dipakai dalam class

Perbedaan Props dan State :
    •	Data pada Props bersifat read-only dan tidak dapat di modifikasi.
    •	Data pada State dapat diubah dengan cara asynchronous dan modifikasi dilakukan dengan menggunakan this.setState.

2. Stateful dan Stateless Component
A. Stateful Component adalah komponen yang memiliki state dan dibuat dengan class. Kelebihannya adalah memiliki lifecycle sehingga memiliki banyak logic.

B. Stateless Component adalah komponen yang tidak memiliki state, tetapi hanya memiliki prop. Umumnya, komponen ini dibuat dengan menggunakan function karena codenya lebih ringkas dari pada menggunakan class.

C. Perbedaan Stateful dan Stateless Component
    •	Stateful Component :
        a) Mengerti tentang aplikasi
        b) Melakukan data fetching (pengambilan data)
        c) Berinteraksi dengan aplikasi
        d) Tidak dapat digunakan kembali
        e) Meneruskan status dan data ke anak-anaknya (children)

    •	Stateless Component :
        a) Tidak tahu tentang aplikasi
        b) Tidak melakukan data fetching
        c) Tujuan utamanya adalah visualisasi
        d) Dapat digunakan kembali
        e) Hanya berkomunikasi dengan induknya langsung (parent)

3. Penangan Event pada React (Event Handling)
Event Handling ialah suatu metode untuk menangani sebuah event (aksi) oleh pengguna kepada suatu komponen.

Event merupakan suatu peristiwa yang dipicu oleh pengguna pada suatu komponen, misalnya tombol yang ditekan, form disubmit, dan halaman discroll.

Beberapa contoh list event :
    •	Clipboard Events (promise terpenuhi)
    •	Form Events (onChange, onSubmit)
    •	Mouse Events (OnClick, onDoubleClick, onMouseOver)
    •	Generic Events (onError, onLoad)
    •	dan lainnya
