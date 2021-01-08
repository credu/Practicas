#include <iostream>
#include <windows.h>
#define _USE_MATH_DEFINES

int opc;
double b,h,res;

void gotoxy(int x, int y)
{
    HANDLE hcon = GetStdHandle(STD_OUTPUT_HANDLE);
    COORD dwPos;
    dwPos.X = x;
    dwPos.Y = y;
    SetConsoleCursorPosition(hcon, dwPos);
}

// cuerpo del programa
int main()
{
    opc=0;
    while(opc!=4)
    {
            system("cls");
            gotoxy(24, 5);printf("M E N U    D E   O P C I O N E S");
            gotoxy(24, 6);printf("================================");
            gotoxy(24, 8);printf("1. Calcular Triangulo");
            gotoxy(24, 9);printf("2. Calcular Cuadrado");
            gotoxy(24, 10);printf("3. Calcular Circulo");
            gotoxy(24, 11);printf("4. Salir");
            gotoxy(24, 13);printf("Seleccione una opcion:");
            gotoxy(47, 13);scanf("%d",&opc);
            if(opc>4)
            {
                gotoxy(24, 15);printf("Ingrese una opcion entre [1 - 4]");
            }
            if(opc==1)
            {
                system("cls");
                gotoxy(24, 5);printf("OPCION AREA TRIANGULO");
                gotoxy(24, 7);printf("INGRESE LA BASE:");
                gotoxy(47, 7);scanf("%lf",&b);
                gotoxy(24, 8);printf("INGRESE LA ALTURA");
                gotoxy(47, 8);scanf("%lf",&h);
                res = ((b * h) / 2);
                gotoxy(24, 10);printf("EL AREA ES: %.2f",res);
                gotoxy(24, 12);system("pause");    
            }
    }    
    
}