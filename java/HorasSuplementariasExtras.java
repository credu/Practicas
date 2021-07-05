import java.util.Scanner;
import java.math.*;

/**
 * HorasSuplementarias
 */
public class HorasSuplementariasExtras {
    public static void main(String[] args) {
        clearScreen();

        Scanner input = new Scanner(System.in);
        int hora1, hora2, HorasTrabajadas, HorasExtras, HorasTrabajadasMes;
        double SueldoMensual, ValorHoraOrdinaria, ValorPorHoraExtra, ValorTotalHorasExtras;

        System.out.println("Ingresa el sueldo que recibe mensualmente el empleado");
        SueldoMensual = input.nextInt();
        System.out.println("Ingresa la hora que inicia a trabajar el empleado");
        hora1 = input.nextInt();
        System.out.println("Ingresa la hora que termina de laborar.");
        hora2 = input.nextInt();
        System.out.println("----------------------------------------");
        HorasTrabajadas = hora2 - hora1;

        if (HorasTrabajadas > 8) {
            HorasExtras = HorasTrabajadas - 8;
            HorasTrabajadas = 8;
        }
        else {
            HorasExtras = 0;
        }

        System.out.println("Sueldo mensual = " + SueldoMensual);
        System.out.println("El empleado laboro " + HorasExtras + " horas adicionales a su hora normal de salida");
        System.out.println("Las " + HorasExtras + " horas extras cumplen el horario entre las 6 de la mañana y 12 de la noche");

        HorasTrabajadasMes = HorasTrabajadas * 30;
        System.out.println("Horas diarias trabajadas * los 30 días del mes = " + HorasTrabajadas + " * 30 = " + HorasTrabajadasMes);

        ValorHoraOrdinaria = SueldoMensual / HorasTrabajadasMes;
        ValorHoraOrdinaria = round(ValorHoraOrdinaria);
        System.out.println(SueldoMensual + "/" + HorasTrabajadasMes + " = " + ValorHoraOrdinaria + " Valor hora ordinaria");

        ValorPorHoraExtra = ValorHoraOrdinaria * 2;
        ValorPorHoraExtra = round(ValorPorHoraExtra);
        System.out.println(ValorHoraOrdinaria + " * 2 = " + ValorPorHoraExtra + " Valor por hora extra");

        ValorTotalHorasExtras = ValorPorHoraExtra * HorasExtras;
        ValorTotalHorasExtras = round(ValorTotalHorasExtras);
        System.out.println(ValorPorHoraExtra + " * " + HorasExtras + " = "+ ValorTotalHorasExtras +" Valor total por las horas extras trabajadas");

        // System.out.println("");
        // System.out.println("");
        // System.out.println("");
        // System.out.println("");
        // System.out.println("");
        // System.out.println("");
        // System.out.println("");
        // System.out.println("");
        // System.out.println("");
        input.close();
    }

    public static double round(double number) {
        BigDecimal bd = new BigDecimal(number).setScale(2, RoundingMode.HALF_UP);
        return number = bd.doubleValue();
    }

    public static void clearScreen() {
        System.out.print("\033[H\033[2J");
        System.out.flush();
    }

}