#include <iostream>
#include <conio.h>
#include <Windows.h>

void gotoxy(int xp, int yp)
{
    HANDLE hcon = GetStdHandle(STD_OUTPUT_HANDLE);
    COORD dwPos;
    dwPos.X = xp;
    dwPos.Y = yp;
    SetConsoleCursorPosition(hcon, dwPos);
}

void espiral(int x, int y)
{
    x; // el punto inicial
    y; // el punto final
    int punto = 0; // El camino que avanzara

    // En 
    
    for (punto = 0; punto < y; punto++)
    {
        if (true)
        {
            gotoxy(x,punto); std::cout << "*";
        }
        else
        {   
            gotoxy(punto,y); std::cout << "*";
        }
        
    }
    
    /*

    // Base
    gotoxy(0, 0); std::cout << "a"; 
    Sleep(100);

    // Horizontal
    gotoxy(2, 0); std::cout << "b"; 
    Sleep(100);
    gotoxy(4, 0); std::cout << "c"; 
    Sleep(100);
    gotoxy(6, 0); std::cout << "d"; 
    Sleep(100);
    
    // Vertical 
    gotoxy(0, 1); std::cout << "b"; 
    Sleep(100);
    gotoxy(0, 2); std::cout << "c"; 
    Sleep(100);
    gotoxy(0, 3); std::cout << "d"; 
    Sleep(100);
    
    for ( x; x < y; x++)
    {
        gotoxy(x, y); std::cout << "a";
        
        Sleep(100);
    }
    */

   /*
    for (i = 2; i < 60; i = i + 2)
    {
        gotoxy(i, 29);
        std::cout << "*";
        Sleep(100);
    }
   */
}

int main()
{
    system("mode con: cols=60 lines=31");

    espiral(10,5);

    gotoxy(0, 30);system("pause");
}