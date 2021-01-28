using System;

namespace Constructores
{
    class Program
    {
        static void Main(string[] args)
        {
            Persona Jesus = new Persona();
            Console.WriteLine("Hello World!");
        }
    }

    class Persona
    {
        int edad;
        double altura;
        double peso;
        string genero;
    }
}
