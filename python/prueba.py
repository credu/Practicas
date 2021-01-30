import os
import msvcrt

finish = True
clear = lambda: os.system("cls")

clear()

n1 = int(input("Ingresar n1 \n"))

n2 = int(input("Ingresar n2 \n"))

while(finish):
    pause = True
    print("Funcion que quieras usar.")
    print("[1]Suma              [2]Resta")
    print("[3]Multiplicacion    [4]Division")
    print("[5]Salir             [6]Cambiar de numeros")
    
    eleccion = int(input(""))

    if eleccion==1:
        print("La suma es: " + str(n1+n2))
    elif eleccion==2:
        print("La resta es: " + str(n1-n2))
    elif eleccion==3:
        print("La multiplicacion es: " + str(n1*n2))
    elif eleccion==4:
        print("La division es: " + str(n1/n2))
    elif eleccion==5:
        pause=False
        finish=False
    elif eleccion==6:
        clear()
        pause=False
        n1 = int(input("Ingresar n1 \n"))
        n2 = int(input("Ingresar n2 \n"))
    else:
        print("El numero ingresado es invalido")

    if(pause):
        print("Presione una tecla para continuar...")
        msvcrt.getch()
        clear()
        print("Ingresar n1")
        print(n1)
        print("Ingresar n2")
        print(n2)

print("Fin de la ejecucion")