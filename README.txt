WEBSITE KENANGAN KITA ♡

FILE YANG ADA:
- index.html  : isi/struktur halaman website
- style.css   : desain, warna, animasi, tampilan HP/laptop
- script.js   : tombol navigasi, foto, dan musik
- assets/     : tempat menyimpan foto dan lagu kalian

CARA MEMBUKA DI VS CODE:
1. Extract ZIP ini ke folder yang kamu inginkan.
2. Buka VS Code > File > Open Folder > pilih folder "kenangan-kita".
3. Kalau belum ada, install extension "Live Server" di VS Code.
4. Klik kanan index.html > Open with Live Server.

CARA MEMASUKKAN FOTO:
1. Masukkan foto kalian ke folder assets.
2. Untuk contoh bawaan, beri nama foto: foto1.jpg, foto2.jpg, foto3.jpg, foto4.jpg, foto5.jpg.
3. Kalau fotonya PNG, ubah juga nama di index.html dari .jpg menjadi .png.
4. Mau lebih dari 5 foto? Duplikat salah satu blok <figure class="memory-photo"> di index.html, ganti nama file dan caption-nya.
   Contoh: <img src="assets/foto6.jpg" alt="Kenangan kita 6" />

CARA MEMASUKKAN MUSIK:
1. Masukkan file musik MP3 ke folder assets, contoh: lagu-kita.mp3.
2. Buka script.js.
3. Cari baris: const musicFile = '';
4. Ubah menjadi: const musicFile = 'lagu-kita.mpeg';
5. Musik baru bisa dimainkan setelah tombol musik ditekan (browser biasanya memblokir autoplay sebelum interaksi).

CARA MENGUBAH KATA-KATA:
Buka index.html dan cari teks yang ingin kamu ubah. Kamu bisa ganti pesan surat, judul, caption foto, dan tulisan tombol.

CATATAN:
Foto contoh belum disertakan, jadi tambahkan foto sendiri ke folder assets. Nama file harus sama persis dengan yang ditulis di index.html. Untuk hasil terbaik, gunakan foto yang cukup jelas dan crop portrait untuk tampilan kartu.
