#include <iostream>
#include <conio.h>

bool finish = true;

static void clear() {
    system("cls");
}

static void pause(int n1, int n2) {
    std::cout << "Presione cualquier tecla para continuar";
    getch();
    clear();
    std::cout << "Ingresar n1\n";
    std::cout << n1 <<"\n";
    std::cout << "Ingresar n2\n";
    std::cout << n2 <<"\n";
}

int main() {
    //Nota para detener el codigo puedo usar tanto std::cin.get(); como getch();
    //Nota para escribir en pantalla se puede usar cout y printf
    //Nota para el ingreso de datos se puede usar cin (cin tiene una mejora getline) y scanf
    //Tanto el printf y el scanf son mas primitivos pues fueron ideados para C
    //Pero c++ acepta estas estructuras
    int n1;
    int n2;
    int select;

    std::cout << "Ingresar n1\n";
    std::cin >> n1;
    std::cout << "Ingresar n2\n";
    std::cin >> n2;

    do
    {
        bool paused = true;

        std::cout << "Funcion que quieras usar.\n";
        std::cout << "[1]Suma              [2]Resta\n";
        std::cout << "[3]Multiplicacion    [4]Division\n";
        std::cout << "[5]Salir             [6]Cambiar de numeros\n";

        std::cin >> select;

        if (select==1)
        {
            std::cout << "La suma es: " << n1+n2 << "\n";
        }
        else if (select==2)
        {
            std::cout << "La resta es: " << n1-n2 << "\n";
        }
        else if (select==3)
        {
            std::cout << "La multiplicacion es: " << n1*n2 << "\n";
        }
        else if (select==4)
        {
            std::cout << "La division es: " << n1/n2 << "\n";
        }
        else if (select==5)
        {
            paused=false;
            finish=false;
        }
        else if (select==6)
        {
            clear();
            paused=false;
            std::cout << "Ingresar n1\n";
            std::cin >> n1;
            std::cout << "Ingresar n2\n";
            std::cin >> n2;
        }
        
        if (paused)
        {
            pause(n1, n2);
        }
    } while (finish);
}