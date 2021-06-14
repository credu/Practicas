
/**
 * clearScreen
 */
public class clearScreen {
    public static void main(String[] args) {
        clear();
    }

    public static void clear() {
        System.out.print("\033[H\033[2J");
        System.out.flush();
    }
}