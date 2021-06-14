import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;
import javax.swing.JOptionPane;

public class test {
    public static void main(String[] args) {
        String input = null;
        input = "ñ";
        String intento1 = null, intento2 = null, intento3 = null;
        try {
            intento1 = new String(input.getBytes("ISO-8859-1"),"UTF-8");
            intento2 = new String(input.getBytes(Charset.forName("UTF-8")), Charset.forName("Windows-1252"));
            intento3 = new String(input.getBytes(),"UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        System.out.println(intento1);
        System.out.println(intento2); 
        System.out.println(intento3);
        JOptionPane.showMessageDialog(null, intento1);
        JOptionPane.showMessageDialog(null, intento2);
        JOptionPane.showMessageDialog(null, intento3);
    }
}
