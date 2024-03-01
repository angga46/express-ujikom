const express = require('express');
const router = express.Router();
const kontakController = require('../controllers/kontakController');

// CREATE: Menambahkan data ke dalam tabel kategoris
router.post('/api/v1/kontak/', kontakController.create);

// READ: Menampilkan atau mengambil semua data dari tabel kategoris
router.get('/api/v1/kontak/', kontakController.findAll);

// READ: Mengambil data berdasarkan id
router.get('/api/v1/kontak/:id', kontakController.findOne);

// UPDATE: Merubah data sesuai dengan id yang dikirimkan sebagai params 
router.put('/api/v1/kontak/:id', kontakController.update);

// DELETE: Menghapus data sesuai id yang dikirimkan
router.delete('/api/v1/kontak/:id', kontakController.delete);

module.exports = router;