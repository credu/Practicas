#include <iostream>
#include "stdio.h"
#include <conio.h>

int n, i;


main ()
{
	printf ("Ingrese un número:");
	scanf ("%d",&n);
	i=0;
    do
    {
        (i=i+1);
        //std::cout << i << " * " << n << " = " << i * n << "\n";
        printf("%d * %d = %d \n",i ,n ,i*n);
    }while (i<12);
    getch();
}