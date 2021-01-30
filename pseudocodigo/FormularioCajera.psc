Algoritmo Caja
	// Formulario
	Escribir "Cajera: ¿Qué producto compraras?"
	Leer p
	Escribir "Cajera: ¿Cuántas unidades de " p " usted comprara?"
	leer np
	Escribir "Cajera: ¿Cuanto cuesta cada unidad de " p "?"
	leer cp
	
	// Descuento activo si el numero es mayor o igual que 4.
	Si np >= 4 Entonces
		descuento = Verdadero
	SiNo
		descuento = Falso
	Fin Si
	
	// Variables del descuento.
	dp <- (cp * np) - cp 
	sdp <- cp * np
	
	// Resultado final.
	Si descuento Entonces
		Escribir "Cajera: Al ser 4 o mas unidades, obtienes un descuento en el cual no le cobraremos una unidad."
		Si dp > 1 Entonces
			Escribir "Cajera: Su total a pagar es de " ,dp " dolares."
		SiNo
			Si dp = 1 Entonces
				Escribir "Cajera: Su total a pagar es de " ,dp " dolar."
			SiNo
				Escribir "Cajera: Su total a pagar es de " ,dp " centavos."
			FinSi
		FinSi
	SiNo
		Si sdp > 1 Entonces
			Escribir "Cajera: Su total a pagar es de " ,sdp " dolares."
		SiNo
			Si sdp = 1 Entonces
				Escribir "Cajera: Su total a pagar es de " ,sdp " dolar."
			SiNo
				Escribir "Cajera: Su total a pagar es de " ,sdp " centavos."
			FinSi
		FinSi
	Fin Si
	// Eleccion de pagar
	Escribir "¿Deseas pagar?" " (Si-No)"
	leer respuesta
	
	// Respuesta de la cajera
	Escribir "Cajera: Fue un placer haberlo atendido, vuelva pronto."

FinAlgoritmo
