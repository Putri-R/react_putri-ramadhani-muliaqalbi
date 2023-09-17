Summary_Materi React Hook

1. React hook merupakan fitur baru di React 16.8. Dimana dengan Hooks, dapat digunakan state dan fitur react lainnya tanpa perlu menulis sebuah class.

Motivasi dibuatnya React Hooks :
    - Kesulitan untuk menggunakan kembali stateful logic antar komponen
    - Komponen kompleks menjadi sulit untuk dimengerti
    - Class membingungkan manusia dan mesin

Hooks pada React :
    a. Hooks Dasar : useState, useEffect, useContext
    b. Hooks Tambahan : useReducer, useCallback, useMemo, useRef, useImperativeHandle, useLayoutEffect, useDebugValue

Aturan pada Hooks :
    a. Panggil Hooks hanya di tingkat atas, yaitu tidak memanggil Hooks pada dalam loops, conditions, ataupun nested functions.
    b. Panggil Hooks hanya dari fungsi-fungsi React, yaitu tidak memanggil Hooks dari fungsi-fungsi JavaScript biasa. Hooks dapat dipanggil dari komponen-komponen fungsi React ataupun dari custom Hooks.

2. Implementasi useState dan useEffect di Component

A. Menggunakan useState

    Menggunakan useState, yaitu dengan pemanggilan  useState di dalam sebuah fungsi. Pemanggilan ini akan menyimpan suau state dalam suatu variable. Dengan menggunakan useState pada React, value yang sudah di render akan tetap tersimpan. Argumen di dalamnya dapat berupa number maupun string.

    useState akan me-return dua buah nilai, yaitu state saat ini (nilai di sebelah kiri) dan fungsi untuk melakukan pembaruan (nilai di sebelah kanan). Untuk pemanggilannya, hanya dengan memanggil variablenya saja.

    Tips dalam menggunakan useState : dapat menggunakan banyak variable state

B. Menggunakan useEffect

    useEffect, yaitu Effect Hook yang memungkinkan melakukan efek samping (side effects) di dalam function component. Terdapat 2 jenis useEffect, yaitu useEffect yang membutuhkan pembersihan dan yang tidak membutuhkan pembersihan.

    Contoh useEffect tanpa pembersihan : memperbarui DOM, permintaan jaringan, mutasi DOM secara manual, dan lainnya.

    useEffect yang membutuhkan pembersihan, salah satunya bertujuan untuk mencegah terjadinya kebocoran data.

    Tips mengoptimalkan performa dengan melewati Effects adalah dengan melakukan pengkondisian.

3. Custom Hooks

Custom Hooks adalah Hooks yang dibuat (bukan bawaan dari React) sehingga dapat mengekstrak komponen logika ke fungsi yang dapat digunakan lagi.