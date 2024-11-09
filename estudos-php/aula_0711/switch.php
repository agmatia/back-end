<?php
$estado = "MT";
switch ($estado) {
    case 'SC':
        echo "Estado da região sul.";
        break;
    case 'ES':
        echo "Estado da região sudeste.";
        break;

    default:
        echo "Não identificamos a região do estado.";
        break;
}