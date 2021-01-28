using System;

namespace Usocoches
{
    class Program
    {
        static void Main(string[] args)
        {
            Coche coche1 = new Coche(); //Instancia
            Console.WriteLine("Coche 1:");
            Console.WriteLine(coche1.getInfoCoche());
            
            Console.WriteLine("");

            Coche coche2 = new Coche(1, 1); //Instancia 2
            Console.WriteLine("Coche 2:");
            Console.WriteLine(coche2.getInfoCoche());
            coche2.setoptionals(true, "Blanco");
            Console.WriteLine(coche2.getExtras());
        }
    }
    class Coche
    {
        public Coche()
        {
            ruedas = 4;
            largo = 2300.5;
            ancho = 0.800;
        }
        public Coche(double largoCoche, double anchoCoche)
        {
            ruedas = 4;
            largo = largoCoche;
            ancho = anchoCoche;
        }
        public String getInfoCoche()
        {
            return $"Informacion del coche:\nRuedas:{ruedas} Ancho:{ancho} Largo:{largo}";
        }
        public void setoptionals(bool paramClimatizador, String paramTapiceria)
        {
            climatizador = paramClimatizador;
            tapiceria = paramTapiceria;
        }
        public String getExtras()
        {
            return $"Extras del coche:\nClimatizador: {climatizador}\nTapiceria: {tapiceria}";
        }
        private int ruedas;
        private double ancho;
        private double largo;
        private bool climatizador;
        private String tapiceria;
    }
}
