Algoritmo GameOfCarts
	Escribir"¿Deseas jugar?"
	leer respuesta
	Si respuesta<>"no" Entonces
		Mientras respuesta<>"no" Hacer
			Escribir "Tu carta es: "
			nAleatorio=azar(10)+1
			Escribir nAleatorio
			nAleatorio2=azar(10)+1
			Escribir "La siguiente carta ¿Es mayor o menor?"
			Leer eleccion
			Si eleccion= "menor" y nAleatorio>nAleatorio2 o eleccion= "mayor" y nAleatorio<nAleatorio Entonces
				Escribir "Incorrecto"
			SiNo
				respuesta="no"
			Fin Si
			//Si eleccion="menor" y nAleatorio<nAleatorio2 Entonces Escribir "Incorrecto"
			//FinSi
			//Si eleccion="mayor" y nAleatorio>nAleatorio2 Entonces Escribir "Incorrecto"
			//Fin Si
			//Si eleccion="menor" y nAleatorio<nAleatorio2 Entonces respuesta="no"
			//FinSi
			//Si eleccion="mayor" y nAleatorio<nAleatorio2 Entonces respuesta="no"
			//Fin Si
			Escribir "El numero aleatorio era: ",nAleatorio2
		Fin Mientras
		Escribir "EL ciclo termino hoy "
	FinSi
FinAlgoritmo
