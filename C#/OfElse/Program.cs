using System;

namespace IfElse
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("¿Cuantos años tienes?");
            int edad = int.Parse(Console.ReadLine());
            if (edad >= 18) Console.WriteLine("Eres mayor de edad");
            else Console.WriteLine("Eres menor de edad");
        }
    }
}
