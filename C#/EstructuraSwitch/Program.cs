using System;

namespace EstructuraSwitch
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Escoge el calculo que desees. Suma, resta, multiplicacion y division");
            string calculo = Console.ReadLine();
            
            switch (calculo) {
                case "suma":
                    Console.WriteLine("suma");
                    break;
                case "resta":
                    Console.WriteLine("resta");
                    break;
                case "multiplicacion":
                    Console.WriteLine("multiplicacion");
                    break;
                default:
                    Console.WriteLine("El calculo elegido no es valido");
                    break;
            }
            Console.WriteLine("Fin de la ejecucion");
        }
    }
}
