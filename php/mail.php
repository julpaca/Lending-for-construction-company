<meta http-equiv='refresh' content='3; url=https://you-hands.ru'>
<meta charset="UTF-8" />
<?php

	if (isset($_POST['name']) && $_POST['name'] != "")
		$name = $_POST['name'];
	else die ("Не заполнено поле \"Имя\"");
	if (isset($_POST['email']) && $_POST['email'] != "") 
		$email = $_POST['email'];
	else die ("Не заполнено поле \"Email\"");

	if (isset($_POST['message']) && $_POST['message'] != "") 
		$body = $_POST['message'];
	else die ("Не заполнено поле \"Сообщение\"");
	 


	$address = "yulia020301@hmail.com";
	$email .= "E-mail: $email \n";
 	$name .= "Фамилия и имя: $body"; 
	$send = mail ($address,$name,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");
		 
?>