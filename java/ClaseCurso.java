

/**
 * claseCurso
 */
public class ClaseCurso {

    static public class Curso {
        // Propiedades
        private String asignatura;
        private String[] jornada = {"Matutina","Vespertina"}; 
        private int estudiantesInscritos, estudiantesLimite = 30, i;
        
        public Curso() {
            asignatura = "";
            estudiantesInscritos = 20;
            estudiantesLimite = 30;
        }

        public String mostrarDatos() {
            return "[Asignatura de " + asignatura + "]\n" +
                    "Estudiantes inscritos: " + estudiantesInscritos + "/" + estudiantesLimite + "\n" +
                    "Jornada: " + jornada[i] + "\n";
        }

        public void llenarDatos(String asignatura, int estudiantesInscritos, int estudiantesLimite) {
            this.asignatura = asignatura;
            this.estudiantesInscritos = estudiantesInscritos;
            this.estudiantesLimite = estudiantesLimite;
        }  //permite llenar los datos después de crear un objeto se la debe llamar.

        public void cambiarJornada() {
            if ( jornada[i] == "Matutina") {
                i = 1;
            } else {
                i = 0;
            }
        }  // permite cambiar la jornada del curso
        
        public void incribirEstudiante() {
            if (estudiantesInscritos < estudiantesLimite) {
                estudiantesInscritos++;
                System.out.println("El estudiante fue inscrito correctamente en la asignatura de " + asignatura + ".");
            } else {
                System.out.println("El estudiante no fue inscrito correctamente, la asignatura de " + asignatura + " tiene los cupos llenos.");
            }
        }  // permite inscribir estudiantes, recuerde que no se pueden inscribir estudiantes si se llena mas del cupo.
        
    }

    public static void clearScreen() {
        System.out.print("\033[H\033[2J");
        System.out.flush();
    }

    public static void main(String[] args) {
        clearScreen();
        Curso claseA = new Curso();
        Curso claseB = new Curso();
        Curso claseC = new Curso();
        claseA.llenarDatos("Programacion", 29, 30);
        claseB.llenarDatos("Lenguaje", 30, 30);
        claseC.llenarDatos("Matematica", 20, 30);

        
        System.out.println( claseA.mostrarDatos() );
        System.out.println( claseB.mostrarDatos() );
        System.out.println( claseC.mostrarDatos() );

        claseA.incribirEstudiante();
        claseB.incribirEstudiante();
        claseC.incribirEstudiante();
    }
}