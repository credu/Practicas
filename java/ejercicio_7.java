import javax.swing.JOptionPane;

public class ejercicio_7 {
    public static void main(String[] args) {

        int array[] = new int[3]; // Se crea y da espacio de 3 a un array

        for (int i = 0; i < array.length; i++) { // se ingresan numeros dependiendo del espacio del array
            array[i] = Integer.parseInt(JOptionPane.showInputDialog("Ingrese numero " + (i + 1) + ": "));
        }

        int mayor, intermedio, menor;
        mayor = intermedio = menor = array[0];
        
        for (int i = 0; i < array.length; i++) {
            if (array[i] > mayor) {
                mayor = array[i];
            }
            if (array[i] < menor) {
                menor = array[i];
            }
        }
        for (int i = 0; i < array.length; i++) {
            if (array[i] < mayor && array[i] > menor) {
                intermedio = array[i];
            }
        }

        JOptionPane.showMessageDialog(null, "El numero mayor es: " + mayor);
        JOptionPane.showMessageDialog(null, "El numero intermedio es: " + intermedio);
        JOptionPane.showMessageDialog(null, "El numero menor es: " + menor);
    }
}