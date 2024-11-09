<?php
$nomes = array(
    'Fulano',
    'Beltrano',
    'Ciclano'
);

$tamanho_vetor = count($nomes);
echo "Tamanho do vetor: " . $tamanho_vetor . "<br>";
print_r($nomes) . "<br>"; //mostra o indice
var_dump($nomes) . "<br>"; //mostra o tipo de dado e o tamanho dele

$nomes = [
    'Fulano',
    'Beltrano',
    'Ciclano',
    'Outros'
];

$tamanho_vetor = count($nomes);
echo "Tamanho do Vetor: " . $tamanho_vetor . "<br>";
print_r($nomes);
