#include <iostream>
#include <conio.h>

int main()
{
    int n1;
    int n2;

    printf("Introduce un numero: ");
    scanf("%i", &n1);

    printf("Introduce un numero: ");
    scanf("%i", &n2);
    
    printf("\nLa suma de los dos numeros es: %i\n", n1+n2);

    std::cin.get();
    
    std::cout << "\nPresione cualquier tecla para continuar";
    std::cin.get();

}