<?php
$file = $_GET['file'] ?? 'windows';
$counterFile = "download_count.txt";

if (!file_exists($counterFile)) {
    file_put_contents($counterFile, json_encode([
        "windows" => 0,
        "mac" => 0
    ]));
}

$data = json_decode(file_get_contents($counterFile), true);

if (!isset($data[$file])) {
    $data[$file] = 0;
}

$data[$file]++;

file_put_contents($counterFile, json_encode($data), LOCK_EX);

$links = [
    "windows" => "https://codeberg.org/army2/Army2TK/raw/branch/main/Army2TK_setup.exe",
    "mac" => "https://codeberg.org/army2/Army2TK/raw/branch/main/Army2TK.dmg"
];

header("Location: " . $links[$file]);
exit;
