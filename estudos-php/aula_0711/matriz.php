<?php
$matriz = array(
    "paises" => array(
    1 => "Brasil",
    2 => "Estudos Unidos"    
    ),
    "estados" => array(
        1 => "São Paulo",
        2 => "Santa Catarina",
        3 => "Flórida"
    )
);

echo $matriz["paises"][1]."<br>";
var_dump($matriz["estados"][1]."<br>");
var_dump($matriz["paises"][2]."<br>");
echo $matriz["estados"][2]."<br>";

