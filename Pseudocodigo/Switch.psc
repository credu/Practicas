Algoritmo Numeros
	Definir i,n1,cont Como Entero
	Escribir 'Escriba un numero'
	Leer n1
	Repetir
		Escribir '********************    Menu Principal    ********************'
		Escribir '[1]Verificar si es par         [2]Comprobar si es primo'
		Escribir '[3]Mostrar su numero siguiente [4]Mostrar su numero anterior'
		Escribir '[5]Salir                       [6]Cambiar numero seleccionado'
		Escribir '**************************************************************'
		Escribir 'Porfavor introduzca una opcion del menu principal.'
		pause <- Verdadero
		Leer eleccion
		Segun eleccion  Hacer
			1:
				Si n1 MOD 2=0 Entonces
					Escribir 'Es un numero par.'
				SiNo
					Escribir 'No es un numero par.'
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
				Escribir 'El numero siguiente de ',n1,' es: ',n1+1
			4:
				Escribir 'El numero anterior de ',n1,' es: ',n1-1
			5:
				pause <- Falso
				Over <- Verdadero
			6:
				Borrar Pantalla
				Escribir '*** Ejecuci�n iniciada. ***'
				Escribir 'Escriba un numero'
				Leer n1
				pause <- Falso
			De Otro Modo:
				Escribir 'El numero introducido no es valido, porfavor escribe un numero del 1 al 5.'
		FinSegun
		Si pause=Verdadero Entonces
			Escribir 'Presione cualquier tecla para continuar'
			Esperar Tecla
			Borrar Pantalla
			Escribir '*** Ejecuci�n iniciada. ***'
			Escribir 'Escriba un numero'
			Escribir '> ',n1
		FinSi
	Hasta Que Over
	Escribir 'Fin de la ejecucion'
FinAlgoritmo
