using System;
using System.Diagnostics;

namespace EjemplosPOO
{
    class Program
    {
        static void Main(string[] args)
        {
            int calculoDeseado;
            int radio;
            int n1;
            int n2;
            Console.WriteLine("Bienvenido");
            Console.WriteLine("Ingrese el numero del calculo deseado");
            Console.WriteLine("[1]Operaciones matematicas simples   [2]Formas geometricas");
            Console.WriteLine("[3]Unknown                           [4]Unknown");
            calculoDeseado = int.Parse(Console.ReadLine());
            Console.Clear();
            switch (calculoDeseado)
            {
                case (1):
                    Console.WriteLine("Estas en el modo de operaciones matematicas simples");
                    Console.WriteLine("[1]Sumar         [2]Restar");
                    Console.WriteLine("[2]Multiplicar   [4]Dividir");
                    calculoDeseado = int.Parse(Console.ReadLine());
                    if (calculoDeseado == 1)
                    {
                        Console.WriteLine("Ingrese n1");
                        n1 = int.Parse(Console.ReadLine());
                        Console.WriteLine("Ingrese n1");
                        n2 = int.Parse(Console.ReadLine());
                        Console.WriteLine(n1+n2);
                    }
                    break;
                case (2):
                    Console.WriteLine("[1]Cuadrado   [2]Rectangulo");
                    Console.WriteLine("[3]Circulo    [4]Triangulo");

                    calculoDeseado = int.Parse(Console.ReadLine());
                    if (calculoDeseado == 3)
                    {
                        Console.WriteLine("Ingrese el numero del radio del circulo.");
                        radio = int.Parse(Console.ReadLine());
                        Circulo Circulo = new Circulo();
                        Console.WriteLine("El radio es: " + Circulo.CalculoArea(radio));
                        Console.WriteLine("El perimetro del circulo es: " + Circulo.Perimetro(radio));
                    }
                    break;
                case (3):
                    Console.WriteLine("a");
                    break;
                case (4):
                    Console.WriteLine("a");
                    break;
                default:
                    Console.WriteLine("El numero introducido es incorrecto");
                    break;
            }
        }
    }

    class Circulo
    {
        private const double pi = 3.1416;

        public double CalculoArea(int radio)
        {
            return pi * radio * radio;
        }
        public double Perimetro(int radio)
        {
            return 2 * pi * radio;
        }
    }
}
