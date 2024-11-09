<?php
$cidades = array(
    "Joinville",
    "São Paulo",
    "Manaus",
    "Fortaleza"
);

foreach ($cidades as $valor) {
    echo "Cidade: ".$valor."<br>";
}

echo "<br>";

foreach ($cidades as $chave) {
    echo "Posição: ".$chave.". Armazena: ".$valor."<br>";
}