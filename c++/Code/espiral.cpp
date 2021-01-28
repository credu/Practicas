#include <iostream>
#include <conio.h>
#include <Windows.h>

void gotoxy(int x, int y)
{
    HANDLE hcon = GetStdHandle(STD_OUTPUT_HANDLE);
    COORD dwPos;
    dwPos.X = x;
    dwPos.Y = y;
    SetConsoleCursorPosition(hcon, dwPos);
}

int main()
{
    system("mode con: cols=60 lines=31");
    int i;

    for (i = 0; i < 30; i++)
    {
        gotoxy(0, i);
        std::cout << "*";
        Sleep(100);
    }
    for (i = 2; i < 60; i = i + 2)
    {
        gotoxy(i, 29);
        std::cout << "*";
        Sleep(100);
    }
    gotoxy(0, 30);
    system("cls");
    system("pause");
}