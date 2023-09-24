Summary_Materi Introduction Data Structure

1. Data adalah cakupan luas yang merujuk semua tipe informasi yang tersimpan dalam memori komputer, seperti string, number, boolean, dan lain sebagainya. Data Structure adalah bagaimana menyimpan dan mengorganisir data/value/elemen di dalam memori komputer.

2. Data Structure dibutuhkan untuk memberikan kualitas kode dan keefisienan kode sehingga dapat dimaintaince oleh tim saat program ingin dikembangkan.

Basic Data Structures :
- Array
- Set

Dalam operasi data structure akan bisa melakukan 4 hal, yaitu :
- Read, yaitu membaca/mengeluarkan value dari variabel.
- Search, yaitu mencari value dari sebuah variabel.
- Insert, yaitu memasukkan sebuah data structure ke dalam object ataupun variabel.
- Delete, yaitu menghapus sebuah index atau sebuah variabel dari data structure.

Mengukur kecepetan operasi adalah dengan melihat seberapa banyak langkah atau steps yang diperlukan, bukan berdasarkan waktunya.

3. Dalam data structure, array merupakan struktur yang paling sederhana dan banyak digunakan.

- Reading, merupakan nilai yang terkandung di dalam indeks tertentu di dalam array. Reading berfungsi untuk melihat value dari sebauh array.
- Searching berfungsi untuk mencari nilai tertentu ada di dalam array atau tidak. Untuk melakukan searching, digunakan index dari value yang dicari. Searching perlu mengecek setiap value dari indeks pertama untuk menemukan value yang dicari sehingga akan membutuhkan banyak step. 
- Insertion, adalah operasi untuk memasukkan sebuah value baru ke dalam array. 
- Deletion, yaitu operasi untuk menghapus atau menghilangkan value di dalam array.

Set merupakan data structure yang memiliki kemiripan dengan array, tetapi tidak menerima dupilasi value. Pada set juga dapat melakukan reading, searching, insertion, dan deletion, hanya saja terdapat perbedaan pada operasi insertion.

- Pada operasi insertion, tidak dapat menambahkan value yang sudah ada dan menggunakan method .add
- Untuk operasi reading dapat menggunakan forEach
- Untuk searching dapat menggunakan method has.
- Untuk operasi Deletion, menggunakan method .delete