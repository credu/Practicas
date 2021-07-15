

/**
 * clasePlayer
 */
public class clasePlayer {

    static public class Player {
        // Propiedades
        private int playerNumber, lifes, health;
        private double speed = 0.0;
        private boolean jumping, running;
        private String state;
        private final double WALK_MAX_VELOCITY = 600.0;
        private final int healthMax = 100;
        
        public Player(int playerNumber) {
            this.playerNumber = playerNumber;
            lifes = 0;
            health = 100;
            jumping = false;
            running = false;
            state = "iddle";
        }

        // métodos (getters y setters, etc)
        public void setHealth(int health) {
            this.health = health;
        }

        public void setLifes(int lifes) {
            this.lifes = lifes;
        }

        public void setState(String state) {
            this.state = state;
            if (this.state == "iddle") { iddle(); }
            if (this.state == "jump") { jump(); }
            if (this.state == "run") { run(); }
        }

        public void iddle() {
            this.state = "iddle";
            this.running = false;
            this.speed = 0;
        }

        public void run() {
            this.state = "run";
            this.running = true;
            this.speed = 600;
        }

        public void jump() {
            this.state = "jump";
            this.jumping = true;
            this.speed = 600;
        }

        public String getData() {
            return "[Player" + Integer.toString(playerNumber) + "]\n" +
                    "Lifes: " + Integer.toString(lifes) + "\n" +
                    "Health: " + Integer.toString(health) + "/" + healthMax + "\n" +
                    "Jumping: " + jumping + "\n" +
                    "Running: " + running + "\n" +
                    "Speed: " + speed + "\n" +
                    "Max speed: " + WALK_MAX_VELOCITY + "\n" +
                    "State: " + state;
        }
    }

    public static void clearScreen() {
        System.out.print("\033[H\033[2J");
        System.out.flush();
    }

    public static void main(String[] args) {
        clearScreen();
        Player player1 = new Player(1);
        Player player2 = new Player(2);

        player1.setLifes(2);
        player1.setState("iddle");

        player2.setLifes(3);
        player2.setState("run");

        System.out.println( player1.getData() );
        System.out.println();
        System.out.println( player2.getData() );
    }
}