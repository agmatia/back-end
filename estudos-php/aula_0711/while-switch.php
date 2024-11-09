<?php
$valorlanche = 10;
$qtd = 5;
$total = 0;

do{
    $total = ($valorlanche * $qtd);
} while($total <= 40);

switch($total){
    case 20: 
        echo "seu lanche não está caro. Total: ".$total;
        break;
    case 50:
        echo "Seu lanche está caro. Total: ".$total;
        break;
    default:
        echo "seu lanche está muito caro. Total: ".$total;
        break;
}