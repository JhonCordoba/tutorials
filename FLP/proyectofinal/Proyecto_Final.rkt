;Jhon Alejandro Córdoba Figueroa (201810247)
;Jhon Henry Carabali Miranda (201910001)
;Vanessa Quintero Torres (201810224)

#lang eopl

;###############################DEFINICIÓN DE LÉXICA#####################################
(define especificacion-lexica
   '(
     (espacio-blanco (whitespace) skip)
     (comentario ("\\" (arbno (not #\newline))) skip)

     (numero (digit (arbno digit)) number);enteros
     (numero ("-" digit (arbno digit)) number);enteros negativos

     (numero (digit (arbno digit) "." digit (arbno digit)) number);flotantes
     (numero ("-" digit (arbno digit) "."  digit (arbno digit)) number);flotantes negativos

     (numero-octal ("#o" digit (arbno digit) ) number)
     
     
     (true-val ( "#true" ) string)
     (false-val ( "#false" ) string)
     
     (identificador (letter (arbno (or letter digit "?"))) symbol);caracteres

     (cadena ("\"" letter (arbno (not #\newline)) "\"") string)
     (caracter ( "'" letter "'") symbol)
     
     ))
;#############################FIN DE DEFINICIÓN DE LÉXICA###################################

;###############################DEFINICIÓN DE GRAMÁTICA#####################################
(define especificacion-gramatical
  '(
    (programa ("<?" globales expression "?>" ) un-programa)

    ;VARIABLES GLOBALES
    ;la función extend-global debe validar que no haya otra variable con el mismo id.
    (globales ("globales" "{" ( separated-list  asignate ","  ) "}" ) var-globales)
    
    ;IDENTIFICADORES
    (expression (identificador) identificador-exp)
    
    ;DATOS
    (expression (numero) numero-lit)
    (expression (numero-octal) numero-lit-octal)
    (expression (expr-bool) bool)
    (expression (caracter) caracter-exp) ;caracter

    ;Cadena
    (expression (cadena) cadena-exp)
    

    ;CONSTRUCTORES DE DATOS PREDEFINIDOS
    (expression (lista-covid) lista)
    (lista-covid ("["  (separated-list expression ";")   "]") lista-unica-variante) 

    (expression (vector-covid) expr-vector)
    (vector-covid ("#" "[" (separated-list expression ";") "]") vector-unica-variante)
    
    (expression (registro-covid) registro)
    (registro-covid ("{" (separated-list asignate ",") "}") registro-unico-variante)
    
    ;;PRIMITIVA ARITMÉTICAS INFIJA PARA ENTEROS:
    (expression ("(" expression numero-primitiva-binaria expression ")" ) primapp-bin-enteros-exp)
    (expression (primitiva-unaria "(" expression  ")") primapp-un-enteros-exp)

    ;;PRIMITIVA ARITMÉTICAS INFIJA PARA OCTALES:
    (expression ("#o-bin" "(" expression numero-primitiva-binaria expression ")") primapp-bin-octales-exp)
    (expression ("#o-un"  "(" expression ")" primitiva-unaria ) primapp-un-octales-exp)

    ;;PRIMITIVAS PARA CADENAS
    (expression ("#string-append" "(" (separated-list cadena ",") ")" ) primapp-string-exp-append)
    (expression ("#string-length" "(" cadena ")" )  primapp-string-exp-lenght)

    ;;PRIMITIVAS DE LISTAS
    (expression ("#empty-list?" "(" lista-covid ")" ) primapp-list-exp-empty?)
    (expression ("#empty-list" "(" ")" ) primapp-list-exp-empty)
    (expression ("#create-list" "("")" ) primapp-list-exp-create)
    (expression ("#list?" "(" expression ")" ) primapp-list-exp-list?)
    (expression ("#list-head" "(" lista-covid ")" ) primapp-list-exp-head)
    (expression ("#list-tail" "(" lista-covid ")" ) primapp-list-exp-tail)
    (expression ("#append-list" "(" ( separated-list lista-covid ";" ) ")"  ) primapp-list-exp-append)
    (expression ("#get-elem-lista" "(" lista-covid  expression ")" ) primapp-list-get-elem)
    (expression ("#list-length" "(" ( separated-list lista-covid ";" ) ")"  ) primapp-list-exp-length) 
    ;(expression ("#list-length" "("  lista-covid ")"  ) primapp-list-exp-length)

    ;;PRIMITIVA DE VECTORES
    (expression ("#vector?" "(" vector-covid ")" ) primapp-vect-exp-vect?)
    (expression ("#crear-vector" "(" expression ")" ) primapp-vect-exp-create)
    (expression ("#ref-vector" "(" expression vector-covid ")" ) primapp-vect-exp-ref)
    (expression ("#set-vector" "(" expression expression vector-covid ")" ) primapp-vect-exp-set)
    
     ;;PRIMITIVAS DE  REGISTROS
    (expression ("#create-record" "("")" ) primapp-record-exp-create)
    (expression ("#set-record" "(" asignate ";" registro-covid ")" ) primapp-record-exp-set)
    (expression ("#get-record" "(" identificador ";" registro-covid ")" ) primapp-record-exp-get)
    (expression ("#record?" "(" expression ")" ) primapp-record-exp-record?)

    ;DEFINICIONES
    (asignate (identificador "=" expression) asignate-exp)
    (expression ("$C-VID-VAL") c-vid-val-exp)

    ;ESTRUCTURA DE CONTROL
    (expression ("if" "(" expr-bool ")" "{" expression "}" "else" "{" expression "}") if-exp)
    (expression ("cond" "{" (arbno "[" expression expression "]") "}" "else" "{" expression "}" ) cond-exp )
    (expression ("while" "(" expr-bool ")" "do" expression "done") while-exp)

    (time-prepositions ("to") time-preposition-to)
    (time-prepositions ("downto") time-preposition-downto)
    (expression ("for"  identificador "=" expression time-prepositions expression "do" expression "done") for-to-exp)
         
    (expression ("var" "(" (separated-list identificador "=" expression ",") ")" "in" expression ) var-exp)
    (expression ("cons" "(" (separated-list identificador "=" expression ",") ")" "in" expression ) cons-exp)    

    ;PROCEDIMIENTOS
    (expression ("function" "(" (separated-list identificador ",") ")" "{" expression "}")  procedimiento-definicion)
    (expression ("invocacion(" expression (arbno expression) ")") procedimiento-invocacion)
    ;ejemplo de rec: rec{ miFuncion(x) = begin if(x<0) return 0; x+1; miFuncion(x--) end } in (miFunction 3)
    (expression ("rec" "{" (arbno identificador "(" (separated-list identificador ",") ")" "=" expression) "}"  "in" expression) rec-exp)  
    (expression ("unic" "(" (separated-list identificador "=" expression ",") ")" "in" expression ) unic-exp)     

    ;;Asignación
    (expression ("sequence" expression (arbno ";" expression)  "end") sequence-exp)    
    (expression ("set" identificador "->" expression) set-exp)  


    (expr-bool ("compare" "(" expression pred-prim expression  ")" ) expr-bool_compare)
    (expr-bool (oper-bin-bool  "(" expr-bool "," expr-bool  ")" ) expr-bool_oper-bin-bool)
    (expr-bool (true-val) true-exp)
    (expr-bool (false-val) false-exp)
    (expr-bool (oper-un-bool  "(" expr-bool ")" ) expr-bool_oper-un-bool )
    (pred-prim ("<") pred-prim-menor)
    (pred-prim (">") pred-prim-mayor)
    (pred-prim ("<=") pred-prim-menor_igual)
    (pred-prim (">=") pred-prim-mayor_igual)
    (pred-prim ("==") pred-prim-igual_igual)
    (pred-prim ("<>") pred-prim-diff)    
    (oper-bin-bool ("and") open-bin-bool-and)
    (oper-bin-bool ("or") open-bin-bool-or)
    (oper-bin-bool ("xor") open-bin-bool-xor)
    (oper-un-bool ("not") oper-un-bool_not)
    
    (numero-primitiva-binaria ("+") suma)
    (numero-primitiva-binaria ("-") resta)
    (numero-primitiva-binaria ("*") multi)
    (numero-primitiva-binaria ("%") residuo) ; usar funcion remainder
    (numero-primitiva-binaria ("/") div)
    (primitiva-unaria ("++") incr-prim)
    (primitiva-unaria ("--") decr-prim)
    
    ; características adicionales
    (primitiva ("zero?") zero-test-prim)    
    (type-exp ("int") int-type-exp)
    (type-exp ("bool") bool-type-exp)
    (type-exp ("(" (separated-list type-exp "*") "->" type-exp ")")
              proc-type-exp)
    
    ;;;;;;;;
    ))
;###############################FIN DE DEFINICIÓN DE GRAMÁTICA#####################################


;###############################CONSTRUCIONES AUTOMÁTICAS POR EOPL#####################################
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;Tipos de datos construídos automáticamente:
(sllgen:make-define-datatypes  especificacion-lexica especificacion-gramatical)

;muestra los tipos dedatos creados automáticamente por make-define-datatypes
(define show-the-datatypes
  (lambda () ( sllgen:list-define-datatypes   especificacion-lexica especificacion-gramatical) ))
;********************************

;Parser: recibe una lista de tokens y retorna el árbol de sintaxis abstracta, el cual es el que ejecuta el interpretador.
(define scan&parse
  (sllgen:make-string-parser especificacion-lexica especificacion-gramatical) )

;Analizador léxico (scanner) lo único que hace es retornar la lista de tokens, para pasarselo al parser
(define just-scan
  (sllgen:make-string-scanner  especificacion-lexica especificacion-gramatical))


;El Interpretador (FrontEnd + Evaluación + señal para lectura )
(define interpretador
  (sllgen:make-rep-loop "--> "
    (lambda (pgm) (eval-program  pgm))
    (sllgen:make-stream-parser 
      especificacion-lexica
      especificacion-gramatical)))
;############################FIN DE CONSTRUCIONES AUTOMÁTICAS POR EOPL##################################

;#################################IMPLEMENTACIÓN DEL INTERPRETADOR######################################
;eval-program: <programa> -> numero
; función que evalúa un programa teniendo en cuenta un ambiente dado (se inicializa dentro del programa)

(define eval-program
  (lambda (pgm)
    (cases programa pgm
      (un-programa (globales body) (eval-expression body  (extend-env (get-global-ids globales) (get-global-values globales) (empty-env)) ) )
      )
   )
 )

(define get-global-ids
  (lambda (variablesGlobales)
    (cases globales variablesGlobales
      (var-globales (listaDeAsignates)

                    (map

                     (lambda (a)
                       (cases asignate a
                        (asignate-exp (ids values) ids) 
                      ))

                      listaDeAsignates

                     )

                    
             )
      ) ) )

(define get-global-values
  (lambda (variablesGlobales)
    (cases globales variablesGlobales
      (var-globales (listaDeAsignates)

                    (map

                     (lambda (a)
                       (cases asignate a
                        (asignate-exp (ids values) (eval-expression values (empty-env) )) 
                      ))

                      listaDeAsignates

                     )

                    
             )
      ) ) )

;eval-expression: <expression> <enviroment> -> numero
; evalua la expresión en el ambiente de entrada
(define eval-expression
  (lambda (exp env)
    
    (cases expression exp
      (identificador-exp (id) (apply-env env id) )
      (c-vid-val-exp () "$C-VID-VAL")
      (numero-lit (datum) datum)
      (numero-lit-octal (datum) datum)
      (bool (datum) datum)
      (caracter-exp (datum) datum)
      (cadena-exp (datum) datum)
      (lista (list) list)
      (expr-vector (vect) vect)
      (registro (dato) dato)

      ;PRIMITIVAS NUMEROS
      (primapp-bin-enteros-exp (numero1 operacion numero2)
                               (let (
                                     ;variables
                                     (valor1 (eval-expression numero1 env))
                                     (valor2 (eval-expression numero2 env))
                                     )
                                 ;cuerpo
                                 (evaluar-operacion valor1 valor2 operacion)
                                 ))
      (primapp-un-enteros-exp (operacion numero)
                               (let (
                                     ;variables
                                     (valor (eval-expression numero env))
                                     )
                                 ;cuerpo
                                 (evaluar-operacion-unaria valor operacion)
                                 )
                              )    
      (primapp-bin-octales-exp (numero_octal1 operacion numero_octal2)
                               (let (
                                     ;variables
                                     (valor1 (eval-expression numero_octal1 env))
                                     (valor2 (eval-expression numero_octal2 env))
                                     )
                                 ;cuerpo
                                 (evaluar-operacion valor1 valor2 operacion)
                                 )
                               )
      (primapp-un-octales-exp (numero operacion)
                               (let (
                                     ;variables
                                     (valor (eval-expression numero env))
                                     )
                                 ;cuerpo
                                 (evaluar-operacion-unaria valor operacion)
                                 )
                              )

      ;PRIMITIVAS CADENAS
      (primapp-string-exp-append (listaDeCadenas) listaDeCadenas)
      (primapp-string-exp-lenght (cadena) cadena)

      ;PRIMITIVAS LISTAS
      (primapp-list-exp-empty? (lista) (lista-vacia? lista))
      (primapp-list-exp-length (lista) (getLengthOfList lista))
      (primapp-list-exp-create () '())
      (primapp-list-exp-empty () '()) 
      (primapp-list-exp-list? (exp) (lista? exp))
      (primapp-list-exp-head (lista) (get-list-head lista) )
      (primapp-list-exp-tail (lista) (get-list-tail lista) ) ;primapp-list-exp-append
      (primapp-list-exp-append (listOflists) (append-lists listOflists) )
      (primapp-list-get-elem (lista index) (eval-expression (getElemOfLista lista index) env))
      
      ;;PRIMITIVAS VECTORES
      (primapp-vect-exp-vect? (exp) (isvector? exp))
      (primapp-vect-exp-create (exp) (crear-vector exp))
      (primapp-vect-exp-ref (pos vect) (eval-expression (ref-vector-covid (setRefVector pos vect)) env ));(ref-vector-covid )
      (primapp-vect-exp-set (val pos vectorcovid) (set-vector (setRefVector pos vectorcovid) val))
      
      ;PRIMITIVAS REGISTROS
      (primapp-record-exp-create () (registro-unico-variante '()) ) 
      (primapp-record-exp-set (key-value record) (set-record key-value record #t) )
      (primapp-record-exp-get (key record) (get-record key record) ) ;primapp-record-exp-record?
      (primapp-record-exp-record? (exp) (record? exp))
      
      (sequence-exp (exp1 exp2) exp1)
      (if-exp (test-exp true-exp false-exp)  (if (true-value? (eval-expression test-exp env))
                                                 (eval-expression true-exp env)
                                                 (eval-expression false-exp env)
                                                 ) )
      (cond-exp (valid result body) body)
      (while-exp (valid body) valid)
      (for-to-exp (index value action hasta body) body)
      
      (var-exp (ids rands body)
               (let ((args (eval-rands rands env)))
                 (eval-expression body
                                  (extend-env ids args env))))
      
      (cons-exp (ids rands body) rands )
      
      (procedimiento-definicion (ids body) (closure ids body env) )      
      (procedimiento-invocacion (rator rands)
                                (let ((proc (eval-expression rator env))
                                      (args (eval-rands rands env)))
                                  (if (procval? proc)
                                      (apply-procedure proc args)
                                      (eopl:error 'eval-expression
                                                  "Attempt to apply non-procedure ~s" proc))))
      (rec-exp (proc-names idss bodies letrec-body) proc-names )
      (unic-exp (ids rands body) rands )
      (set-exp (id body) body )
      
      )
    
    ))
;#############################FIN DE IMPLEMENTACIÓN DEL INTERPRETADOR###################################


;###############################FUNCIONES AUXILIARES#####################################
;****************************************************************************************
; funciones auxiliares para encontrar la posición de un símbolo
; en la lista de símbolos de un ambiente

(define rib-find-position 
  (lambda (sym los)
    (list-find-position sym los)))

(define list-find-position
  (lambda (sym los)
    (list-index (lambda (sym1) (eqv? sym1 sym)) los)))

(define list-index
  (lambda (pred ls)
    (cond
      ((null? ls) #f)
      ((pred (car ls)) 0)
      (else (let ((list-index-r (list-index pred (cdr ls))))
              (if (number? list-index-r)
                (+ list-index-r 1)
                #f))))))

;******************************************************************************************
; funciones auxiliares para aplicar eval-expression a cada elemento de una 
; lista de operandos (expresiones)
(define eval-rands
  (lambda (rands env)
    (map (lambda (x) (eval-rand x env)) rands)))

(define eval-rand
  (lambda (rand env)
    (eval-expression rand env)))

(define evaluar-operacion
(lambda (v1 v2 op)
  (cases numero-primitiva-binaria op
    (suma () (+ v1 v2))
    (resta () (- v1 v2))
    (multi () (* v1 v2))
    (residuo () (remainder v1 v2))
    (div () (/ v1 v2))
    (else #f)
  )))

(define evaluar-operacion-unaria
(lambda (v1 op)
  (cases primitiva-unaria op
    (incr-prim () (+ v1 1))
    (decr-prim () (- v1 1))
    (else #f)
  )))


;true-value?: determina si un valor dado corresponde a un valor booleano falso o verdadero
(define true-value?
  (lambda (x)
    (not (zero? x))))
;*******************************************************************************************
;###############################FIN DE FUNCIONES AUXILIARES#################################

;########################################PROCEDIMIENTOS###########################################
(define-datatype procval procval?
  (closure
   (ids (list-of symbol?))
   (body expression?)
   (env environment?)))

;apply-procedure: evalua el cuerpo de un procedimientos en el ambiente extendido correspondiente
(define apply-procedure
  (lambda (proc args)
    (cases procval proc
      (closure (ids body env)
               (eval-expression body (extend-env ids args env))))))
;########################################FIN DE PROCEDIMIENTOS####################################
   
;########################################AMBIENTES###########################################
; Ambiente inicial
(define init-env
  (lambda ()
    (extend-env
     '(i v x)
     '(1 5 10)
     (empty-env))))

;definición del tipo de dato ambiente
(define-datatype environment environment?
  (empty-env-record)
  (extended-env-record
   (syms (list-of symbol?))
   (vec vector?)
   (env environment?)))

;empty-env:      -> enviroment
;función que crea un ambiente vacío
(define empty-env  
  (lambda ()
    (empty-env-record)))       ;llamado al constructor de ambiente vacío 


;extend-env: <list-of symbols> <list-of numbers> enviroment -> enviroment
;función que crea un ambiente extendido
(define extend-env
  (lambda (syms vals env)
    (extended-env-record syms (list->vector vals) env)))

;extend-env-recursively: <list-of symbols> <list-of <list-of symbols>> <list-of expressions> environment -> environment
;función que crea un ambiente extendido para procedimientos recursivos
(define extend-env-recursively
  (lambda (proc-names idss bodies old-env)
    (let ((len (length proc-names)))
      (let ((vec (make-vector len)))
        (let ((env (extended-env-record proc-names vec old-env)))
          (for-each
            (lambda (pos ids body)
              (vector-set! vec pos (closure ids body env)))
            (iota len) idss bodies)
          env)))))

;iota: number -> list
;función que retorna una lista de los números desde 0 hasta end
(define iota
  (lambda (end)
    (let loop ((next 0))
      (if (>= next end) '()
        (cons next (loop (+ 1 next)))))))

;función que busca un símbolo en un ambiente
(define apply-env
  (lambda (env sym)
    (ref-vector-covid (apply-env-ref env sym))))
     ;(apply-env-ref env sym)))
    ;env))

(define apply-env-ref
  (lambda (env sym)
    (cases environment env
      (empty-env-record ()
                        (eopl:error 'apply-env-ref "No binding for ~s" sym))
      (extended-env-record (syms vals env)
                           (let ((pos (rib-find-position sym syms)))
                             (if (number? pos)
                                 (a-ref pos vals)
                                 (apply-env-ref env sym)))))))
;########################################FIN DE AMBIENTES#########################################

;################IMPLEMENTACIÓN DE INTERFAZ PARA PROGRAMADORES CLIENTES#######################
;LISTAS:
(define lista-vacia?
  (lambda (lista)
  (cases lista-covid lista
    (lista-unica-variante (lista) (if (= (length lista) 0) #true #false ) ) )))

(define getLengthOfList
  (lambda (lista)
  (cases lista-covid lista
    (lista-unica-variante (lista) (length lista)))))

(define getElemOfLista
  (lambda (lista index) ;(eval-expression index empty-env)))
    (cases lista-covid lista
      (lista-unica-variante (lista) 
                           (cond
                                [(lista-vacia? (lista-unica-variante lista)) (eopl:error 'nth-element "List too short by ~s elements.~%" (+ (eval-expression index empty-env) 1)) ]
                                [(zero? (eval-expression index empty-env)) (car lista) ]
                                [(getElemOfLista (lista-unica-variante (cdr lista)) (numero-lit (- (eval-expression index empty-env) 1)) )]                                 
                            )
                            ))))

(define lista?
  (lambda (exp)
  (cases expression exp
    (lista (lista) #t)
    (else #f)
    )))

(define get-list-head
  (lambda (lista)
  (cases lista-covid lista
    (lista-unica-variante (lista) (car lista) ) )))

(define get-list-tail
  (lambda (lista)
  (cases lista-covid lista
    (lista-unica-variante (lista) (last_element lista) ) )))

(define (last_element l)
  (cond ((null? (cdr l)) (car l))
        (else (last_element (cdr l)))))



(define (append-lists lists)

  (if (null? (cdr lists))  (cases lista-covid (car lists) (lista-unica-variante (lista)   lista ) ) 
  
  (cases lista-covid (car lists)
    (lista-unica-variante (lista) (append  lista  (append-lists (cdr lists)) )  ) )
  )
)

;VECTOR  (vect vector?)
(define isvector?
  (lambda (exp)
  (cases vector-covid exp
     (vector-unica-variante (vect) #true)
     (else #f)
    )))

(define crear-vector
  (lambda (exp)
  (cases expression exp
     (numero-lit (num) (make-vector num) )
     (else #f)
    )))

(define setRefVector
  (lambda (pos vect)
    (cases vector-covid vect
          (vector-unica-variante (vectaux) (a-ref (eval-expression pos (empty-env)) (list->vector vectaux));
    )
    )
  )
  )

;*******************************************************************************************
;Referencias

(define-datatype reference reference?
  (a-ref (position integer?)
         (vec vector?)))

;;Extractor de referencia
(define ref-vector-covid
  (lambda (ref)
    (primitive-deref ref)))

(define primitive-deref
  (lambda (ref)
    (cases reference ref
      (a-ref (pos vec)
             (vector-ref vec pos)))))

;;Asignación/cambio referencia
(define set-vector
  (lambda (ref val)
    (primitive-setref! ref val)))

(define primitive-setref!
  (lambda (ref val)
    (cases reference ref
      (a-ref (pos vec)
             (vector-set! vec pos val)))))

;REGISTROS
(define (set-record key-value record first)
   ;ejemplo para construir un registro por aqui
   ;(registro-unico-variante (list (asignate-exp 'x  (numero-lit 2) )  ))
    (cases registro-covid record
      (registro-unico-variante (registro) ; (get-value (car registro))
                               (cond
                                 [(eqv? registro empty)  (list key-value )] ; criterio de parada
                                 
                                 [(if (eqv? (get-id (car registro)) (get-id key-value))
                                      ( if first  (registro-unico-variante (append (list key-value) (cdr registro) )) (append (list key-value) (cdr registro) ) )
                                      ( if first  (registro-unico-variante (append (list(car registro)) (set-record key-value (registro-unico-variante(cdr registro)) #f) )) (append (list (car registro)) (set-record key-value (registro-unico-variante(cdr registro)) #f) ) )
                                   )
                                 ]
                                 
                                 )
                               )
      (else #f)
      )  
)

(define (get-record key record)
  (cases registro-covid record
      (registro-unico-variante (registro) 
                               (cond
                                 [(eqv? registro '()) empty] ; criterio de parada
                                
                                 [(if (eqv? (get-id (car registro))  key) (get-value (car registro)) (get-record key (registro-unico-variante(cdr registro)))  )]
                                 
                                 )
                               )
      (else #f)
      ) 
  )
(define (get-value a)
  (cases asignate a
    (asignate-exp (ids values) values) 
  )
 )
(define (get-id a)
  (cases asignate a
    (asignate-exp (ids values) ids) 
  )
 )
(define record?
  (lambda (exp)
  (cases expression exp
    (registro (registro) #t)
    (else #f)
    )))
;##############FIN DE IMPLEMENTACIÓN DE INTERFAZ PARA PROGRAMADORES CLIENTES#####################



;#########################################EJEMPLOS#############################################
;#variables
(scan&parse "<? globales{} variablePrueba ?>")
(scan&parse "<? globales{x=4} variable2Prueba ?>")

;enteros
(scan&parse "<? globales{x=4} 2 ?>")
(scan&parse "<? globales{x=4} (5 + 2) ?>")
(scan&parse "<? globales{x=4}  --(5) ?>")
(scan&parse "<? globales{x=4} ++(x) ?>")

;flotantes
(scan&parse "<? globales{x=4} 1.1 ?>")
(scan&parse "<? globales{x=4} 2.99 ?>")

;octales
(scan&parse "<? globales{x=4} #o123 ?>") ;esta monda hace magia, lo convierte a decimal automáticamente
(scan&parse "<? globales{x=4} #o-bin( #o123 + #o123  ) ?>")
(scan&parse "<? globales{x=4} #o-un(#o123)++ ?>")
(scan&parse "<? globales{x=#o1} #o-bin( x - x  ) ?>")
(scan&parse "<? globales{x=#o10} #o-bin( x % #o3  ) ?>")

;booleanos
(scan&parse "<? globales{x=4} #true ?>")
(scan&parse "<? globales{x=4} #false ?>")

;oper-bin-bool
(scan&parse "<? globales{x=4} and ( compare (id1 < id2), compare (id4 > id2) ) ?>" )

;cadena de caracteres 
(scan&parse "<? globales{x=4}  \"hola mundo\" ?>")
(scan&parse "<? globales{x=4}  \"otra cadena\" ?>")
(scan&parse "<? globales{x=4}  #string-length(\"hola\") ?>")
(scan&parse "<? globales{x=4}  #string-append (\"hola\", \"mundo\") ?>")
;(interpretador) -> <? globales{x=4}  #string-append ("hola", "mundo") ?>

;caracteres
(scan&parse "<? globales{x=4}  'h' ?>")
(scan&parse "<? globales{x=4}  'a' ?>")

;variables
(scan&parse "<? globales{x=4} var (id1 = 1 ) in id2 ?>")
(scan&parse "<? globales{x=4} var (id1 = 1, id2 = 2, id3 = 3 ) in id3 ?>")

;constantes
(scan&parse "<? globales{x=4} cons (id1 = 1) in id2 ?>")
(scan&parse "<? globales{x=4} cons (id1 = 1, id2 = 2, id3 = 3) in id3 ?>")

;rec
(scan&parse "<? globales{x=4} rec { id1 (id2, id3) = id4 } in id5  ?>")
(scan&parse "<? globales{x=4} rec { id1 (id2, id3) = id4  id6 (id7, id8) = id9 } in id5  ?>")


(scan&parse "<? globales{x=4} unic (id1 = id2) in id3  ?>")
(scan&parse "<? globales{x=4} unic (id1 = id2, id4 = id5) in id3  ?>")


;;;Constructores de Datos Predefinidos:
;Lista
(scan&parse "<? globales{x=4}  [id1; id2] ?>")
(scan&parse "<? globales{x=4} #empty-list?([id1; id2]) ?>")
(scan&parse "<? globales{x=4} #empty-list() ?>")
(scan&parse "<? globales{x=4} #create-list() ?>")
(scan&parse "<? globales{x=4} #list?( [id1; id2] ) ?>")
(scan&parse "<? globales{x=4} #list-head( [id1; id2; id3; id4] ) ?>")
(scan&parse "<? globales{x=4} #list-tail( [id1; id2; id3; id4] ) ?>")
(scan&parse "<? globales{x=4} #append-list( [id1; id2] ; [id3]) ?>")
(scan&parse "<? globales{x=4} #list-length([id1; id2]) ?>")
(scan&parse "<? globales{x=4} #get-elem-lista([id1; id2] 1) ?>")
(scan&parse "<? globales{x=5} #get-elem-lista([id1; id2; id3; id4; id5; id6; id7] 5) ?>")
(scan&parse "<? globales{x=5, y=2, w=3, h=5} #get-elem-lista([id1; id2; x; id4; 5; id6; id7] 4) ?>")

(scan&parse "<? globales{x=4} #list-length( [id1; id2]) ?>")

; Vector
(scan&parse "<? globales{x=4}  #[1 ; 2] ?>" )
(scan&parse "<? globales{x=4} #vector?( #[1 ; 2] ) ?>")
(scan&parse "<? globales{x=4} #crear-vector( 8 ) ?>")
(scan&parse "<? globales{x=4} #ref-vector( 2 #[1; 2; 4; 5; 6] ) ?>")
(scan&parse "<? globales{x=4, y=7} #ref-vector( 3 #[1; 2; 4; y; 6] ) ?>")
(scan&parse "<? globales{x=4} #set-vector( 3 3 #[1; 2; 4; y; 6] ) ?>")
;(ref-vector-covid (apply-env-ref (init-env) 'x))


;Registro
(scan&parse "<? globales{x=4} { x=1 , y=3 } ?>")
(scan&parse "<? globales{x=4} #create-record() ?>") ;
(scan&parse "<? globales{x=4} #record?({ x=1 , y=3 }) ?>")
(scan&parse "<? globales{x=4} #record?( x ) ?>") 
(scan&parse "<? globales{x=4} #set-record( z=4;{ x=1 , y=3 } ) ?>") ; ->> { x=1 , y=3 ,z=4 }
(scan&parse "<? globales{x=4} #set-record( x=4;{ x=1 , y=3 } ) ?>") ; ->> { x=4 , y=3  }
(scan&parse "<? globales{x=4} #get-record( y;{ x=1 , y=3 , z=100 } ) ?>")
(scan&parse "<? globales{x=4} #get-record( p;{ x=1 , y=3 , z=100 } ) ?>")


; compare
(scan&parse "<? globales{x=4} compare (id1 < id2) ?>" )
(scan&parse "<? globales{x=4} compare (id1 <> id2) ?>" )


;procedimiento
(scan&parse "<? globales{x=4} function(x,y, z){ y } ?>")
(scan&parse "<? globales{x=4} var ( x = function(x,y, z){ y } ) in myExpression ?>")
(scan&parse "<? globales{x=4} var ( a = 1 ) in a ?>")
(scan&parse "<? globales{x=4} var ( p = function(x){ (x + 2) } ) in invocacion(p 2) ?>")
;Estructura de control
(scan&parse "<? globales{x=4} if ( compare (4 < 5) ) { 'h' } else { \"otra cadena\"} ?>" )
(scan&parse "<? globales{x=4} if ( compare (4 < 5) ) { 1 } else { 2 } ?>" )

(scan&parse "<? globales{x=4} cond { [ compare (4 < 5) 4 ]  [ compare (1 < 2) 1 ]} else { \"otra cadena\" } ?>" )
(scan&parse "<? globales{x=4} while ( compare (4 < 5) ) do var (id1 = 1) in id2 done ?>" )
(scan&parse "<? globales{x=4} for i = 0 to 4 do i done ?>")
(scan&parse "<? globales{x=4} for i = 4 downto 0 do i done ?>")

;;Asignación
(scan&parse "<? globales{x=4} set x -> 8 ?>")
(scan&parse "<? globales{x=4} set x -> set y -> 8 ?>")
(scan&parse "<? globales{ x = 5 , y = 3 , w = 4 , p = 3} sequence set x -> 8; set y -> 1; set z -> 2 end ?>")
(scan&parse "<? globales{ x = 5 , y = 3 , w = 4 , p = 3}
                var ( x = 9 , z = 4 , p = 7) in
	            sequence
		     set x -> 8;
		     set y -> 1;
		     set z -> 2; 
	             ( ( ( ( x + y ) + z ) + p) + w)
	            end ?>")

;Ejemplo con la función factorial aplicada a una lista para revisar cómo utilizarán la construcción de listas en llamados recursivos.
(scan&parse "<? globales{x=4} rec { fact(x) = if ( compare( x > 0 ) ) { #append-list([x] ; [invocacion(fact --(x))] ) } else { 1 } } in invocacion(fact 6) ?>")

;Falta la implementación de la función filtro que reciba un predicado y una lista. La función deberá retornar la lista filtrada con los valores que cumplan el predicado.

(scan&parse "<? globales{x=4} 
		var (
				filtro = function(pred, listaauxdos) {
					sequence
						set listaparametro -> [];
						for i = 0 to 4 do 
							
							++(i)  
						done;
						listaparametro
					end
				
				}
			) 
		in 
			invocacion(filtro number? [a; 8]) 
?>")
;#################################FIN DE EJEMPLOS###############################################################

;#################################NOTAS IMPORTANTES###############################################################
;(eval-program x) recibe un x que es un árbol de sintaxis abstracta, por lo tanto para poder llamarlo, se haría algo así:
;(eval-program (scan&parse "<? globales{} 2 ?>"))
;Para evitar llamar a scan&parse y luego a eval-program, es mejor llamar a interpretador, el cual ya hace ese proceso y nos permite interactuar.
;#################################FIN DE NOTAS IMPORTANTES###############################################################

(interpretador)