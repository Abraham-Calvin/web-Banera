<?php
header("Content-Type: application/json");

// Koneksi ke database (Gunakan default XAMPP: root tanpa password)
$host = "localhost";
$user = "root"; // Username default
$pass = ""; // Kosongkan password
$dbname = "banera_db";

$conn = new mysqli($host, $user, $pass, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Database error"]);
    exit;
}

// Ambil data dari formulir
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Simpan ke database
$sql = "INSERT INTO kontak (name, email, message) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $name, $email, $message);

if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Gagal menyimpan"]);
}

// Tutup koneksi
$stmt->close();
$conn->close();
?>
