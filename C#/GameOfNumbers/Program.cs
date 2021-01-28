using System;

namespace GameOfNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int numeroElegido;
            bool bucle = true;
            Console.WriteLine("Quieres intentar adivinar un numero. (si / no)");
            string decision = Console.ReadLine();
            while (bucle) {
                if (decision != "no")
                {
                    bool bucleb = true;
                    int intentos = 0;
                    Random numero = new Random();
                    int numeroAleatorio = numero.Next(0, 100);
                    while (bucleb)
                    {
                        Console.WriteLine("Introduzca un numero del 0 al 100.");
                        try 
                        {
                            numeroElegido = int.Parse(Console.ReadLine());
                            intentos++;
                        }
                        catch(FormatException ex){numeroElegido = -1;}
                        catch(OverflowException ex) {numeroElegido = -1;}
                        if (numeroElegido == numeroAleatorio)
                        {
                            Console.WriteLine("Ganaste");
                            bucleb = false;
                        }
                        else if (numeroElegido == -1) Console.WriteLine("El numero que usted escribio no es valido, por favor escriba un numero valido");
                        else if (numeroElegido > 100) Console.WriteLine("El numero que has escrito supera al numero 100");
                        else if (numeroElegido > numeroAleatorio) Console.WriteLine($"El numero que intentas adivinar es menor que {numeroElegido}.");
                        else if (numeroElegido < numeroAleatorio) Console.WriteLine($"El numero que intentas adivinar es mayor que {numeroElegido}.");
                        else Console.WriteLine("Error: El numero elegido sobrepasa el numero 100.");
                    }
                    Console.WriteLine($"Intentaste acertar {intentos} veces.");
                    Console.WriteLine("¿Quieres volver a jugar?");
                    string decisionGameOver = Console.ReadLine();
                    if (decisionGameOver != "no")
                    {
                        decision = "si";
                        Console.Clear();
                    }
                    else
                    {
                        decision = "no";
                        bucle = false;
                    }
                }
                else bucle = false;
            }
        }
    }
}
