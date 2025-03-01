<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require '../../config/config.php';

$data = [];

try {
    // Leggi i dati dalla tabella menu
    $stmt = $pdo->query("SELECT * FROM menu");
    if (!$stmt) {
        throw new Exception('Errore nella query per la tabella menu: ' . implode(" ", $pdo->errorInfo()));
    }
    $data['menu'] = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Leggi i dati dalla tabella hero
    $stmt = $pdo->query("SELECT * FROM hero");
    if (!$stmt) {
        throw new Exception('Errore nella query per la tabella hero: ' . implode(" ", $pdo->errorInfo()));
    }
    $data['hero'] = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Leggi i dati dalla tabella servizi
    $stmt = $pdo->query("SELECT * FROM servizi");
    if (!$stmt) {
        throw new Exception('Errore nella query per la tabella servizi: ' . implode(" ", $pdo->errorInfo()));
    }
    $data['servizi'] = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Leggi i dati dalla tabella chisiamo
    $stmt = $pdo->query("SELECT * FROM chisiamo");
    if (!$stmt) {
        throw new Exception('Errore nella query per la tabella chisiamo: ' . implode(" ", $pdo->errorInfo()));
    }
    $data['chisiamo'] = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Leggi i dati dalla tabella cosafacciamo
    $stmt = $pdo->query("SELECT * FROM cosafacciamo");
    if (!$stmt) {
        throw new Exception('Errore nella query per la tabella cosafacciamo: ' . implode(" ", $pdo->errorInfo()));
    }
    $data['cosafacciamo'] = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Leggi i dati dalla tabella team
    $stmt = $pdo->query("SELECT * FROM team");
    if (!$stmt) {
        throw new Exception('Errore nella query per la tabella team: ' . implode(" ", $pdo->errorInfo()));
    }
    $data['team'] = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Errore del server: ' . $e->getMessage()]);
}
?>