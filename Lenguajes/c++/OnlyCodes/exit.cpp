#include <iostream>

static void pause() 
{
    std::cout << "Presione cualquier tecla para continuar\n";
    std::cin.get();
}

main()
{
    pause();
}