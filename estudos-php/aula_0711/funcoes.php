<?php

function soma($a, $b=1){
    return $a+$b;
}

function sub($a, $b=1){
    return $a-$b;
}

function div($a, $b=1){
    if($b<>0){
        return $a/$b;
    } else{
        echo "Operação inválida.";
    }
}

function mult($a, $b=1){
    return $a*$b;
}

echo soma(2)."<br>";
echo sub(6,3)."<br>";
echo div(6)."<br>";
echo mult(12,12);