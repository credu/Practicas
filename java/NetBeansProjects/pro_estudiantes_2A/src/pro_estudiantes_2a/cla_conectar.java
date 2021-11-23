/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pro_estudiantes_2a;

import com.mysql.jdbc.Connection;
import java.sql.DriverManager;

/**
 *
 * @author user
 */
public class cla_conectar {
    Connection conectar=null;
    
    public Connection conexion (){
        try{
            Class.forName("com.mysql.jdbc.Driver");
            conectar=(Connection) DriverManager.getConnection("jdbc:mysql://localhost/bd_colegio_2a","root","");
        }catch (Exception e){
            System.out.print(e.getMessage());
        }
        return conectar;
        
    } 
}
