import javax.swing.JOptionPane;

public class ejercicio_5 {
    public static void main(String[] args) {
        int n1=0,
        n2=0;

        n1 = Integer.parseInt(JOptionPane.showInputDialog("Ingrese n1:"));
        n2 = Integer.parseInt(JOptionPane.showInputDialog("Ingrese n2:"));

        JOptionPane.showMessageDialog(null, "La suma de los dos numeros que ingresaste es: " + (n1 + n2));
    }
}