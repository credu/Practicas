#include <iostream>
#include <windows.h>

int ventas, adquisicion, compras, devolucion, total, stock=10;
int valor_actual=2, valor_anterior=2;
int opc;

void gotoxy(int x, int y)
{
    HANDLE hcon = GetStdHandle(STD_OUTPUT_HANDLE);
    COORD dwPos;
    dwPos.X = x;
    dwPos.Y = y;
    SetConsoleCursorPosition(hcon, dwPos);
}

main(){
    while (opc!=5)
    {
        system("cls");
        gotoxy(20,4);printf("CONTROL DE MERCADERIA");
        gotoxy(25,6);printf("1. Ventas");
        gotoxy(25,7);printf("2. Adquisicion");
        gotoxy(25,8);printf("3. Devolucion");
        gotoxy(25,9);printf("4. Compras");
        gotoxy(25,10);printf("5. Salir");
        gotoxy(25,12);printf("Elije una opcion 1 - 5 [ ]");
        gotoxy(49,12);scanf("%d",&opc);
        if (opc==1)
        {
            system("cls");
            gotoxy(25,6);printf("Opcion de Ventas");
            gotoxy(25,8);printf("Ingrese la cantidad a vender:");
        }
        if (opc==1)
        {
            system("cls");
            gotoxy(25,6);printf("Opcion de Adquisicion");
        }
    }
    
}