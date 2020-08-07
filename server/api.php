<?php
    $data = json_decode(file_get_contents('https://sigma-studios.s3-us-west-2.amazonaws.com/test/colombia.json'), true);
    $code = json_encode($data);
    print_r( ($code));

?>