using System;
using System.IO;

namespace EjemploFinally
{
    class Program
    {
        static void Main(string[] args)
        {
            System.IO.StreamReader archivo = null;
            try
            {
                string linea;
                int contador = 0;
                //string path;
                //path = Console.ReadLine();
                string path = @"C:\Users\User\Desktop\ñam.txt";
                archivo = new System.IO.StreamReader(path);
                while ((linea = archivo.ReadLine()) != null)
                {
                    Console.WriteLine(linea);
                    contador++;
                }
            }
            catch(Exception e)
            {
                Console.WriteLine("Error con la lectura del archivo");
            }
            finally
            {
                if (archivo != null) archivo.Close();
                Console.WriteLine("Conexion terminada");
            }
        }
    }
}
