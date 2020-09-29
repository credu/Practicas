Algoritmo Salario_Tia
	// Formulario
	Escribir "¿Quien es el empleado?"
	Leer e
	Escribir "¿Cuantas horas trabajo en la semana " ,e "?"
	Leer h
	Escribir "¿Cuanto es el valor de su trabajo por hora?"
	Leer hv
	Escribir "¿Cuanto es el valor de las horas extras?"
	leer hvextra
	// Variables
	v <- h * hv
	extra <- h-40
	vex <- extra * hvextra
	Si h >= 40 Entonces
		v = 40
	Fin Si
	vt <- v + vex
	//datos
	empleado <- e
	// Conclusion
	Escribir "El empleado " ,empleado "."
	Si h > 40 Entonces
		Si h = 1
			Escribir "Trabajo " ,h " hora esta semana."
		SiNo
			Escribir "Trabajo " ,h " horas esta semana."
		Fin Si
		Si extra = 1
			Escribir "El empleado ",empleado " trabajo ",extra " hora extra"
		SiNo
			Escribir "El empleado ",empleado " trabajo ",extra " horas extras"
		Fin Si
		Escribir "Se le pagara ",v " dolares, mas ",vex " dolares por sus horas extras"
		Escribir "En total se le pagara a " ,empleado " ",vt " dolares"
	SiNo
		Si h = 1
			Escribir "Trabajo " ,h " hora esta semana."
		SiNo
			Escribir "Trabajo " ,h " horas en esta semana."
		Fin Si
		Escribir "Se le pagara ",v " dolares por sus ",h " horas trabajadas esta semana"
	Fin Si
FinAlgoritmo