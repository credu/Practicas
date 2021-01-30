Algoritmo Game
	nIntentos<-0
	default<-Verdadero
	Escribir "¿Quieres jugar a adivinar el numero?"
	Leer respuesta
	Si respuesta <> "no" Entonces
		gameOver=Verdadero
		Mientras gameOver Hacer
			Escribir "Tienes tres intentos."
			Mientras default Hacer
				nAleatorio=azar(20)
				Escribir "Adivina el numero"
				Mientras nIntentos<3 Hacer
					nIntentos=nIntentos+1
					Si nIntentos=3 Entonces
						win=falso
						default=Falso
						nIntentos=4
					Fin Si
					Leer nUsuario
					Si nUsuario<nAleatorio Entonces
						Escribir "El numero elegido es mayor al numero que intentas adivinar."
					Fin Si
					Si nUsuario>nAleatorio Entonces
						Escribir "El numero elegido es menor al numero que intentas adivinar."
					Fin Si
					Si nUsuario=nAleatorio Entonces
						win<-Verdadero
						default=Falso
						nIntentos=0
					Fin Si
				Fin Mientras
			Fin Mientras
			Si win Entonces
				Escribir"Felicidades has ganado el juego"
			SiNo
				Escribir "Has superado tus tres intentos, suerte la proxima ves"
				Escribir "El numero que intentabas adivinar es ",nAleatorio
			Fin Si
			Escribir "¿Quieres volver a jugar?"
			leer respuestaFinal
			Si respuestaFinal<>"no" Entonces 
				gameOver=Verdadero 
				default=Verdadero
				vida=3
				nIntentos=0
				Limpiar Pantalla
			Sino gameOver = Falso
			Finsi
		FinMientras
	FinSi
FinAlgoritmo
