# Quiz Project GitHub README

## Petunjuk Penggunaan

### Flow untuk Pull Project Quiz Backend

#### Aturan Umum:

- Setiap commit harus mencantumkan nama pengerja. Contoh:

  ```bash
  git commit -m 'add feature quiz -amri'
  ```

- Merge branch dilakukan oleh Mas Akbar.

#### Langkah-langkah:

1. **Buat Branch Baru**

   ```bash
   git branch namabranch
   ```

2. **Pindah ke Branch yang Dibuat**

   ```bash
   git checkout namabranch
   ```

3. **Git Add (Tambahkan Perubahan ke Staging)**

   ```bash
   git add .
   ```

4. **Pull dari Repository (Update Local Repository)**

   ```bash
   git pull origin main
   ```

   **Note:** Harap teliti, hindari kehilangan kode yang sudah dibuat di lokal. Selalu lakukan backup jika diperlukan.

5. **Push Branch ke Repository**

   ```bash
   git push origin namabranch
   ```

6. **Menunggu Persetujuan dari Mas Akbar**

   - Setelah push, tunggu hingga Mas Akbar menyetujui atau melakukan merge terhadap branch.

7. **Hapus Branch di Lokal Secara Manual**

   ```bash
   git branch -D namabranch
   ```

   **Optional:** 8. **Hapus Branch di Repository**

   ```bash
   git push origin --delete namabranch
   ```

### Catatan:

- Pastikan selalu berkomunikasi dan berkoordinasi dengan tim.
- Jangan lupa mencantumkan pesan commit yang jelas.
- Hindari melakukan push langsung ke branch utama (main).

Terima kasih atas kerjasamanya!
