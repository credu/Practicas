Algoritmo Edades
	escribir "Escribe el ??/00/0000"
	leer d
	escribir "Escribe el " ,d "/??/0000"
	leer m
	escribir "Escribe el " ,d "/" ,m "/????"
	leer aa
	escribir "Escribe " ,d "/" ,m "/" ,aa
	escribir "�En qu� a�o estamos?"
	leer da
	escribir "�En qu� numero de mes estamos?"
	leer ma
	
	dia <- d
	mes <- m
	a�o <- aa
	edad <- da-aa
	
	Si d y m >= ma  Entonces
		edad <- edad-1
	Fin Si
	Si edad > 18 Entonces
		Escribir "Tienes " ,edad " a�os de edad y naciste el " ,d "/" ,m "/" ,aa " y eres mayor de edad"
	SiNo
		Escribir "Tienes " ,edad " a�os de edad, naciste el " ,d "/" ,m "/" ,aa " y eres menor de edad"
	Fin Si
FinAlgoritmo
