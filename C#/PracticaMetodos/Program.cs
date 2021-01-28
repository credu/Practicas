using System;
using System.Net;

namespace PracticaMetodos
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Escribe dos numeros en dos lineas");
            int n1 = int.Parse(Console.ReadLine());
            int n2 = int.Parse(Console.ReadLine());
            SumaDeNumeros(n1, n2);
        }

        static void SumaDeNumeros(int num1, int num2)=> Console.WriteLine($"La suma de los 2 numeros es: {num1+num2}");
    }
}
