import javax.swing.*;

/**
 * sumaDosNumerosGrafico
 */
public class sumaDosNumerosGrafico {
    public static void main(String[] args) {  
        JFrame f = new JFrame();//creating instance of JFrame
        
                  
        JButton button = new JButton("click");//creating instance of JButton  
        button.setBounds(130,100,100, 40);//x axis, y axis, width, height  
                  
        f.add(button);//adding button in JFrame  
        
        f.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);

        f.setSize(400,500);//400 width and 500 height  
        f.setLayout(null);//using no layout managers  
        f.setVisible(true);//making the frame visible
    }
}