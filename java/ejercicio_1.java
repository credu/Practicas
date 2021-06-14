import java.util.Scanner;
import java.util.regex.*;

public class ejercicio_1 {
    public static void main(String[] args) {
        clearScreen();
        Scanner input = new Scanner(System.in);
        String age = "", 
        nombre = "", 
        year = "2021";

        System.out.println("Hola que tal como les va.......");
        System.out.println("Ingrese su nombre: ");
        nombre = getdata(input, "string");

        System.out.println("Ingrese su edad: ");
        age = getdata(input, "entero");

        int nacimiento = Integer.parseInt(year) - Integer.parseInt(age);

        System.out.println("Tienes "+ age + " años de edad.");
        System.out.println("Tu año de nacimiento es en el año " + nacimiento);
        
        nombre = upperCaseFirst(nombre);

        if (Integer.parseInt(age) > 17) {
            System.out.println("Te llamas " + nombre + " y eres mayor de edad.");
        } else {
            System.out.println("Te llamas " + nombre + " y eres menor de edad.");
        }
        
    }

    public static String getdata(Scanner input, String type) {
        if (type == "entero") {
            return Integer.toString(input.nextInt());
        }
        else if (type == "string") {
            return input.nextLine();
        }
        else {
            return "";
        }
    }

    public static String upperCaseFirst(String str) {
        StringBuffer strbf = new StringBuffer();
        Matcher match = Pattern.compile("([a-z])([a-z]*)", Pattern.CASE_INSENSITIVE).matcher(str);
        while(match.find()) 
        {
            match.appendReplacement(strbf, match.group(1).toUpperCase() + match.group(2).toLowerCase());
        }
        return match.appendTail(strbf).toString();
    }

    public static void clearScreen() {
        System.out.print("\033[H\033[2J");
        System.out.flush();
    }
}
