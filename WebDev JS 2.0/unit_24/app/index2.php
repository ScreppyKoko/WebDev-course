<?php
if(isset($_GET['auth']) && $_GET['auth']== 'zhrgB3DxC8LoG7Gcilzg'){
if ($_GET['action'] == '1') {
    echo 'hello';
}
if ($_GET['action'] == '2') {
    echo 'hello '.$_GET['name'];
}
if ($_GET['action'] == '3') {
    echo $_GET['num1']+$_GET['num2'];
}
if ($_GET['action'] == '4') {
   echo rand( $_GET['num1'], $_GET['num2'] );
}
if ($_GET['action'] == '5') {
    echo Date('Y-m-d h:m:s', time());
}
if ($_GET['action'] == '6') {
    if ($_GET['num1'] > $_GET['num2']) {
        echo $_GET['num1'];
    }
    else if ($_GET['num1'] < $_GET['num2']){
        echo $_GET['num2'];
    }
    else echo 'равны';
}
if ($_GET['action'] == 7) {
    $a7 = [
        'https://cdn2.iconfinder.com/data/icons/free-color-halloween-icons/24/Jack-512.png',
        'https://cdn2.iconfinder.com/data/icons/free-color-halloween-icons/24/Pumpkin-Lamp_01-512.png',
        'https://cdn2.iconfinder.com/data/icons/free-color-halloween-icons/24/Bat-01-512.png',
        'https://cdn2.iconfinder.com/data/icons/free-color-halloween-icons/24/Spider-512.png',
        'https://cdn2.iconfinder.com/data/icons/free-color-halloween-icons/24/Witch-Hat-512.png'
    ];
    echo $a7[rand(0,count($a7)-1)];
}
if ($_GET['action'] == 8) {
  echo 'Ваш возраст '.(date("Y") - $_GET['year']);
}
if ($_GET['action'] == 9) {
    if(isset($_GET['m']) && $_GET['m']==1) {
        echo Date('m', now());
    }
    if(isset($_GET['d']) && $_GET['d']==1) {
        echo Date('d', now());
    }
    if(isset($_GET['y']) && $_GET['y']==1) {
        echo Date('Y', now());
    }
  }
}
else if (isset($_POST['auth']) && $_POST['auth']== 'zhrgB3DxC8LoG7Gcilzg'){
    if ($_POST['action'] == '1') {
        echo 'hello';
    }
    if ($_POST['action'] == '2') {
        echo 'hello '.$_POST['name'];
    }
    if ($_POST['action'] == '3') {
        echo $_POST['num1']+$_POST['num2'];
    }
    if ($_POST['action'] == '4') {
       echo rand( $_POST['num1'], $_POST['num2'] );
    }
    if ($_POST['action'] == '5') {
        echo Date('Y-m-d h:m:s', time());
    }
    if ($_POST['action'] == '6') {
        if ($_POST['num1'] > $_POST['num2']) {
            echo $_POST['num1'];
        }
        else if ($_POST['num1'] < $_POST['num2']){
            echo $_POST['num2'];
        }
        else echo 'равны';
    }
    if ($_POST['action'] == 7) {
        $a7 = [
            'https://cdn2.iconfinder.com/data/icons/free-color-halloween-icons/24/Jack-512.png',
            'https://cdn2.iconfinder.com/data/icons/free-color-halloween-icons/24/Pumpkin-Lamp_01-512.png',
            'https://cdn2.iconfinder.com/data/icons/free-color-halloween-icons/24/Bat-01-512.png',
            'https://cdn2.iconfinder.com/data/icons/free-color-halloween-icons/24/Spider-512.png',
            'https://cdn2.iconfinder.com/data/icons/free-color-halloween-icons/24/Witch-Hat-512.png'
        ];
        echo $a7[rand(0,count($a7)-1)];
    }
    if ($_POST['action'] == 8) {
      echo 'Ваш возраст '.(date("Y") - $_POST['year']);
    }
    if ($_POST['action'] == 9) {
        if(isset($_POST['m']) && $_POST['m']==1) {
            echo Date('m', now());
        }
        if(isset($_POST['d']) && $_POST['d']==1) {
            echo Date('d', now());
        }
        if(isset($_POST['y']) && $_POST['d']==1) {
            echo Date('Y', now());
        }
      }
}
else {
    echo 'Не ввели ключ авторизации. Ключ доступен в чате курса.';
}