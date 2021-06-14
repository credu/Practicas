import java.util.Scanner;

public class inputTryCatch {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        getNumber(input, 1);
        getNumber(input, 2);
    }

    public static int getNumber(Scanner input, int number) {     
        int n;
        
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
}
