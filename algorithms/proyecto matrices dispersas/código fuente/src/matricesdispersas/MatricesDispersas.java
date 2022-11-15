package matricesdispersas;

import java.util.ArrayList;
import java.util.Random;

public class MatricesDispersas {

    private ArrayList< ArrayList<Integer>> matrizCompleta;

    
    public MatricesDispersas(){
        
        matrizCompleta = new ArrayList<>();
        
    }

    public void setMatrizCompleta(ArrayList<ArrayList<Integer>> matrizCompleta) {
        this.matrizCompleta = matrizCompleta;
    }
    public ArrayList<ArrayList<Integer>> getMatrizCompleta() {
        return matrizCompleta;
    }

    
    public int generarNumeroAleatorio(int limite) {

        Random aleatorio = new Random();
        // Producir nuevo int aleatorio entre 0 y limite
        return aleatorio.nextInt(limite);

    }    
    
    public ArrayList< ArrayList<Integer>> getArregloDeCeros(int sizeFila, int sizeColumna){
        
        ArrayList< ArrayList<Integer>> arregloLlenoDeCeros = new ArrayList<>();
        
        for (int i = 0; i < sizeFila; i++) {
            
            arregloLlenoDeCeros.add(new ArrayList<>());
            
            for (int j = 0; j < sizeColumna; j++) {
                
                arregloLlenoDeCeros.get(i).add(0);
                
            }
            
        }
        
        return arregloLlenoDeCeros;
    }    
    
    public ArrayList getArregloConNumerosAleatorios(int sizeArreglo, int limiteNumerosAleatorios) {

        ArrayList<Integer> arregloGenerado = new ArrayList<>();

        for (int i = 0; i < sizeArreglo; i++) {

            arregloGenerado.add(generarNumeroAleatorio(limiteNumerosAleatorios));

        }

        return arregloGenerado;
    }    
    
    public ArrayList< ArrayList<Integer>> getMatrizConNumerosAleatorios(int numeroFilas, int numeroColumnas, int limiteNumerosAleatorios) {

        ArrayList< ArrayList<Integer>> matrizAleatoria = new ArrayList<>();

        for (int i = 0; i < numeroFilas; i++) {

            matrizAleatoria.add(this.getArregloConNumerosAleatorios(numeroColumnas, limiteNumerosAleatorios));

        }

        return matrizAleatoria;

    }    
    
    public ArrayList< ArrayList<Integer>> getMatrizDispersaConNumerosAleatorios(int numeroFilas, int numeroColumnas, int limiteNumerosAleatorios, int cantidadCeros){
        
        ArrayList< ArrayList<Integer>> matrizAleatoria = getMatrizConNumerosAleatorios(numeroFilas, numeroColumnas, limiteNumerosAleatorios);
    
        for (int i = 0; i < cantidadCeros; i++) {
            
            matrizAleatoria.get(generarNumeroAleatorio( numeroFilas ) ).set(  generarNumeroAleatorio( numeroColumnas ), 0  );
            
        }

        return matrizAleatoria;
        
    }
    
    public ArrayList< ArrayList<Integer>> convertirAformatoCoordenado(){
        
        ArrayList<Integer> valores = new ArrayList<>();
        ArrayList<Integer> indicesFila = new ArrayList<>();
        ArrayList<Integer> indicesColumna = new ArrayList<>();
        
        for (int i = 0; i < matrizCompleta.size(); i++) {
            
            for (int j = 0; j < matrizCompleta.get(i).size(); j++) {
                
                if( matrizCompleta.get(i).get(j) != 0 ){
                    
                    valores.add( matrizCompleta.get(i).get(j) );
                    indicesFila.add( i );
                    indicesColumna.add( j );
                    
                }
                
            }
            
        }

        ArrayList< ArrayList<Integer>> resultado = new ArrayList<>();
        
        resultado.add(valores);
        resultado.add(indicesFila);
        resultado.add(indicesColumna);
        
        return resultado;
        
    }
    public ArrayList< ArrayList<Integer>> getMatrizCompletaDesdeFC( ArrayList< ArrayList<Integer>> matrizAconvertir, int sizeFilaMatrizCompleta, int sizeColumbaMatrizCompleta ){
        
        ArrayList< ArrayList<Integer>> resultado = getArregloDeCeros(sizeFilaMatrizCompleta, sizeColumbaMatrizCompleta );
        
        //por cada indice de fila, que es lo mismo que decir por cada valor distinto de cero...
        for (int i = 0; i < matrizAconvertir.get(1).size(); i++) {

            resultado.get( matrizAconvertir.get(1).get(i)  ).set(matrizAconvertir.get(2).get(i), matrizAconvertir.get(0).get(i) );
            
        }        
        
        return resultado;
        
    }

    
    public ArrayList< ArrayList<Integer>> convertirAformatoComprimidoPorFila(){
        
        ArrayList<Integer> valores = new ArrayList<>();
        ArrayList<Integer> indicesColumnas = new ArrayList<>();
        ArrayList<Integer> indicesEmpiezaValoresEnFila = new ArrayList<>();

        boolean primerValorDeLafila;
        for (int i = 0, contadorIndicesColumnas = 0; i < matrizCompleta.size(); i++) {
            
            primerValorDeLafila = true;
            
            for (int j = 0; j < matrizCompleta.get(i).size(); j++) {
                
                if( matrizCompleta.get(i).get(j) != 0 ){
                    
                    
                    valores.add( matrizCompleta.get(i).get(j) );
                    indicesColumnas.add( j );
                    
                    if(primerValorDeLafila){
                        
                        indicesEmpiezaValoresEnFila.add( contadorIndicesColumnas );
                        primerValorDeLafila = false;
                        
                    }
                    
                    //Representa la cantidad de indices que se han almacenado en ele segundo vector (indicesColumnas)
                    //pero como la intención es que sea los indices de donde empiezan los valores
                    //de cada fila según los indices de las columnas en el segundo vector, primero 
                    //almacenamos su valor en indicesEmpiezaValoresEnFila y luego lo aumentamos
                    //porque los indices empiezan desde cero, es decir están un valor más atras.
                    contadorIndicesColumnas++;
                    
                }
                
            }
            
        }
        
        ArrayList< ArrayList<Integer>> resultado = new ArrayList<>();
        resultado.add(valores);
        resultado.add(indicesColumnas);
        resultado.add(indicesEmpiezaValoresEnFila);
        return resultado;        
        
        
    }    
    public ArrayList< ArrayList<Integer>> getMatrizCompletaDesdeCSR(ArrayList<Integer> valores, ArrayList<Integer> indicesColumna, ArrayList<Integer> posicionEmpiezanValoresEnFila, int sizeFilaMatrizCompleta, int sizeColumbaMatrizCompleta){
        
        ArrayList< ArrayList<Integer>> resultado = this.getArregloDeCeros(sizeFilaMatrizCompleta, sizeColumbaMatrizCompleta);
        
        //Vamos a ubicar a cada valor en la matriz resultado.
        int finIntervaloValoresFila;
        if(posicionEmpiezanValoresEnFila.size() == 1)
            finIntervaloValoresFila = posicionEmpiezanValoresEnFila.get(0);
        else
            finIntervaloValoresFila = posicionEmpiezanValoresEnFila.get(1);
        
        for (int i = 0, fila = 0; i < valores.size(); i++) {
        
            //Si el indice del valor actual (i) está dentro del intervalo actual
            //lo ingresamos en la fila
            if(i < finIntervaloValoresFila){
                
                resultado.get(fila).set( indicesColumna.get(i), valores.get(i) );
                
            }else{
                
                //De lo contrario debemos ingresar el valor en la siguiente fila
                if( fila+1 < resultado.size() )
                    fila++;
                
                resultado.get(fila).set( indicesColumna.get(i), valores.get(i) );
                
                //Evitamos que haya un IndexOutOfBoundsException y nos quedamos en el último intervalo que representa
                //la última fila con valores
                if( fila+1 < posicionEmpiezanValoresEnFila.size() )
                    finIntervaloValoresFila = posicionEmpiezanValoresEnFila.get(fila+1);
                
                
            }
        }
        
        return resultado;
    }
    
    public ArrayList< ArrayList<Integer>> convertirAformatoComprimidoPorColumna(){
        
        ArrayList<Integer> valores = new ArrayList<>();
        ArrayList<Integer> indicesFilas = new ArrayList<>();
        ArrayList<Integer> indicesEmpiezaValoresEnColumna = new ArrayList<>();
        
        boolean primerValorDeLaColumna;
        for (int i = 0, contadorIndicesFilas = 0; i < matrizCompleta.get(0).size(); i++) {
            
            primerValorDeLaColumna = true;
            
            for (int j = 0; j < matrizCompleta.size(); j++) {
                
                if( matrizCompleta.get(j).get(i) != 0 ){
                    
                    
                    valores.add( matrizCompleta.get(j).get(i) );
                    indicesFilas.add( j );
                    
                    if(primerValorDeLaColumna){
                        
                        indicesEmpiezaValoresEnColumna.add( contadorIndicesFilas );
                        primerValorDeLaColumna = false;
                        
                    }
                    
            
                    //Representa la cantidad de indices que se han almacenado en el segundo vector (indicesFilas)
                    //pero como la intención es que sea los indices de donde empiezan los valores
                    //de cada fila según los indices de las columnas en el segundo vector, primero 
                    //almacenamos su valor en indicesEmpiezaValoresEnColumna y luego lo aumentamos
                    //porque los indices empiezan desde cero, es decir están un valor más atras.
                    contadorIndicesFilas++;                       
                    
                }
                
            }         
            
            
        }
        
        ArrayList< ArrayList<Integer>> resultado = new ArrayList<>();
        resultado.add(valores);
        resultado.add(indicesFilas);
        resultado.add(indicesEmpiezaValoresEnColumna);
        return resultado;        
        
    }    
    public ArrayList< ArrayList<Integer>> getMatrizCompletaDeCSC(ArrayList<Integer> valores, ArrayList<Integer> indicesFila, ArrayList<Integer> posicionEmpiezanValoresEnColumna, int sizeFilaMatrizCompleta, int sizeColumnaMatrizCompleta){
        
        ArrayList< ArrayList<Integer>> resultado = this.getArregloDeCeros(sizeFilaMatrizCompleta, sizeColumnaMatrizCompleta);
        
        //Vamos a ubicar a cada valor en la matriz resultado.
        int finIntervaloValoresColumna;
        if(posicionEmpiezanValoresEnColumna.size() == 1)
            finIntervaloValoresColumna = posicionEmpiezanValoresEnColumna.get(0);
        else
            finIntervaloValoresColumna = posicionEmpiezanValoresEnColumna.get(1);
        
        for (int i = 0, columna = 0; i < valores.size(); i++) {
        
            //Si el indice del valor actual (i) está dentro del intervalo actual
            //lo ingresamos en la columna
            if(i < finIntervaloValoresColumna){
                
                resultado.get( indicesFila.get(i) ).set( columna, valores.get(i) );
                
            }else{
                
                //De lo contrario debemos ingresar el valor en la siguiente columna
                if( columna+1 < resultado.get(0).size() )
                    columna++;
                
                resultado.get( indicesFila.get(i) ).set( columna, valores.get(i) );
                
                //Evitamos que haya un IndexOutOfBoundsException y nos quedamos en el último intervalo que representa
                //la última fila con valores
                if( columna+1 < posicionEmpiezanValoresEnColumna.size() )
                    finIntervaloValoresColumna = posicionEmpiezanValoresEnColumna.get(columna+1);
                
            }
        }
        
        return resultado;        
        
    }
    
    //Convierte una lista de números de tipo String separados por comas y sin espacio, y retorna
    //un ArrayList<Integer> con los números
    public ArrayList<Integer> listaNumerosStringToArrayInteger(String listaNumerosArray){
        
        ArrayList<Integer> numeros = new ArrayList<>();
        String[] numerosString = listaNumerosArray.split(",");
        
        for (String numeroString : numerosString) {
            
            try {
                
                numeros.add( Integer.parseInt( numeroString ) );
                
            } catch (Exception e) {
                System.err.println("Error: vectores ingresados no son válidos");
                return null;
            }
            
        }
        
        return numeros;
    }
    
    public static void main(String[] args) {
        
        new ventanaPrincipal();
        
    }

    ArrayList<ArrayList<Integer>> sumarMatrices(ArrayList< ArrayList<Integer>> matrizSuma1, ArrayList< ArrayList<Integer>> matrizSuma2) {
        
        ArrayList< ArrayList<Integer>> matrizResultado = new ArrayList< ArrayList<Integer>>();

        for (int i = 0; i < matrizSuma1.size(); i++) {

            matrizResultado.add(new ArrayList<>());

            for (int j = 0; j < matrizSuma1.get(0).size(); j++) {

                matrizResultado.get(i).add(0);

                matrizResultado.get(i).set(j, matrizSuma1.get(i).get(j) + matrizSuma2.get(i).get(j));

            }

        }
        
        return matrizResultado;
        
    }

    ArrayList<ArrayList<Integer>> getTranspuesta(ArrayList<ArrayList<Integer>> matrizAobtenerTranspuesta) {

        ArrayList<ArrayList<Integer>> matrizTranspuesta = getArregloDeCeros( matrizAobtenerTranspuesta.size(), matrizAobtenerTranspuesta.size() ); 
        
        for (int i = 0; i < matrizAobtenerTranspuesta.size(); i++) {
            
            for (int j = 0; j < matrizAobtenerTranspuesta.size(); j++) {
                
                matrizTranspuesta.get(i).set(j, matrizAobtenerTranspuesta.get(j).get(i) );
                
            }
       
        }
        
        return matrizTranspuesta;

    }
}
