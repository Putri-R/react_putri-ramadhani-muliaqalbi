Summary Self Learning 1_Version Control and Branch Management (Git)

1. Versioning adalah sistem yang bertugas untuk mengatur versi dari source code program.
Tools yang akan digunakan adalah Git dan GitHub. Git adalah salah satu version control system yang populer yang digunakan para developer untuk mengembangkan software secara bersama-sama. Dengan menggunakan git, dapat dilakukan kolaborasi dengan setiap orang dari berbagai negara. Git ini dibuat oleh Linus Torvalds pada tahun 2005.

2. Dengan memanfaatkan Git, maka beberapa file/folder dapat saling terhubung dalam sebuah remote computer/server. Apabila dilakukan perubahan, akan tercatat di history git. Untuk menggunakan git, perlu mendownload dan menginstal Git. Kemudian untuk dapat memanfaatkan Git dan GitHub, ada beberapa hal yang perlu dilakukan :
- Melakukan Setting Up dalam membuat repository, dapat membuat repository baru ataupun melakukan clone terhadap suatu repository.
- Menambahkan isi repository berupa folder, file, ataupun code program dan dapat dilakukan di Visual Studio Code.

3. Beberapa hal mengenai Git dan GitHub :
The Staging Area adalah suatu konsep yang ada di dalam GitHub yang terdiri dari Working Directory, Staging Area, dan Repository.
- Working Directory yaitu lokasi file/folder yang sedang dikerjakan (lokasi awal).
- Staging Area yaitu lokasi file ataupun folder yang terdapat perubahan sebelum dilakukan commit.
- Repository yaitu lokasi file/folder yang telah di commit (berada di GitHub).

Beberapa hal yang dilakukan untuk menambahkan dan mengupload file ke GitHub melalui terminal :
- git add .
- git commit -m "(message)"
- git push origin

Beberapa code git :
- git status untuk melihat status git saat ini.
- git add untuk menambahkan file/folder ke repository.
- git commit untuk mengupload file dengan menambahkan sebuah message.
- git diff untuk mengetahui bagaimana perubahan dari file yang diedit.
- git stash untuk menyimpan perubahan yang dilakukan.

- .gitignore untuk memilah file yang perlu dan tidak perlu dimasukkan ke repository.

Inspecting Repository :
- git log berfungsi untuk melihat seluruh commit yang sudah dibuat.
- git checkout berfungsi untuk berpindah branch dan versi
- git reset berfungsi untuk melakukan perubahan versi, terbagi dua yaitu soft dan hard.

Syncing :
- git remote berfungsi untuk memberikan versi remote repository.
- git push berfungsi untuk mengupload perubahan di penyimpanan local ke repository
- git fetch berfungsi untuk mengambil perubahan dari repositori remote repository ke repositori local
- git pull berfungsi untuk mengambil perubahan di repository ke dalam penyimpanan local

Branches adalah percabangan di dalam repository yang berfungsi untuk melindungi main project saat bekerja tim.
- git branch --list untuk melihat seluruh branch yang ada.
- git branch <branch> untuk membuat branch baru.
- git branch -D <branch> untuk menghapus secara paksa suatu branch.
- git branch -a untuk melihat semua remote branch.
- git merge new-feature untuk menggabungkan/menyamakan isi branch baru dengan main branch.

Pull Request berfungsi untuk dapat berkontribusi dalam sebuah repository lain.

Workflow Collaboration merupakan pemahaman mengenai kolaborasi dengan memaksimalkan workflow yang terdapat di GitHub. Beberapa tips untuk kolaborasi :
- biarkan branch master/main tidak terdistribusi
- Hindari perubahan langsung di branch development, tetapi lakukan perubahan di branch-branch feature.
- Masukkan perubahan ke branch developmet, bukan ke branch master
- Ketika sudah selesai, lakukan merge ke branch master

Konflik adalah perubahan pada line yang sama, tetapi pada branch yang berbeda