Summary_Materi Global State Management

1. Redux, merupakan library untuk manajemen state global.

    Kapan saat yang tepat untuk menggunakan Redux :
    - Banyak state yang perlu ditaruh di banyak tempat
    - State pada app sering berubah
    - Logic untuk mengubah state kompleks
    - Ukuran codebase yang sedang atau besar dan dikerjakan oleh banyak orang
    - Perlu untuk mengetahui bagaimana state diupdate seiring waktu

    Redux Libraries dan Tools :
    - React-Redux, untuk memudahkan penggunaan Redux di react
    - Redux Toolkit, berisikan package dan function redux
    - Redux DevTools Extension, yaitu extension pada browser untuk melihat history perubahan dan cocok saat debugging.

    Komponen penting Redux :
    - Action, untuk memberikan informasi dari aplikasi ke store. Digunakan untuk merubah state pada store saat keadaan tertentu.
    - Reducer, merupakan pure JavaScript functions yang mengambil state aplikasi saat ini dan object action, kemudian mengembalikan state aplikasi terbaru.
    - Store, merupakan objek sentral yang menyimpan state pada aplikasi.

    Memakai dan mengubah state :
    - Menggunakan Hooks
    - menggunakan Connect

2. Redux Thunk

    Redux Thunk, merupakan thunk middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action.

    Redux thunk berfungsi untuk menghandle side effect logic, seperti logic synchtonous kompleks yang perlu mengakses store dan juga logic async seperti request data API.

3. Persisted State dan Data Fetching

    A. Persisted State (Menyimpan State ke Storage), yaitu untuk penyimpanan data sebelumnya saat aplikasi di refresh/dibuka kembali.

    B. Data Fetching (Pengambilan Data), yaitu proses request pengambilan data dari react ke server yang menyimpan data.

    Cara untuk fetching data di react :
    - Fetch API, merupakan function API built yang sudah ada di browser.
    - Axios, merupakan library untuk melakukan fetching dengan config-config yang membantu dalam fetching.
    - React Query Library, merupakan custom hooks yang sudah menghandle skema fetching dan errornya.

    Field yang biasa dipakai di dalam fetch API adalah :
    - method : GET, POST, PUT, DELETE, HEAD
    - ur; : URL dari request
    - body : body dari request
    - headers : objek Headers

    Beberapa field yang digunakan untuk response, seperti type (basic, cors), url, useFinalURL, status, ok, statusText, headers.
    Beberapa method yang digunakan untuk response, seperti clone(), error(), redirect(), arrayBuffer(), blob, formdata(), json(), text().