import javax.swing.*;

import javafx.embed.swing.JFXPanel;
import java.io.File;
import java.util.concurrent.*;

import javafx.scene.media.*;

/**
 * test
 */

public class test {

    public static double time = 0;

    public static void main(String[] args) throws InterruptedException {
        clear();

        final JFXPanel fxPanel = new JFXPanel();
        String bip = "C:\\Users\\user\\Downloads\\TeQuiero.mp3";
        Media hit = new Media(new File(bip).toURI().toString());
        MediaPlayer mediaPlayer = new MediaPlayer(hit);

        

        mediaPlayer.setOnReady( () -> {
            mediaPlayer.play();
            
            double times = hit.getDuration().toSeconds();
            setTime(times);
        });

        mediaPlayer.getCurrentTime();

        String lyrics[] = new String[]{
            "╯^╰ Abrazame fuerte",
            "♪(´▽｀) Ven corriendo a mi",
            "(❁´◡`❁) Te quiero, Te quiero, Te quiero",
            "(っ °Д °;)っ Y no hago otra cosa",
            "(︶^︶) Que pensar en ti"
        };

        for (String string : lyrics) {
            JOptionPane.showMessageDialog(fxPanel, new JLabel(string,JLabel.CENTER), "Te Quiero ~ Hombres G", JOptionPane.PLAIN_MESSAGE);
        }

        TimeUnit.SECONDS.sleep( (new Double(getTime())).longValue() - (new Double(mediaPlayer.getCurrentTime().toSeconds())).longValue() );

        System.exit(0);

    }

    public static void stopPlayer(MediaPlayer mediaPlayer) throws InterruptedException {
        TimeUnit.SECONDS.sleep( (new Double(getTime())).longValue() );
        mediaPlayer.stop();
    }

    public static void setTime(double second) {
        time = second;
        System.out.println("Time fue establecido: " + time);
    }

    public static double getTime() {
        return time;
    }

    public static void clear() {
        System.out.print("\033[H\033[2J");
        System.out.flush();
    }

}