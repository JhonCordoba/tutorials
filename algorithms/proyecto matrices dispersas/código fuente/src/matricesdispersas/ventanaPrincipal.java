package matricesdispersas;

import java.util.ArrayList;
import javax.swing.ButtonGroup;
import javax.swing.JOptionPane;
import javax.swing.JRadioButton;
import javax.swing.JSpinner;
import javax.swing.JTextField;
import javax.swing.SpinnerNumberModel;

public class ventanaPrincipal extends javax.swing.JFrame {

    private final MatricesDispersas matricesDispersasController;

    public ventanaPrincipal() {
        initComponents();

        matricesDispersasController = new MatricesDispersas();

        this.setVisible(true);
        this.setLocationRelativeTo(null);
    }

    private void mostrarArreglo(ArrayList< ArrayList<Integer>> arregloAmostrar) {

        String arregloAmostrarString = "";

        for (int i = 0; i < arregloAmostrar.size(); i++) {

            for (int j = 0; j < arregloAmostrar.get(i).size(); j++) {

                arregloAmostrarString += arregloAmostrar.get(i).get(j) + ",";
            }

            arregloAmostrarString += "\n";
        }

        jTextArea_Mostrador.append(arregloAmostrarString);
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jScrollPane1 = new javax.swing.JScrollPane();
        jTextArea_Mostrador = new javax.swing.JTextArea();
        labelHeader = new org.edisoncor.gui.label.LabelHeader();
        jPanelOpciones = new javax.swing.JPanel();
        jCheckBoxMatrizAleatoria = new javax.swing.JCheckBox();
        jLabelTamanioMatriz = new javax.swing.JLabel();
        jSpinnerSizeFila = new javax.swing.JSpinner();
        jSpinnerSizeColumna = new javax.swing.JSpinner();
        jLabelCantidadCeros = new javax.swing.JLabel();
        jSpinnerCantidadCeros = new javax.swing.JSpinner();
        buttonActionGenerarMatriz = new org.edisoncor.gui.button.ButtonAction();
        jPanelFunciones = new javax.swing.JPanel();
        buttonActionGetRepresentacion = new org.edisoncor.gui.button.ButtonAction();
        buttonActionGetElemento = new org.edisoncor.gui.button.ButtonAction();
        buttonActionGetFila = new org.edisoncor.gui.button.ButtonAction();
        buttonActionGetColumna = new org.edisoncor.gui.button.ButtonAction();
        buttonActionModificarPosicion = new org.edisoncor.gui.button.ButtonAction();
        buttonActionSumarMatriz = new org.edisoncor.gui.button.ButtonAction();
        buttonActionGetTranspuesta = new org.edisoncor.gui.button.ButtonAction();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setTitle("Proyecto FADA");
        setResizable(false);

        jTextArea_Mostrador.setEditable(false);
        jTextArea_Mostrador.setColumns(20);
        jTextArea_Mostrador.setRows(5);
        jTextArea_Mostrador.setBorder(javax.swing.BorderFactory.createTitledBorder("Resultados"));
        jScrollPane1.setViewportView(jTextArea_Mostrador);

        labelHeader.setText("Matrices Dispersas");

        jPanelOpciones.setBorder(javax.swing.BorderFactory.createTitledBorder("Opciones Matriz"));

        jCheckBoxMatrizAleatoria.setText("Generar matriz aleatoriamente");
        jCheckBoxMatrizAleatoria.addChangeListener(new javax.swing.event.ChangeListener() {
            public void stateChanged(javax.swing.event.ChangeEvent evt) {
                jCheckBoxMatrizAleatoriaStateChanged(evt);
            }
        });

        jLabelTamanioMatriz.setText("Tamaño de la matriz:");

        jSpinnerSizeFila.setModel(new javax.swing.SpinnerNumberModel(3, 3, null, 1));

        jSpinnerSizeColumna.setModel(new javax.swing.SpinnerNumberModel(3, 3, null, 1));

        jLabelCantidadCeros.setText("Nivel dispersión");

        jSpinnerCantidadCeros.setModel(new javax.swing.SpinnerNumberModel(3, 3, 40, 1));
        jSpinnerCantidadCeros.setEnabled(false);

        buttonActionGenerarMatriz.setText("Generar");
        buttonActionGenerarMatriz.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                buttonActionGenerarMatrizActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanelOpcionesLayout = new javax.swing.GroupLayout(jPanelOpciones);
        jPanelOpciones.setLayout(jPanelOpcionesLayout);
        jPanelOpcionesLayout.setHorizontalGroup(
            jPanelOpcionesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanelOpcionesLayout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jCheckBoxMatrizAleatoria)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jLabelTamanioMatriz)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jSpinnerSizeFila, javax.swing.GroupLayout.PREFERRED_SIZE, 46, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jSpinnerSizeColumna, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addComponent(jLabelCantidadCeros)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jSpinnerCantidadCeros, javax.swing.GroupLayout.PREFERRED_SIZE, 58, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(buttonActionGenerarMatriz, javax.swing.GroupLayout.PREFERRED_SIZE, 104, javax.swing.GroupLayout.PREFERRED_SIZE))
        );
        jPanelOpcionesLayout.setVerticalGroup(
            jPanelOpcionesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanelOpcionesLayout.createSequentialGroup()
                .addGap(3, 3, 3)
                .addGroup(jPanelOpcionesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jCheckBoxMatrizAleatoria)
                    .addComponent(jLabelTamanioMatriz)
                    .addComponent(jSpinnerSizeFila, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jSpinnerSizeColumna, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabelCantidadCeros)
                    .addComponent(jSpinnerCantidadCeros, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(buttonActionGenerarMatriz, javax.swing.GroupLayout.PREFERRED_SIZE, 26, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        jPanelFunciones.setBorder(javax.swing.BorderFactory.createTitledBorder("Funciones"));

        buttonActionGetRepresentacion.setText("Obtener representación");
        buttonActionGetRepresentacion.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                buttonActionGetRepresentacionActionPerformed(evt);
            }
        });

        buttonActionGetElemento.setText("Obtener elemento");
        buttonActionGetElemento.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                buttonActionGetElementoActionPerformed(evt);
            }
        });

        buttonActionGetFila.setText("Obtener fila");
        buttonActionGetFila.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                buttonActionGetFilaActionPerformed(evt);
            }
        });

        buttonActionGetColumna.setText("Obtener Columna");
        buttonActionGetColumna.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                buttonActionGetColumnaActionPerformed(evt);
            }
        });

        buttonActionModificarPosicion.setText("Modificar posición");
        buttonActionModificarPosicion.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                buttonActionModificarPosicionActionPerformed(evt);
            }
        });

        buttonActionSumarMatriz.setText("Suma de matrices");
        buttonActionSumarMatriz.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                buttonActionSumarMatrizActionPerformed(evt);
            }
        });

        buttonActionGetTranspuesta.setText("Matriz transpuesta");
        buttonActionGetTranspuesta.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                buttonActionGetTranspuestaActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanelFuncionesLayout = new javax.swing.GroupLayout(jPanelFunciones);
        jPanelFunciones.setLayout(jPanelFuncionesLayout);
        jPanelFuncionesLayout.setHorizontalGroup(
            jPanelFuncionesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanelFuncionesLayout.createSequentialGroup()
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addComponent(buttonActionGetRepresentacion, javax.swing.GroupLayout.PREFERRED_SIZE, 201, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(buttonActionGetElemento, javax.swing.GroupLayout.PREFERRED_SIZE, 195, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(buttonActionGetFila, javax.swing.GroupLayout.PREFERRED_SIZE, 195, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(buttonActionGetColumna, javax.swing.GroupLayout.PREFERRED_SIZE, 195, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18))
            .addGroup(jPanelFuncionesLayout.createSequentialGroup()
                .addGap(79, 79, 79)
                .addComponent(buttonActionModificarPosicion, javax.swing.GroupLayout.PREFERRED_SIZE, 201, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18)
                .addComponent(buttonActionSumarMatriz, javax.swing.GroupLayout.PREFERRED_SIZE, 251, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18)
                .addComponent(buttonActionGetTranspuesta, javax.swing.GroupLayout.PREFERRED_SIZE, 195, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(78, Short.MAX_VALUE))
        );
        jPanelFuncionesLayout.setVerticalGroup(
            jPanelFuncionesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanelFuncionesLayout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanelFuncionesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(buttonActionGetRepresentacion, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(buttonActionGetElemento, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(buttonActionGetFila, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(buttonActionGetColumna, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(jPanelFuncionesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(buttonActionSumarMatriz, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(buttonActionGetTranspuesta, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(buttonActionModificarPosicion, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(labelHeader, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
            .addComponent(jPanelOpciones, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jScrollPane1)
                .addContainerGap())
            .addComponent(jPanelFunciones, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addComponent(labelHeader, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jPanelOpciones, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 226, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jPanelFunciones, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void buttonActionGenerarMatrizActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_buttonActionGenerarMatrizActionPerformed

        jTextArea_Mostrador.setText("");

        int cantidadDeCeros = (Integer) jSpinnerCantidadCeros.getValue();
        int sizeFila = (Integer) jSpinnerSizeFila.getValue();
        int sizeColumna = (Integer) jSpinnerSizeColumna.getValue();
        ArrayList< ArrayList<Integer>> matrizGenerada = new ArrayList<>();

        if (jCheckBoxMatrizAleatoria.isSelected()) {

            matrizGenerada = matricesDispersasController.getMatrizDispersaConNumerosAleatorios(sizeFila, sizeColumna, 99, cantidadDeCeros);

        } else {

            int numeroAingresar;

            for (int i = 0; i < sizeFila; i++) {

                matrizGenerada.add(new ArrayList<>());

                for (int j = 0; j < sizeColumna; j++) {

                    try {

                        numeroAingresar = Integer.parseInt(JOptionPane.showInputDialog("Ingresa el valor de la posición [" + i + "] [" + j + "]"));

                        matrizGenerada.get(i).add(numeroAingresar);

                        if (numeroAingresar < -1000 || numeroAingresar > 1000) {
                            throw new Exception();
                        }
                    } catch (Exception e) {
                        JOptionPane.showMessageDialog(null, "Ingresa números válidos");
                        return;
                    }

                }

            }

        }

        matricesDispersasController.setMatrizCompleta(matrizGenerada);

        jTextArea_Mostrador.setText("Matriz dispersa completa: \n");
        mostrarArreglo(matrizGenerada);

    }//GEN-LAST:event_buttonActionGenerarMatrizActionPerformed

    private void jCheckBoxMatrizAleatoriaStateChanged(javax.swing.event.ChangeEvent evt) {//GEN-FIRST:event_jCheckBoxMatrizAleatoriaStateChanged

        if (jCheckBoxMatrizAleatoria.isSelected()) {

            jSpinnerCantidadCeros.setEnabled(true);

        } else {
            jSpinnerCantidadCeros.setEnabled(false);
        }

    }//GEN-LAST:event_jCheckBoxMatrizAleatoriaStateChanged

    private void buttonActionGetRepresentacionActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_buttonActionGetRepresentacionActionPerformed

        if (matricesDispersasController.getMatrizCompleta().isEmpty()) {
            JOptionPane.showMessageDialog(null, "Primero debes generar la matriz", "Matrices dispersas", JOptionPane.ERROR_MESSAGE);
            return;
        }

        JRadioButton radioButtonFC = new JRadioButton("FC");
        radioButtonFC.setSelected(true); //Impedimos que el usuario presione ok sin seleccionar el método de compresión

        JRadioButton radioButtonCSR = new JRadioButton("CSR");//compressed sparse row
        JRadioButton radioButtonCSC = new JRadioButton("CSC");//compressed sparse Column

        ButtonGroup group = new ButtonGroup();
        group.add(radioButtonFC);
        group.add(radioButtonCSR);
        group.add(radioButtonCSC);

        String message = "Escoge el algoritmo de compresión";
        Object[] params = {message, radioButtonFC, radioButtonCSR, radioButtonCSC};
        int eleccionUsuario = JOptionPane.showConfirmDialog(null, params, "Matrices disperasas", JOptionPane.OK_CANCEL_OPTION);

        if (eleccionUsuario == 0) {

            ArrayList< ArrayList<Integer>> resultado = new ArrayList<>();

            long startTime = System.currentTimeMillis();;
            
            if (radioButtonFC.isSelected()) {

                startTime = System.currentTimeMillis();
                
                resultado = matricesDispersasController.convertirAformatoCoordenado();

                jTextArea_Mostrador.append("\nLa representación en formato coordenado es: \n");

            } else if (radioButtonCSR.isSelected()) {

                startTime = System.currentTimeMillis(); 
                
                resultado = matricesDispersasController.convertirAformatoComprimidoPorFila();

                jTextArea_Mostrador.append("\nLa representación en formato comprimido por filas es: \n");

            } else if (radioButtonCSC.isSelected()) {

                startTime = System.currentTimeMillis(); 
                
                resultado = matricesDispersasController.convertirAformatoComprimidoPorColumna();

                jTextArea_Mostrador.append("\nLa representación en formato comprimido por columnas es: \n");
            }

            long endTime = System.currentTimeMillis() - startTime;
            mostrarArreglo(resultado);
            
            jTextArea_Mostrador.append("\n\nTiempo de ejecución: " + endTime);


        }


    }//GEN-LAST:event_buttonActionGetRepresentacionActionPerformed

    private void buttonActionGetElementoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_buttonActionGetElementoActionPerformed

        JRadioButton radioButtonMatrizEnMemoria = new JRadioButton("La matriz en memoria");
        radioButtonMatrizEnMemoria.setSelected(true);
        JRadioButton radioButtonMatrizComprimida = new JRadioButton("Ingresar matriz comprimida");
        ButtonGroup group = new ButtonGroup();
        group.add(radioButtonMatrizEnMemoria);
        group.add(radioButtonMatrizComprimida);

        SpinnerNumberModel numberSpinnerModelIndiceFila = new SpinnerNumberModel(0, 0, 999, 1);
        SpinnerNumberModel numberSpinnerModelIndiceColumna = new SpinnerNumberModel(0, 0, 999, 1);
        JSpinner jSpinnerIndiceFila = new JSpinner(numberSpinnerModelIndiceFila);
        JSpinner jSpinnerIndiceColumna = new JSpinner(numberSpinnerModelIndiceColumna);

        Object[] params = {"Obtener elemento de: ", radioButtonMatrizEnMemoria, radioButtonMatrizComprimida, "Indice del elemento, fila y columna: ", jSpinnerIndiceFila, jSpinnerIndiceColumna};
        int eleccionUsuario = JOptionPane.showConfirmDialog(null, params, "Matrices disperasas", JOptionPane.OK_CANCEL_OPTION);

        long startTime = System.currentTimeMillis();
        
        //Si el usuario presiona en aceptar (aceptar obtener un valor)
        if (eleccionUsuario == 0) {

            ArrayList< ArrayList<Integer>> matrizObtenerElemento = new ArrayList<>();

            if (radioButtonMatrizEnMemoria.isSelected()) {

                matrizObtenerElemento = matricesDispersasController.getMatrizCompleta();

            } else if (radioButtonMatrizComprimida.isSelected()) {

                JRadioButton radioButtonFC = new JRadioButton("FC");
                radioButtonFC.setSelected(true); //Impedimos que el usuario presione ok sin seleccionar el método de compresión
                JRadioButton radioButtonCSR = new JRadioButton("CSR");//compressed sparse row
                JRadioButton radioButtonCSC = new JRadioButton("CSC");//compressed sparse Column
                ButtonGroup group2 = new ButtonGroup();
                group2.add(radioButtonFC);
                group2.add(radioButtonCSR);
                group2.add(radioButtonCSC);

                SpinnerNumberModel numberSpinnerModelFila = new SpinnerNumberModel(3, 3, 999, 1);
                SpinnerNumberModel numberSpinnerModelColumna = new SpinnerNumberModel(3, 3, 999, 1);
                JSpinner jSpinnerSizeFila = new JSpinner(numberSpinnerModelFila);
                JSpinner jSpinnerSizeColumna = new JSpinner(numberSpinnerModelColumna);

                JTextField elementosPrimerVector = new JTextField("");
                JTextField elementosSegundoVector = new JTextField("");
                JTextField elementosTercerVector = new JTextField("");

                Object[] params2 = {radioButtonFC, radioButtonCSR, radioButtonCSC, "Tamaño de Fila y columna", jSpinnerSizeFila, jSpinnerSizeColumna, "Valores 3 vectores Separados por comas", elementosPrimerVector, elementosSegundoVector, elementosTercerVector};
                int obtenerElementoDesdeMatrizComprimida = JOptionPane.showConfirmDialog(null, params2, "Matrices dispersas", JOptionPane.OK_CANCEL_OPTION);

                 
                
                if (obtenerElementoDesdeMatrizComprimida == 0) {

                    ArrayList<Integer> primerVector = matricesDispersasController.listaNumerosStringToArrayInteger(elementosPrimerVector.getText());
                    ArrayList<Integer> segundoVector = matricesDispersasController.listaNumerosStringToArrayInteger(elementosSegundoVector.getText());
                    ArrayList<Integer> tercerVector = matricesDispersasController.listaNumerosStringToArrayInteger(elementosTercerVector.getText());

                   
                    
                    //Ya tengo los vectores como enteros ahora toca pasar esos vectores y el tamaño de la matriz completa
                    //a su respectivo método de descompresión, para que nos de la matriz completa
                    if (radioButtonFC.isSelected()) {

                        startTime = System.currentTimeMillis();
                        
                        ArrayList< ArrayList<Integer>> matrizAconvertir = new ArrayList<>();
                        matrizAconvertir.add(primerVector);
                        matrizAconvertir.add(segundoVector);
                        matrizAconvertir.add(tercerVector);

                        jTextArea_Mostrador.append("\nLos vectores que ingresaste son (FC): \n");
                        this.mostrarArreglo(matrizAconvertir);

                        matrizObtenerElemento = matricesDispersasController.getMatrizCompletaDesdeFC(matrizAconvertir, (Integer) jSpinnerSizeFila.getValue(), (Integer) jSpinnerSizeColumna.getValue());


                    } else if (radioButtonCSR.isSelected()) {

                        startTime = System.currentTimeMillis();
                        
                        ArrayList< ArrayList<Integer>> matrizAconvertir = new ArrayList<>();
                        matrizAconvertir.add(primerVector);
                        matrizAconvertir.add(segundoVector);
                        matrizAconvertir.add(tercerVector);
                        jTextArea_Mostrador.append("\nLos vectores que ingresaste son (CSR): \n");
                        this.mostrarArreglo(matrizAconvertir);

                        matrizObtenerElemento = matricesDispersasController.getMatrizCompletaDesdeCSR(primerVector, segundoVector, tercerVector, (Integer) jSpinnerSizeFila.getValue(), (Integer) jSpinnerSizeColumna.getValue());

                    } else if (radioButtonCSC.isSelected()) {

                        startTime = System.currentTimeMillis();
                        
                        ArrayList< ArrayList<Integer>> matrizAconvertir = new ArrayList<>();
                        matrizAconvertir.add(primerVector);
                        matrizAconvertir.add(segundoVector);
                        matrizAconvertir.add(tercerVector);
                        jTextArea_Mostrador.append("\nLos vectores que ingresaste son (CSC): \n");
                        this.mostrarArreglo(matrizAconvertir);


                        matrizObtenerElemento = matricesDispersasController.getMatrizCompletaDeCSC(primerVector, segundoVector, tercerVector, (Integer) jSpinnerSizeFila.getValue(), (Integer) jSpinnerSizeColumna.getValue());


                    }

                }

            }

            
            
            if (matrizObtenerElemento.isEmpty()) {
                jTextArea_Mostrador.setText("Ingresa o genera una matriz");

            } else {
                long endTime = System.currentTimeMillis() - startTime;
                jTextArea_Mostrador.append("\nEl elemento de esa posición es " + matrizObtenerElemento.get((Integer) jSpinnerIndiceFila.getValue()).get((Integer) jSpinnerIndiceColumna.getValue()));
                jTextArea_Mostrador.append("\n\nTiempo de ejecución: " + endTime);
            }
        }

    }//GEN-LAST:event_buttonActionGetElementoActionPerformed

    private void buttonActionGetFilaActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_buttonActionGetFilaActionPerformed

        long startTime = 0;
        
        JRadioButton radioButtonMatrizEnMemoria = new JRadioButton("La matriz en memoria");
        radioButtonMatrizEnMemoria.setSelected(true);
        JRadioButton radioButtonMatrizComprimida = new JRadioButton("Ingresar matriz comprimida");
        ButtonGroup group = new ButtonGroup();
        group.add(radioButtonMatrizEnMemoria);
        group.add(radioButtonMatrizComprimida);

        SpinnerNumberModel numberSpinnerModelIndiceFila = new SpinnerNumberModel(0, 0, 999, 1);
        JSpinner jSpinnerIndiceFila = new JSpinner(numberSpinnerModelIndiceFila);

        Object[] params = {"Obtener fila de: ", radioButtonMatrizEnMemoria, radioButtonMatrizComprimida, "Indice de la fila: ", jSpinnerIndiceFila};
        int eleccionUsuario = JOptionPane.showConfirmDialog(null, params, "Matrices disperasas", JOptionPane.OK_CANCEL_OPTION);

        //Si el usuario presiona en aceptar (aceptar obtener la fila)
        if (eleccionUsuario == 0) {

            
            
            ArrayList< ArrayList<Integer>> matrizObtenerElemento = new ArrayList<>();

            if (radioButtonMatrizEnMemoria.isSelected()) {

                startTime = System.currentTimeMillis();

                matrizObtenerElemento = matricesDispersasController.getMatrizCompleta();

            } else if (radioButtonMatrizComprimida.isSelected()) {

                
                JRadioButton radioButtonFC = new JRadioButton("FC");
                radioButtonFC.setSelected(true); //Impedimos que el usuario presione ok sin seleccionar el método de compresión
                JRadioButton radioButtonCSR = new JRadioButton("CSR");//compressed sparse row
                JRadioButton radioButtonCSC = new JRadioButton("CSC");//compressed sparse Column
                ButtonGroup group2 = new ButtonGroup();
                group2.add(radioButtonFC);
                group2.add(radioButtonCSR);
                group2.add(radioButtonCSC);

                SpinnerNumberModel numberSpinnerModelFila = new SpinnerNumberModel(3, 3, 999, 1);
                SpinnerNumberModel numberSpinnerModelColumna = new SpinnerNumberModel(3, 3, 999, 1);
                JSpinner jSpinnerSizeFila = new JSpinner(numberSpinnerModelFila);
                JSpinner jSpinnerSizeColumna = new JSpinner(numberSpinnerModelColumna);

                JTextField elementosPrimerVector = new JTextField("");
                JTextField elementosSegundoVector = new JTextField("");
                JTextField elementosTercerVector = new JTextField("");

                Object[] params2 = {radioButtonFC, radioButtonCSR, radioButtonCSC, "Tamaño de Fila y columna", jSpinnerSizeFila, jSpinnerSizeColumna, "Valores 3 vectores Separados por comas", elementosPrimerVector, elementosSegundoVector, elementosTercerVector};
                int obtenerElementoDesdeMatrizComprimida = JOptionPane.showConfirmDialog(null, params2, "Matrices dispersas", JOptionPane.OK_CANCEL_OPTION);

                if (obtenerElementoDesdeMatrizComprimida == 0) {

                    ArrayList<Integer> primerVector = matricesDispersasController.listaNumerosStringToArrayInteger(elementosPrimerVector.getText());
                    ArrayList<Integer> segundoVector = matricesDispersasController.listaNumerosStringToArrayInteger(elementosSegundoVector.getText());
                    ArrayList<Integer> tercerVector = matricesDispersasController.listaNumerosStringToArrayInteger(elementosTercerVector.getText());

                    //Ya tengo los vectores como enteros ahora toca pasar esos vectores y el tamaño de la matriz completa
                    //a su respectivo método de descompresión, para que nos de la matriz completa
                    if (radioButtonFC.isSelected()) {

                        startTime = System.currentTimeMillis();
                        
                        ArrayList< ArrayList<Integer>> matrizAconvertir = new ArrayList<>();
                        matrizAconvertir.add(primerVector);
                        matrizAconvertir.add(segundoVector);
                        matrizAconvertir.add(tercerVector);

                        jTextArea_Mostrador.append("\nLos vectores que ingresaste son (FC): \n");
                        this.mostrarArreglo(matrizAconvertir);

                        matrizObtenerElemento = matricesDispersasController.getMatrizCompletaDesdeFC(matrizAconvertir, (Integer) jSpinnerSizeFila.getValue(), (Integer) jSpinnerSizeColumna.getValue());


                    } else if (radioButtonCSR.isSelected()) {

                        startTime = System.currentTimeMillis();
                        
                        ArrayList< ArrayList<Integer>> matrizAconvertir = new ArrayList<>();
                        matrizAconvertir.add(primerVector);
                        matrizAconvertir.add(segundoVector);
                        matrizAconvertir.add(tercerVector);
                        jTextArea_Mostrador.append("\nLos vectores que ingresaste son (CSR): \n");
                        this.mostrarArreglo(matrizAconvertir);

                        matrizObtenerElemento = matricesDispersasController.getMatrizCompletaDesdeCSR(primerVector, segundoVector, tercerVector, (Integer) jSpinnerSizeFila.getValue(), (Integer) jSpinnerSizeColumna.getValue());

                    } else if (radioButtonCSC.isSelected()) {

                        startTime = System.currentTimeMillis();
                        
                        
                        
                        ArrayList< ArrayList<Integer>> matrizAconvertir = new ArrayList<>();
                        matrizAconvertir.add(primerVector);
                        matrizAconvertir.add(segundoVector);
                        matrizAconvertir.add(tercerVector);
                        jTextArea_Mostrador.append("\nLos vectores que ingresaste son (CSC): \n");
                        this.mostrarArreglo(matrizAconvertir);

                        matrizObtenerElemento = matricesDispersasController.getMatrizCompletaDeCSC(primerVector, segundoVector, tercerVector, (Integer) jSpinnerSizeFila.getValue(), (Integer) jSpinnerSizeColumna.getValue());


                    }

                }

            }

            long endTime = System.currentTimeMillis() - startTime;
            
            if (matrizObtenerElemento.isEmpty()) {
                jTextArea_Mostrador.setText("Ingresa o genera una matriz");

            } else {

                jTextArea_Mostrador.append("\nLos elementos de esa fila son: ");

                for (int i = 0; i < matrizObtenerElemento.get(0).size(); i++) {

                    jTextArea_Mostrador.append("\n" + matrizObtenerElemento.get((Integer) jSpinnerIndiceFila.getValue()).get(i));

                }

                jTextArea_Mostrador.append("\n\nTiempo de ejecución: " + endTime);
                
            }

        }

    }//GEN-LAST:event_buttonActionGetFilaActionPerformed

    private void buttonActionGetColumnaActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_buttonActionGetColumnaActionPerformed

        long startTime = 0;
        JRadioButton radioButtonMatrizEnMemoria = new JRadioButton("La matriz en memoria");
        radioButtonMatrizEnMemoria.setSelected(true);
        JRadioButton radioButtonMatrizComprimida = new JRadioButton("Ingresar matriz comprimida");
        ButtonGroup group = new ButtonGroup();
        group.add(radioButtonMatrizEnMemoria);
        group.add(radioButtonMatrizComprimida);

        SpinnerNumberModel numberSpinnerModelIndiceColumna = new SpinnerNumberModel(0, 0, 999, 1);
        JSpinner jSpinnerIndiceColumna = new JSpinner(numberSpinnerModelIndiceColumna);

        Object[] params = {"Obtener columna de: ", radioButtonMatrizEnMemoria, radioButtonMatrizComprimida, "Indice de la columna: ", jSpinnerIndiceColumna};
        int eleccionUsuario = JOptionPane.showConfirmDialog(null, params, "Matrices disperasas", JOptionPane.OK_CANCEL_OPTION);

        //Si el usuario presiona en aceptar (aceptar obtener la fila)
        if (eleccionUsuario == 0) {

            ArrayList< ArrayList<Integer>> matrizObtenerElemento = new ArrayList<>();

            if (radioButtonMatrizEnMemoria.isSelected()) {

                startTime = System.currentTimeMillis();
                matrizObtenerElemento = matricesDispersasController.getMatrizCompleta();

            } else if (radioButtonMatrizComprimida.isSelected()) {

                
                JRadioButton radioButtonFC = new JRadioButton("FC");
                radioButtonFC.setSelected(true); //Impedimos que el usuario presione ok sin seleccionar el método de compresión
                JRadioButton radioButtonCSR = new JRadioButton("CSR");//compressed sparse row
                JRadioButton radioButtonCSC = new JRadioButton("CSC");//compressed sparse Column
                ButtonGroup group2 = new ButtonGroup();
                group2.add(radioButtonFC);
                group2.add(radioButtonCSR);
                group2.add(radioButtonCSC);

                SpinnerNumberModel numberSpinnerModelFila = new SpinnerNumberModel(3, 3, 999, 1);
                SpinnerNumberModel numberSpinnerModelColumna = new SpinnerNumberModel(3, 3, 999, 1);
                JSpinner jSpinnerSizeFila = new JSpinner(numberSpinnerModelFila);
                JSpinner jSpinnerSizeColumna = new JSpinner(numberSpinnerModelColumna);

                JTextField elementosPrimerVector = new JTextField("");
                JTextField elementosSegundoVector = new JTextField("");
                JTextField elementosTercerVector = new JTextField("");

                Object[] params2 = {radioButtonFC, radioButtonCSR, radioButtonCSC, "Tamaño de Fila y columna", jSpinnerSizeFila, jSpinnerSizeColumna, "Valores 3 vectores Separados por comas", elementosPrimerVector, elementosSegundoVector, elementosTercerVector};
                int obtenerElementoDesdeMatrizComprimida = JOptionPane.showConfirmDialog(null, params2, "Matrices dispersas", JOptionPane.OK_CANCEL_OPTION);

                if (obtenerElementoDesdeMatrizComprimida == 0) {

                    ArrayList<Integer> primerVector = matricesDispersasController.listaNumerosStringToArrayInteger(elementosPrimerVector.getText());
                    ArrayList<Integer> segundoVector = matricesDispersasController.listaNumerosStringToArrayInteger(elementosSegundoVector.getText());
                    ArrayList<Integer> tercerVector = matricesDispersasController.listaNumerosStringToArrayInteger(elementosTercerVector.getText());

                    //Ya tengo los vectores como enteros ahora toca pasar esos vectores y el tamaño de la matriz completa
                    //a su respectivo método de descompresión, para que nos de la matriz completa
                    if (radioButtonFC.isSelected()) {

                        startTime = System.currentTimeMillis();
                        ArrayList< ArrayList<Integer>> matrizAconvertir = new ArrayList<>();
                        matrizAconvertir.add(primerVector);
                        matrizAconvertir.add(segundoVector);
                        matrizAconvertir.add(tercerVector);

                        jTextArea_Mostrador.append("\nLos vectores que ingresaste son (FC): \n");
                        this.mostrarArreglo(matrizAconvertir);


                        matrizObtenerElemento = matricesDispersasController.getMatrizCompletaDesdeFC(matrizAconvertir, (Integer) jSpinnerSizeFila.getValue(), (Integer) jSpinnerSizeColumna.getValue());


                    } else if (radioButtonCSR.isSelected()) {

                        startTime = System.currentTimeMillis();
                        ArrayList< ArrayList<Integer>> matrizAconvertir = new ArrayList<>();
                        matrizAconvertir.add(primerVector);
                        matrizAconvertir.add(segundoVector);
                        matrizAconvertir.add(tercerVector);
                        jTextArea_Mostrador.append("\nLos vectores que ingresaste son (CSR): \n");
                        this.mostrarArreglo(matrizAconvertir);

                        matrizObtenerElemento = matricesDispersasController.getMatrizCompletaDesdeCSR(primerVector, segundoVector, tercerVector, (Integer) jSpinnerSizeFila.getValue(), (Integer) jSpinnerSizeColumna.getValue());

                    } else if (radioButtonCSC.isSelected()) {

                        startTime = System.currentTimeMillis();
                        ArrayList< ArrayList<Integer>> matrizAconvertir = new ArrayList<>();
                        matrizAconvertir.add(primerVector);
                        matrizAconvertir.add(segundoVector);
                        matrizAconvertir.add(tercerVector);
                        jTextArea_Mostrador.append("\nLos vectores que ingresaste son (CSC): \n");
                        this.mostrarArreglo(matrizAconvertir);

                        matrizObtenerElemento = matricesDispersasController.getMatrizCompletaDeCSC(primerVector, segundoVector, tercerVector, (Integer) jSpinnerSizeFila.getValue(), (Integer) jSpinnerSizeColumna.getValue());

                    }

                }

            }

            if (matrizObtenerElemento.isEmpty()) {
                jTextArea_Mostrador.setText("Ingresa o genera una matriz");

            } else {

                jTextArea_Mostrador.append("\nLos elementos de esa columna son: ");

                for (int i = 0; i < matrizObtenerElemento.size(); i++) {

                    jTextArea_Mostrador.append("\n" + matrizObtenerElemento.get(i).get((Integer) jSpinnerIndiceColumna.getValue()));

                }
                
                long endTime = System.currentTimeMillis() - startTime;
                jTextArea_Mostrador.append("\n\nTiempo de ejecución: " + endTime);

            }

        }


    }//GEN-LAST:event_buttonActionGetColumnaActionPerformed

    private void buttonActionModificarPosicionActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_buttonActionModificarPosicionActionPerformed

        long startTime = 0;
        
        SpinnerNumberModel numberSpinnerModelIndiceFila = new SpinnerNumberModel(0, 0, 999, 1);
        JSpinner jSpinnerIndiceFila = new JSpinner(numberSpinnerModelIndiceFila);

        SpinnerNumberModel numberSpinnerModelIndiceColumna = new SpinnerNumberModel(0, 0, 999, 1);
        JSpinner jSpinnerIndiceColumna = new JSpinner(numberSpinnerModelIndiceColumna);

        SpinnerNumberModel numberSpinnerModelNuevoValor = new SpinnerNumberModel(0, 0, 999, 1);
        JSpinner jSpinnerNuevoValor = new JSpinner(numberSpinnerModelNuevoValor);

        Object[] params = {"Indice del elemento (Fila y columna): ", jSpinnerIndiceFila, jSpinnerIndiceColumna, "Nuevo valor: ", jSpinnerNuevoValor};
        int eleccionUsuario = JOptionPane.showConfirmDialog(null, params, "Matrices disperasas", JOptionPane.OK_CANCEL_OPTION);

        //Si el usuario presiona en aceptar
        if (eleccionUsuario == 0) {

            ArrayList< ArrayList<Integer>> matrizModificarElemento = new ArrayList<>();

            JRadioButton radioButtonFC = new JRadioButton("FC");
            radioButtonFC.setSelected(true); //Impedimos que el usuario presione ok sin seleccionar el método de compresión
            JRadioButton radioButtonCSR = new JRadioButton("CSR");//compressed sparse row
            JRadioButton radioButtonCSC = new JRadioButton("CSC");//compressed sparse Column
            ButtonGroup group2 = new ButtonGroup();
            group2.add(radioButtonFC);
            group2.add(radioButtonCSR);
            group2.add(radioButtonCSC);

            SpinnerNumberModel numberSpinnerModelFila = new SpinnerNumberModel(3, 3, 999, 1);
            SpinnerNumberModel numberSpinnerModelColumna = new SpinnerNumberModel(3, 3, 999, 1);
            JSpinner jSpinnerSizeFila = new JSpinner(numberSpinnerModelFila);
            JSpinner jSpinnerSizeColumna = new JSpinner(numberSpinnerModelColumna);

            JTextField elementosPrimerVector = new JTextField("");
            JTextField elementosSegundoVector = new JTextField("");
            JTextField elementosTercerVector = new JTextField("");

            Object[] params2 = {radioButtonFC, radioButtonCSR, radioButtonCSC, "Tamaño de Fila y columna", jSpinnerSizeFila, jSpinnerSizeColumna, "Valores 3 vectores Separados por comas", elementosPrimerVector, elementosSegundoVector, elementosTercerVector};
            int obtenerElementoDesdeMatrizComprimida = JOptionPane.showConfirmDialog(null, params2, "Matrices dispersas", JOptionPane.OK_CANCEL_OPTION);

            if (obtenerElementoDesdeMatrizComprimida == 0) {

                ArrayList<Integer> primerVector = matricesDispersasController.listaNumerosStringToArrayInteger(elementosPrimerVector.getText());
                ArrayList<Integer> segundoVector = matricesDispersasController.listaNumerosStringToArrayInteger(elementosSegundoVector.getText());
                ArrayList<Integer> tercerVector = matricesDispersasController.listaNumerosStringToArrayInteger(elementosTercerVector.getText());

                //Ya tengo los vectores como enteros ahora toca pasar esos vectores y el tamaño de la matriz completa
                //a su respectivo método de descompresión, para que nos de la matriz completa
                if (radioButtonFC.isSelected()) {

                    startTime = System.currentTimeMillis();
                    
                    ArrayList< ArrayList<Integer>> matrizAconvertir = new ArrayList<>();
                    matrizAconvertir.add(primerVector);
                    matrizAconvertir.add(segundoVector);
                    matrizAconvertir.add(tercerVector);

                    jTextArea_Mostrador.append("\nLos vectores que ingresaste son (FC): \n");
                    this.mostrarArreglo(matrizAconvertir);

                    matrizModificarElemento = matricesDispersasController.getMatrizCompletaDesdeFC(matrizAconvertir, (Integer) jSpinnerSizeFila.getValue(), (Integer) jSpinnerSizeColumna.getValue());

                    matrizModificarElemento.get((Integer) jSpinnerIndiceFila.getValue()).set((Integer) jSpinnerIndiceColumna.getValue(), (Integer) jSpinnerNuevoValor.getValue());

                    matricesDispersasController.setMatrizCompleta(matrizModificarElemento);
                    matrizAconvertir = matricesDispersasController.convertirAformatoCoordenado();

                    jTextArea_Mostrador.append("\nLa matriz comprimida (FC) quedaría así: \n");
                    this.mostrarArreglo(matrizAconvertir);

                } else if (radioButtonCSR.isSelected()) {

                    startTime = System.currentTimeMillis();
                    
                    ArrayList< ArrayList<Integer>> matrizAconvertir = new ArrayList<>();
                    matrizAconvertir.add(primerVector);
                    matrizAconvertir.add(segundoVector);
                    matrizAconvertir.add(tercerVector);

                    jTextArea_Mostrador.append("\nLos vectores que ingresaste son (CSR): \n");
                    this.mostrarArreglo(matrizAconvertir);

                    matrizModificarElemento = matricesDispersasController.getMatrizCompletaDesdeCSR(matrizAconvertir.get(0), matrizAconvertir.get(1), matrizAconvertir.get(2), (Integer) jSpinnerSizeFila.getValue(), (Integer) jSpinnerSizeColumna.getValue());

                    matrizModificarElemento.get((Integer) jSpinnerIndiceFila.getValue()).set((Integer) jSpinnerIndiceColumna.getValue(), (Integer) jSpinnerNuevoValor.getValue());

                    matricesDispersasController.setMatrizCompleta(matrizModificarElemento);
                    matrizAconvertir = matricesDispersasController.convertirAformatoComprimidoPorFila();

                    jTextArea_Mostrador.append("\nLa matriz comprimida (CSR) quedaría así: \n");
                    this.mostrarArreglo(matrizAconvertir);

                } else if (radioButtonCSC.isSelected()) {

                    startTime = System.currentTimeMillis();
                    
                    ArrayList< ArrayList<Integer>> matrizAconvertir = new ArrayList<>();
                    matrizAconvertir.add(primerVector);
                    matrizAconvertir.add(segundoVector);
                    matrizAconvertir.add(tercerVector);

                    jTextArea_Mostrador.append("\nLos vectores que ingresaste son (CSC): \n");
                    this.mostrarArreglo(matrizAconvertir);

                    matrizModificarElemento = matricesDispersasController.getMatrizCompletaDeCSC(matrizAconvertir.get(0), matrizAconvertir.get(1), matrizAconvertir.get(2), (Integer) jSpinnerSizeFila.getValue(), (Integer) jSpinnerSizeColumna.getValue());

                    matrizModificarElemento.get((Integer) jSpinnerIndiceFila.getValue()).set((Integer) jSpinnerIndiceColumna.getValue(), (Integer) jSpinnerNuevoValor.getValue());

                    matricesDispersasController.setMatrizCompleta(matrizModificarElemento);
                    matrizAconvertir = matricesDispersasController.convertirAformatoComprimidoPorColumna();

                    jTextArea_Mostrador.append("\nLa matriz comprimida (CSC) quedaría así: \n");
                    this.mostrarArreglo(matrizAconvertir);

                }

            }
            
                            
                long endTime = System.currentTimeMillis() - startTime;
                jTextArea_Mostrador.append("\n\nTiempo de ejecución: " + endTime);

        }
    }//GEN-LAST:event_buttonActionModificarPosicionActionPerformed

    private void buttonActionSumarMatrizActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_buttonActionSumarMatrizActionPerformed

        ArrayList< ArrayList<Integer>> matriz1 = new ArrayList<>();
        ArrayList< ArrayList<Integer>> matriz2 = new ArrayList<>();
        ArrayList< ArrayList<Integer>> resultadoMatrizCompleta = new ArrayList<>();

        JRadioButton radioButtonFC = new JRadioButton("FC");
        radioButtonFC.setSelected(true); //Impedimos que el usuario presione ok sin seleccionar el método de compresión
        JRadioButton radioButtonCSR = new JRadioButton("CSR");//compressed sparse row
        JRadioButton radioButtonCSC = new JRadioButton("CSC");//compressed sparse Column
        ButtonGroup group2 = new ButtonGroup();
        group2.add(radioButtonFC);
        group2.add(radioButtonCSR);
        group2.add(radioButtonCSC);

        SpinnerNumberModel numberSpinnerModelFila = new SpinnerNumberModel(3, 3, 999, 1);
        SpinnerNumberModel numberSpinnerModelColumna = new SpinnerNumberModel(3, 3, 999, 1);
        JSpinner jSpinnerSizeFila = new JSpinner(numberSpinnerModelFila);
        JSpinner jSpinnerSizeColumna = new JSpinner(numberSpinnerModelColumna);

        JTextField elementosPrimerVector1 = new JTextField("");
        JTextField elementosSegundoVector1 = new JTextField("");
        JTextField elementosTercerVector1 = new JTextField("");

        JTextField elementosPrimerVector2 = new JTextField("");
        JTextField elementosSegundoVector2 = new JTextField("");
        JTextField elementosTercerVector2 = new JTextField("");

        Object[] params = {radioButtonFC, radioButtonCSR, radioButtonCSC, "Tamaño de Fila y columna", jSpinnerSizeFila, jSpinnerSizeColumna, "Valores 3 vectores Separados por comas", "Representación 1", elementosPrimerVector1, elementosSegundoVector1, elementosTercerVector1, "Representación 2", elementosPrimerVector2, elementosSegundoVector2, elementosTercerVector2};
        int sumar = JOptionPane.showConfirmDialog(null, params, "Matrices dispersas", JOptionPane.OK_CANCEL_OPTION);

        if (sumar == 0) {

            long startTime = 0;
            
            ArrayList<Integer> primerVector1 = matricesDispersasController.listaNumerosStringToArrayInteger(elementosPrimerVector1.getText());
            ArrayList<Integer> segundoVector1 = matricesDispersasController.listaNumerosStringToArrayInteger(elementosSegundoVector1.getText());
            ArrayList<Integer> tercerVector1 = matricesDispersasController.listaNumerosStringToArrayInteger(elementosTercerVector1.getText());

            ArrayList<Integer> primerVector2 = matricesDispersasController.listaNumerosStringToArrayInteger(elementosPrimerVector2.getText());
            ArrayList<Integer> segundoVector2 = matricesDispersasController.listaNumerosStringToArrayInteger(elementosSegundoVector2.getText());
            ArrayList<Integer> tercerVector2 = matricesDispersasController.listaNumerosStringToArrayInteger(elementosTercerVector2.getText());

            ArrayList< ArrayList<Integer>> matrizAconvertir1 = new ArrayList<>();
            matrizAconvertir1.add(primerVector1);
            matrizAconvertir1.add(segundoVector1);
            matrizAconvertir1.add(tercerVector1);

            ArrayList< ArrayList<Integer>> matrizAconvertir2 = new ArrayList<>();
            matrizAconvertir2.add(primerVector2);
            matrizAconvertir2.add(segundoVector2);
            matrizAconvertir2.add(tercerVector2);

            jTextArea_Mostrador.append("\nLos vectores que ingresaste para la matriz 1 son (FC): \n");
            this.mostrarArreglo(matrizAconvertir1);
            jTextArea_Mostrador.append("\nLos vectores que ingresaste para la matriz 2 son (FC): \n");
            this.mostrarArreglo(matrizAconvertir2);

            if (radioButtonFC.isSelected()) {

                startTime = System.currentTimeMillis();
                
                matriz1 = matricesDispersasController.getMatrizCompletaDesdeFC(matrizAconvertir1, (Integer) jSpinnerSizeFila.getValue(), (Integer) jSpinnerSizeColumna.getValue());
                matriz2 = matricesDispersasController.getMatrizCompletaDesdeFC(matrizAconvertir2, (Integer) jSpinnerSizeFila.getValue(), (Integer) jSpinnerSizeColumna.getValue());

                resultadoMatrizCompleta = matricesDispersasController.sumarMatrices(matriz1, matriz2);

                matricesDispersasController.setMatrizCompleta(resultadoMatrizCompleta);
                matriz1 = matricesDispersasController.convertirAformatoCoordenado();

                jTextArea_Mostrador.append("\nLa matriz resultado (suma) comprimida (FC) quedaría así: \n");
                this.mostrarArreglo(matriz1);

            } else if (radioButtonCSR.isSelected()) {

                startTime = System.currentTimeMillis();
                
                matriz1 = matricesDispersasController.getMatrizCompletaDesdeCSR(matrizAconvertir1.get(0), matrizAconvertir1.get(1), matrizAconvertir1.get(2), (Integer) jSpinnerSizeFila.getValue(), (Integer) jSpinnerSizeColumna.getValue());
                matriz2 = matricesDispersasController.getMatrizCompletaDesdeCSR(matrizAconvertir2.get(0), matrizAconvertir2.get(1), matrizAconvertir2.get(2), (Integer) jSpinnerSizeFila.getValue(), (Integer) jSpinnerSizeColumna.getValue());

                resultadoMatrizCompleta = matricesDispersasController.sumarMatrices(matriz1, matriz2);

                matricesDispersasController.setMatrizCompleta(resultadoMatrizCompleta);
                matriz1 = matricesDispersasController.convertirAformatoComprimidoPorFila();

                jTextArea_Mostrador.append("\nLa matriz resultado (suma) comprimida (CSR) quedaría así: \n");
                this.mostrarArreglo(matriz1);

            } else if (radioButtonCSC.isSelected()) {

                startTime = System.currentTimeMillis();
                
                matriz1 = matricesDispersasController.getMatrizCompletaDeCSC(matrizAconvertir1.get(0), matrizAconvertir1.get(1), matrizAconvertir1.get(2), (Integer) jSpinnerSizeFila.getValue(), (Integer) jSpinnerSizeColumna.getValue());
                matriz2 = matricesDispersasController.getMatrizCompletaDeCSC(matrizAconvertir2.get(0), matrizAconvertir2.get(1), matrizAconvertir2.get(2), (Integer) jSpinnerSizeFila.getValue(), (Integer) jSpinnerSizeColumna.getValue());

                resultadoMatrizCompleta = matricesDispersasController.sumarMatrices(matriz1, matriz2);

                matricesDispersasController.setMatrizCompleta(resultadoMatrizCompleta);
                matriz1 = matricesDispersasController.convertirAformatoComprimidoPorColumna();

                jTextArea_Mostrador.append("\nLa matriz resultado (suma) comprimida (CSR) quedaría así: \n");
                this.mostrarArreglo(matriz1);                
                
            }

            long endTime = System.currentTimeMillis() - startTime;
            jTextArea_Mostrador.append("\n\nTiempo de ejecución: " + endTime);            
            
        }

    }//GEN-LAST:event_buttonActionSumarMatrizActionPerformed

    private void buttonActionGetTranspuestaActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_buttonActionGetTranspuestaActionPerformed

        long startTime = 0;
        ArrayList< ArrayList<Integer>> matrizAobtenerTranspuesta = new ArrayList<>();

        JRadioButton radioButtonFC = new JRadioButton("FC");
        radioButtonFC.setSelected(true); //Impedimos que el usuario presione ok sin seleccionar el método de compresión
        JRadioButton radioButtonCSR = new JRadioButton("CSR");//compressed sparse row
        JRadioButton radioButtonCSC = new JRadioButton("CSC");//compressed sparse Column
        ButtonGroup group2 = new ButtonGroup();
        group2.add(radioButtonFC);
        group2.add(radioButtonCSR);
        group2.add(radioButtonCSC);

        SpinnerNumberModel numberSpinnerModelFila_Columna = new SpinnerNumberModel(3, 3, 999, 1);
        JSpinner jSpinnerSizeFila_Columna = new JSpinner(numberSpinnerModelFila_Columna);

        JTextField elementosPrimerVector = new JTextField("");
        JTextField elementosSegundoVector = new JTextField("");
        JTextField elementosTercerVector = new JTextField("");

        Object[] params2 = {radioButtonFC, radioButtonCSR, radioButtonCSC, "Tamaño de Fila y columna", jSpinnerSizeFila_Columna, "Valores 3 vectores Separados por comas", elementosPrimerVector, elementosSegundoVector, elementosTercerVector};
        int obtenerTranspuesta = JOptionPane.showConfirmDialog(null, params2, "Matrices dispersas", JOptionPane.OK_CANCEL_OPTION);

        if (obtenerTranspuesta != 0) {
            return;
        }

        ArrayList<Integer> primerVector = matricesDispersasController.listaNumerosStringToArrayInteger(elementosPrimerVector.getText());
        ArrayList<Integer> segundoVector = matricesDispersasController.listaNumerosStringToArrayInteger(elementosSegundoVector.getText());
        ArrayList<Integer> tercerVector = matricesDispersasController.listaNumerosStringToArrayInteger(elementosTercerVector.getText());

        ArrayList< ArrayList<Integer>> matrizAconvertir = new ArrayList<>();
        matrizAconvertir.add(primerVector);
        matrizAconvertir.add(segundoVector);
        matrizAconvertir.add(tercerVector);

        if (radioButtonFC.isSelected()) {

            startTime = System.currentTimeMillis();
            
            jTextArea_Mostrador.append("\nLos vectores que ingresaste son (FC): \n");
            this.mostrarArreglo(matrizAconvertir);

            matrizAobtenerTranspuesta = matricesDispersasController.getMatrizCompletaDesdeFC(matrizAconvertir, (Integer) jSpinnerSizeFila_Columna.getValue(), (Integer) jSpinnerSizeFila_Columna.getValue());

            matrizAconvertir = matricesDispersasController.getTranspuesta(matrizAobtenerTranspuesta);

            jTextArea_Mostrador.append("\nLa matriz transpuesta comprimida (FC) quedaría así: \n");

            matricesDispersasController.setMatrizCompleta(matrizAconvertir);

            ArrayList< ArrayList<Integer>> resultado = matricesDispersasController.convertirAformatoCoordenado();

            this.mostrarArreglo(resultado);

        } else if (radioButtonCSR.isSelected()) {
            
            startTime = System.currentTimeMillis();

            jTextArea_Mostrador.append("\nLos vectores que ingresaste son (CSR): \n");
            this.mostrarArreglo(matrizAconvertir);

            matrizAobtenerTranspuesta = matricesDispersasController.getMatrizCompletaDesdeCSR(matrizAconvertir.get(0), matrizAconvertir.get(1), matrizAconvertir.get(2), (Integer) jSpinnerSizeFila_Columna.getValue(), (Integer) jSpinnerSizeFila_Columna.getValue());

            matrizAconvertir = matricesDispersasController.getTranspuesta(matrizAobtenerTranspuesta);

            jTextArea_Mostrador.append("\nLa matriz transpuesta comprimida (CSR) quedaría así: \n");

            matricesDispersasController.setMatrizCompleta(matrizAconvertir);

            ArrayList< ArrayList<Integer>> resultado = matricesDispersasController.convertirAformatoComprimidoPorFila();

            this.mostrarArreglo(resultado);
            
            

        } else if (radioButtonCSC.isSelected()) {

            startTime = System.currentTimeMillis();
            
            jTextArea_Mostrador.append("\nLos vectores que ingresaste son (CSC): \n");
            this.mostrarArreglo(matrizAconvertir);

            matrizAobtenerTranspuesta = matricesDispersasController.getMatrizCompletaDeCSC(matrizAconvertir.get(0), matrizAconvertir.get(1), matrizAconvertir.get(2), (Integer) jSpinnerSizeFila_Columna.getValue(), (Integer) jSpinnerSizeFila_Columna.getValue());

            matrizAconvertir = matricesDispersasController.getTranspuesta(matrizAobtenerTranspuesta);

            jTextArea_Mostrador.append("\nLa matriz transpuesta comprimida (CSC) quedaría así: \n");

            matricesDispersasController.setMatrizCompleta(matrizAconvertir);

            ArrayList< ArrayList<Integer>> resultado = matricesDispersasController.convertirAformatoComprimidoPorColumna();

            this.mostrarArreglo(resultado);

        }
        
            long endTime = System.currentTimeMillis() - startTime;
            jTextArea_Mostrador.append("\n\nTiempo de ejecución: " + endTime);           


    }//GEN-LAST:event_buttonActionGetTranspuestaActionPerformed


    // Variables declaration - do not modify//GEN-BEGIN:variables
    private org.edisoncor.gui.button.ButtonAction buttonActionGenerarMatriz;
    private org.edisoncor.gui.button.ButtonAction buttonActionGetColumna;
    private org.edisoncor.gui.button.ButtonAction buttonActionGetElemento;
    private org.edisoncor.gui.button.ButtonAction buttonActionGetFila;
    private org.edisoncor.gui.button.ButtonAction buttonActionGetRepresentacion;
    private org.edisoncor.gui.button.ButtonAction buttonActionGetTranspuesta;
    private org.edisoncor.gui.button.ButtonAction buttonActionModificarPosicion;
    private org.edisoncor.gui.button.ButtonAction buttonActionSumarMatriz;
    private javax.swing.JCheckBox jCheckBoxMatrizAleatoria;
    private javax.swing.JLabel jLabelCantidadCeros;
    private javax.swing.JLabel jLabelTamanioMatriz;
    private javax.swing.JPanel jPanelFunciones;
    private javax.swing.JPanel jPanelOpciones;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JSpinner jSpinnerCantidadCeros;
    private javax.swing.JSpinner jSpinnerSizeColumna;
    private javax.swing.JSpinner jSpinnerSizeFila;
    private javax.swing.JTextArea jTextArea_Mostrador;
    private org.edisoncor.gui.label.LabelHeader labelHeader;
    // End of variables declaration//GEN-END:variables
}
