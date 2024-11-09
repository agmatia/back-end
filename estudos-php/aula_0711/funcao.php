<?php

function imprime()
{
    echo "A função imprime foi chamada.";
}

function imprime_nome($nome)
{
    echo "Olá " . $nome;
}

imprime();
echo "<br>";

imprime_nome("Amanda");
