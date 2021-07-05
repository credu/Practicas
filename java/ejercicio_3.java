import java.util.Scanner;
import java.util.regex.*;

public class ejercicio_3 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String name = "";

        System.out.println("Ingrese su nombre completo");
        name = input.nextLine();
        name = upperCaseFirst(name);

        System.out.println("Te llamas :" + name);
        input.close();
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
