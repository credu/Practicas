using System;

namespace PrimeraAplicacion
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Escriba el valor uno");
            int n1 = int.Parse(Console.ReadLine());
            Console.WriteLine("Escriba el valor 2");
            int n2 = int.Parse(Console.ReadLine());
            Console.WriteLine($"La suma del numero uno con el numero dos es {n1 + n2}.");
        }
    }
}
