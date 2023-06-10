// Desestructuracion
// Asignacion Desestructuracion

const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Ironman"
}

const useContext = ({clave, nombre, edad, rango = "Capitan"}) => {
    return {
        nombreClave: clave,
        anios: edad
    }
}

const { nombreClave, anios } = useContext( persona );
console.log(nombreClave, anios);