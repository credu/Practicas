#include <iostream>
#include <conio.h>
#include <stdlib.h>
#include <ctime>

static void clear() { system("cls"); }

using namespace std;

static void paused()
{
    cout << "Presione cualquier tecla para continuar";
    getch();
}

int main()
{
    srand(time(NULL));
    int intentos = 0;
    int num = 0;
    int numeroAleatorio;
    bool win = false;
    bool end = false;
    string respuesta;
    string respuesta2;
    printf("%cQuieres intentar adivinar un numero generado por la computadora?\n", 168);
    cout << "> ";
    cin >> respuesta;
    if (respuesta != "no")
    {
        numeroAleatorio = rand() % 100;
        cout << numeroAleatorio << "\n";
        cout << "Tienes 3 intentos\n";
        cout << "Adivina el numero\n";
        do
        {
            cout << "> ";
            //cin >> num;
            scanf("%d", &num);
            intentos++;

            if (num > numeroAleatorio)
            {
                cout << "El numero que ingresaste es mayor al numero que intentas adivinar.\n";
            }
            else if (num < numeroAleatorio)
            {
                cout << "El numero que ingresaste es menor al numero que intentas adivinar.\n";
            }
            else if (num == numeroAleatorio)
            {
                cout << "Felicidades has ganado el juego\n";
                win = true;
            }

            if (intentos == 3 && win == false)
            {
                cout << "Has perdido, se acabaron tus tres intentos\n";
                cout << "El numero que intentabas adivinar es el " << numeroAleatorio << "\n";
                printf("%cQuieres volver a jugar?\n", 168);
                cout << "> ";
                cin >> respuesta2;
                srand(time(NULL));
                numeroAleatorio = rand() % 100;
                if (respuesta2 != "no")
                {
                    clear();
                    printf("%cQuieres intentar adivinar un numero generado por la computadora?\n", 168);
                    cout << "> " + respuesta + "\n";
                    cout << numeroAleatorio << "\n";
                    cout << "Tienes 3 intentos\n";
                    cout << "Adivina el numero\n";
                }
                else
                {
                    end = true;
                }
                intentos = 0;
            }
            else if (win == true)
            {
                printf("%cQuieres volver a jugar?\n", 168);
                cout << "> ";
                cin >> respuesta2;
                srand(time(NULL));
                numeroAleatorio = rand() % 100;
                if (respuesta2 != "no")
                {
                    clear();
                    printf("%cQuieres intentar adivinar un numero generado por la computadora?\n", 168);
                    cout << "> " + respuesta + "\n";
                    cout << numeroAleatorio << "\n";
                    cout << "Tienes 3 intentos\n";
                    cout << "Adivina el numero\n";
                }
                else
                {
                    end = true;
                }
                intentos = 0;
                win = false;
            }
        } while (end == false);
    }
    cout << "Fin de la ejecucion\n";
    paused();
}