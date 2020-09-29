Algoritmo sin_titulo
	finish <- falso
	Escribir 'Escriba un numero'
	Leer n1
	Escribir 'Menu de opciones'
	Escribir '[1]Verificar si es par'
	Escribir '[2]Comprobar si es primo'
	Escribir '[3]Mostrar su numero siguiente'
	Escribir '[4]Mostrar su numero anterior'
	Escribir '[5]Salir'
	Escribir '¿Que opcion escogiste?'
	Leer eleccion
	Segun eleccion  Hacer
		1:
			Si n1 MOD 2=0 Entonces
				Escribir 'Es un numero par'
			SiNo
				Escribir 'No es un numero par'
			FinSi
		2:
			x <- 1
			cont <- 0
			Mientras x<=n1 Hacer
				Si n1 MOD x==0 Entonces
					cont <- cont+1
				FinSi
				x <- x+1
			FinMientras
			Si cont==2 Entonces
				Escribir 'El numero ',n1,' es primo.'
			SiNo
				Escribir 'El numero ',n1,' no es primo.'
			FinSi
		3:
			Escribir 'El numero anterior es ',n1+1
		4:
			Escribir 'El numero anterior es ',n1-1
		5:
			finish <- Verdadero
		De Otro Modo:
			Escribir "El numero es invalido, porfavor escriba un numero valido del 1 al 5"
	FinSegun
FinAlgoritmo
