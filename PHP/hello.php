<?php

declare(strict_types = 1);
error_reporting(-1);

$a = "Hello."; /* global scope */

# // /* $a = 1; */

function my_print(string $string_to_print): string
{ 

    // $a (error) /* reference to local scope variable */
    global $a;
    echo $a;

    echo  $string_to_print; 

    return $a . $string_to_print;
} 

my_print("Jhon Córdoba");
?>