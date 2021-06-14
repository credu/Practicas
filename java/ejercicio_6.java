import javax.swing.JOptionPane;
import java.io.UnsupportedEncodingException;

public class ejercicio_6 {
    public static void main(String[] args) {
        String product, str = null;
        int value, amount, age;
        double total;
        str = "ñ";

        try {
            str = new String(str.getBytes(),"UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }

        JOptionPane.showMessageDialog(null, "Ingreso de productos.");
        
        product = JOptionPane.showInputDialog("Cajera: ¿Qué producto compraras?");
        value = Integer.parseInt(JOptionPane.showInputDialog("Cajera: ¿Cuántas unidades de " + product + " comprara?"));
        amount = Integer.parseInt(JOptionPane.showInputDialog("Cajera: ¿Cuánto cuesta cada unidad de " + product + "?"));
        age = Integer.parseInt(JOptionPane.showInputDialog("Cajera: ¿Cuántos a" + str + "os tienes?"));

        total = value * amount;
        
        if (age>=65) {
            total = total * 0.10;
            JOptionPane.showMessageDialog(null, "Cajera: El total a pagar de " + product + " es " + total + " dolares, incluido el descuento del 10% por tercera edad.");
        }
        else {
            JOptionPane.showMessageDialog(null, "Cajera: El total a pagar de " + product + " es " + total + " dolares.");
        }
    }
}
