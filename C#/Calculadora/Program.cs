using System;

namespace Calculadora
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Ecribe dos numeros en las lineas que desee calcular");
            int n1 = int.Parse(Console.ReadLine());
            int n2 = int.Parse(Console.ReadLine());
            Console.WriteLine("Escriba el numero del calculo que desee");
            Console.WriteLine("[0]Todas las funciones disponibles");
            Console.WriteLine("[1]Sumar         [2]Restar");
            Console.WriteLine("[2]Multiplicar   [4]Dividir");
            int elec = int.Parse(Console.ReadLine());
            if (elec == 0){
                Console.WriteLine($"La suma de los 2 numeros es: {suma(n1, n2)}");
                Console.WriteLine($"La resta de los dos numeros es: {resta(n1, n2)}");
                Console.WriteLine($"La multiplicacion de los dos numeros es: {multiplicacion(n1, n2)}");
                Console.WriteLine($"La division de los dos numeros es: {division(n1, n2)}");
            }
            else if (elec == 1){
                Console.WriteLine($"La suma de los 2 numeros es: {suma(n1, n2)}");
            }
            else if (elec == 2){
                Console.WriteLine($"La resta de los dos numeros es: {resta(n1, n2)}");
            }
            else if (elec == 3){
                Console.WriteLine($"La multiplicacion de los dos numeros es: {multiplicacion(n1, n2)}");
            }
            else if (elec == 4){
                Console.WriteLine($"La division de los dos numeros es: {division(n1, n2)}");
            }
            else{
                Console.WriteLine("El numero introducido no es valido.");
            }
        }
        static int suma(int n1, int n2) => (n1 + n2);
        static int resta(int n1, int n2) => (n1 - n2);
        static int multiplicacion(int n1, int n2) => (n1 * n2);
        static double division(double n1, int n2) => (n1 / n2);
    }
}
