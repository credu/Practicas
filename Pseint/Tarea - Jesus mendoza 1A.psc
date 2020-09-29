Algoritmo MultiplicacionMientras
	// Inicio del programa
	
	Hacer // Ciclo do while
		
		Escribir "Tarea de Programacion"
		Escribir "Escriba la funcion que desea visualizar:"
		Escribir "[1] Numeros factoriales   [2] Tabla de multiplicacion generica"
		leer opcion1
		
		Limpiar Pantalla
		
		Escribir "*** Ejecución Iniciada. ***"
		
		Segun opcion1 Hacer
			1:
				over=Falso // Variable que finaliza la opcion 1 del programa
				
				Escribir "Tarea de Programacion: Numeros factoriales"
				
				Escribir "Ingrese un numero"
				leer n1
				
				si (n1<0) // los numeros factorales no pueden ser negativos
					Hacer
						Escribir "El numero es invalido, los numeros factorales no pueden ser negativos."
						
						Esperar Tecla
						
						Limpiar Pantalla
						
						Escribir "*** Ejecución Iniciada. ***"
						
						Escribir "Tarea de Programacion: Numeros factoriales"
						
						Escribir "Ingrese un numero"
						leer n1
						
					Hasta Que (n1>=0)
				FinSi
				
				Hacer
					estructura=0
					return=Verdadero
					
					Escribir "********************    Menu de opciones   ********************"
					Escribir "[1] While           [2] For           [3] Do while"
					Escribir "[4] Cambiar de numero                 [5] Salir del programa"
					Escribir "[6] Volver al principio."
					Escribir "****************************************************************"
					
					leer opcion2
					
					x = 1
					factorial = 1
					
					Segun opcion2 hacer
						1:
						// Usando el ciclo while
						Escribir "Ciclo while"
						Mientras x<=n1 Hacer
							factorial = factorial * x
							x = x + 1
						FinMientras
						escribir "el factorial es: ",factorial
						estructura<-1
						//----------------------------
						
						2:
						// Usando el ciclo for
						Escribir "Ciclo for"
						Para x<-1 Hasta n1 Con Paso 1 Hacer
							factorial = factorial * x
						FinPara
						Escribir "El factorial es:" factorial
						estructura<-2
						//----------------------------
						
						3:
						// Usando el ciclo do while
						x=0
						Escribir "Ciclo do while"	
						Repetir 
							x = x + 1
							factorial = factorial * x
						Hasta que n1 <= x
						Escribir "El factorial es: ",factorial
						estructura<-3
						//----------------------------
						
						4:
							Limpiar Pantalla
							Escribir "*** Ejecución Iniciada. ***"
							
							Escribir "Tarea de Programacion: Numeros factoriales"
							
							Escribir "Ingrese un numero"
							leer n1
							
							si (n1<0)
								Hacer
									Escribir "El numero es invalido, los numeros factorales no pueden ser negativos."
									
									Esperar Tecla
									
									Limpiar Pantalla
									
									Escribir "*** Ejecución Iniciada. ***"
									
									Escribir "Tarea de Programacion: Numeros factoriales"
									
									Escribir "Ingrese un numero"
									leer n1
									
								Hasta Que (n1>=0)
							FinSi
							
							pause<-Falso
							Limpiar Pantalla
						
						5:
							return<-Falso
							pause<-Falso
							over<-Verdadero
							finish=Verdadero
						
						6:
							pause=Falso
							over = Verdadero
							return = Falso
							Limpiar Pantalla
							Escribir "*** Ejecución Iniciada. ***"
						
						De Otro Modo:
							Escribir "El numero ingresado es invalido, porfavor escriba una opcion valida."
							pause=Verdadero
						
					FinSegun
					
					Si (estructura==1) o (estructura==2) o (estructura==3) Entonces
						pause = Falso
						Escribir "[1] Mostrar codigo   [2] Continuar    Opcion:" Sin Saltar
						leer opcion3
						Limpiar Pantalla
						pause = Verdadero
						si opcion3<>1
							pause<-Falso
							Borrar Pantalla
						SiNo
							Segun estructura hacer
								
								1:
									Escribir "Escribir ``Ciclo while``"
									Escribir "Para x<-1 Hasta n1 Con Paso 1 Hacer"
									Escribir "     factorial = factorial * x"
									Escribir "FinPara"
									Escribir "Escribir ``El factorial es :``,factorial"
								
								2:
									Escribir "Repetir"
									Escribir "     x = x + 1"
									Escribir "     factorial = factorial * x"
									Escribir "Hasta que n1 <= x"
									Escribir "Escribir ``El factorial es :``,factorial"
								
								3:
									Escribir "Mientras x<=n1 Hacer"
									Escribir "     factorial = factorial * x"
									Escribir "     x = x + 1"
									Escribir "FinMientras"
									Escribir "Escribir ``El factorial es :``,factorial"
								
							FinSegun
						FinSi
					FinSi
					
					Si pause=Verdadero Entonces
						
						Escribir 'Presione cualquier tecla para continuar'
						Esperar Tecla
						Borrar Pantalla
						
					FinSi
					
					si return=verdadero entonces
						
						Escribir "*** Ejecución Iniciada. ***"
						Escribir "Tarea de Programacion: Numeros factoriales"
						Escribir "Ingrese un numero"
						Escribir '> ',n1
						
					Finsi
				
				Hasta Que over==Verdadero
			
			2:
				over=Falso // Variable que finaliza la opcion 2 del programa
				
				Escribir "Tarea de Programacion: Tabla de multiplicacion Generica"
				
				Escribir "Escribe el multiplicador de la tabla de multiplicar que desees"
				Leer n
				
				Escribir "Escribe hasta que numero debe llegar la tabla de multiplicar"
				leer rango
				
				Limpiar Pantalla
				
				Hacer
					pause <- Verdadero
					
					Escribir "*** Ejecución Iniciada. ***"
					
					Escribir "Tarea de Programacion: Tabla de multiplicacion Generica"
					Escribir "********************    Menu de opciones   ********************"
					Escribir "[1] While           [2] For           [3] Do while"
					Escribir "[4] Cambiar el rango y multiplicador  [5] Salir del programa"
					Escribir "[6] Volver al principio."
					Escribir "****************************************************************"
					
					leer opcion2
					
					i<-0
					
					Segun opcion2 Hacer
						1:
						// Usando el ciclo While
						Escribir "Ciclo while"
						Mientras i<rango Hacer
							i = i + 1
							Escribir n " x ",i " = ",i*n
						Fin Mientras
						estructura<-1
						//----------------------------
						
						2:
						// Usando el ciclo for
						Escribir "Ciclo for"
						Para i<-1 Hasta rango Con Paso 1 Hacer
							Escribir n " x ",i " = ",i*n
						Fin Para
						i=rango
						estructura<-2
						//----------------------------
						
						3:
						// Usando el ciclo do While
						Escribir "Ciclo do while"
						Repetir
							i = i + 1
							Escribir n " x ",i " = ",i*n
						Hasta Que i=rango
						estructura<-3
						//----------------------------
						
						4:
							Limpiar Pantalla
							Escribir "*** Ejecución Iniciada. ***"
							
							Escribir "Tarea de Programacion : Tabla de multiplicacion Generica"
							Escribir "Escribe el multiplicador de la tabla de multiplicar que desees"
							Leer n
							
							Escribir "Escribe hasta que numero debe llegar la tabla de multiplicar"
							leer rango
							pause<-Falso
							Limpiar Pantalla
						5:
							pause<-Falso
							over<-Verdadero
							finish=Verdadero
						6:
							pause=Falso
							over = Verdadero
							Limpiar Pantalla
							Escribir "*** Ejecución Iniciada. ***"
						De Otro Modo:
							Escribir "El numero que fue ingresado es invalido, porfavor escriba una opcion valida."
					Fin Segun
					
					Si (i = rango) Entonces
						pause = Falso
						Escribir "[1] Mostrar codigo   [2] Continuar    Opcion:" Sin Saltar
						leer opcion3
						Limpiar Pantalla
						pause = Verdadero
						si opcion3!=1
							pause<-Falso
							Borrar Pantalla
						SiNo
							Segun estructura hacer
								1:
									Escribir "Ciclo while"
									Escribir "Mientras i<rango Hacer"
									Escribir "     i = i + 1"
									Escribir "     Escribir n `` x ``,i `` = ``,i*n "
									Escribir "Fin Mientras"
								2:
									Escribir "Ciclo For"
									Escribir "Para i<-1 Hasta rango Con Paso 1 Hacer"
									Escribir "     Escribir n `` x ``,i `` = ``,i*n"
									Escribir "Fin Para"
								3:
									Escribir "Ciclo do while"
									Escribir "Repetir"
									Escribir "     i = i + 1"
									Escribir "     Escribir n `` x ``,i `` = ``,i*n"
									Escribir "Hasta Que i=rango"
							FinSegun
						FinSi
					FinSi
					
					Si pause=Verdadero Entonces
						Escribir 'Presione cualquier tecla para continuar'
						Esperar Tecla
						Borrar Pantalla
					FinSi
					
				Hasta que over==verdadero
			
			De Otro Modo:
				Escribir "Porfavor escriba 1 o 2"
		Fin Segun
	Hasta Que finish=Verdadero
	
	Escribir "Fin de la ejecucion"
FinAlgoritmo