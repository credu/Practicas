
import java.util.Scanner;

public class ejercicio_4 {
    public static void main(String[] args) {

        clearScreen();

        Scanner input = new Scanner(System.in);
        int n1 = getNumber(input, 1);
        int n2 = getNumber(input, 2);
        input.close();

        if (n1 < n2) {
            System.out.println("N1 es menor que n2.");
        } else if (n1 > n2) {
            System.out.println("N1 es mayor que n2.");
        } else if (n1 == n2) {
            System.out.println("N1 es igual que n2.");
        }

    }

    public static int getNumber(Scanner input, int number) {
        int n = 9999999;
        while (true) {
            System.out.println("Ingresa n" + number + ":");
            try {
                n = input.nextInt();
                return n;
            } catch (java.util.InputMismatchException e) {
                System.out.println("Error: Introduce un numero valido");
                input.nextLine();
            }
        }
    }

    public static void clearScreen() {
        System.out.print("\033[H\033[2J");
        System.out.flush();
    }
}
