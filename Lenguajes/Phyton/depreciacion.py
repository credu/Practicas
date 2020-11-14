import os
import msvcrt

finish = True
clear = lambda: os.system("cls")

clear()

while(finish):
    pause = True
    n1 = int(input("¿Cual es el valor original?: > "))

    print("Elige el tipo que quieras usar.")
    print("[1]Equipos de oficina      [2]Muebles y enseres")
    print("[3]Equipos de computacion  [4]Vehiculos")
    print("[5]Edificios               [6]Cuentas maquinarias")
    print("[7]Fin de la ejecucion")
    n2 = int(input("¿Que tipo de activo es?: > "))

    vidaUtil = 0

    if n2==1:
        vidaUtil = 10
    elif n2==2:
        vidaUtil = 10
    elif n2==3:
        vidaUtil = 3
    elif n2==4:
        vidaUtil = 5
    elif n2==5:
        vidaUtil = 20
    elif n2==6:
        vidaUtil = 5
    elif n2==7:
        pause=False
        finish=False
        clear()

    if(pause):
        sucess = n1/vidaUtil
        print("La depreciacion anual es: \n" + str(n1) + "/" + str(vidaUtil) + " = " + str(sucess))
        respuesta = sucess
        sucess = sucess/12
        print("La depreciacion mensual es: \n" + str(respuesta)+" /12 = " + str(sucess))
        respuesta = sucess
        sucess = sucess/30
        print("La depreciacion diaria es: \n" + str(respuesta)+"/30 = " + str(sucess))
        
        print("Presione una tecla para continuar...")
        msvcrt.getch()
        clear()
print("Fin de la ejecucion")