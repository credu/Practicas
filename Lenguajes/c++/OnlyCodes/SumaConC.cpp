#include <iostream>
#include <conio.h>

// cout // escribir
// cin // leer

// printf // escribir
// scanf // leer

static void stop(){
    getch();
}

int main(){
    int n1 = 5;
    int n2 = 15;

    printf("escribe n1\n");
    scanf("%d", &n1);
    printf("escribe n2\n");
    scanf("%d", &n2);

    while (n1!=n2)
    {
        printf("escribe n1\n");
    }
    

    printf("%d\n", n1+n2);
    stop();
}