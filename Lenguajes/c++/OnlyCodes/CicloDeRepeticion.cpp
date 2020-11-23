#include <iostream>
#include <conio.h>

using namespace std;

main()
{
    int n;
    int i;

    cout << "Ingrese un numero\n";
    cout << "> ";
    cin >> n;
    i = 0;
    do
    {
        i = i + 1;
        cout << i << " * " << n << " = " << i * n << "\n";
    } while (i < 12);

    cout << "Fin de la ejecucion";
    getch();
}