#lang eopl

;Especificación léxica:
(define lexica '(
   (espacio (whitespace) skip)
   (numero (digit (arbno digit))  number)
   (numero ("-" digit (arbno digit)) number )
   (numero (digit (arbno digit) "." digit (arbno digit) ) number )
   (numero ("-" digit (arbno digit) "." digit (arbno digit) ) number )
   (identificador (letter (arbno (or letter digit))) symbol)
) )

;Especificación gramatical
(define gramatica

  '(
    (programa (expresion) un-programa)

    (expresion (numero) num-lit )
    (expresion ( "(" expresion primitiva expresion ")" ) exp-lit )
    (expresion (identificador) variable )
    (expresion ( "var" "(" (arbno identificador "=" expresion ) ")"  "in" expresion ) declaracion )

    (primitiva ("+") suma)
    (primitiva ("-") resta)
    (primitiva ("*") multiplicacion)
    (primitiva ("/") div)
    
    )
  
  )


;Parser:
(define scan&parse
  (sllgen:make-string-parser lexica gramatica) )

;Analizador léxico (scanner)
(define just-scan
  (sllgen:make-string-scanner lexica gramatica))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;Construídos automáticamente:
(sllgen:make-define-datatypes lexica gramatica)

(define show-the-datatypes
  (lambda () ( sllgen:list-define-datatypes  lexica gramatica) ))
;********************************


;******************unparser*************************;
;Definimos el tipo de dato struct con sus variantes, para descomponserlo con cases
;y hacer el unparse más fácil
(define unparse (lambda (exp) 

                  (cond
                    [(programa? exp) 
                      (cases programa exp
                        [un-programa (exp) (unparse exp)] ;; CUALES SON LAS VARIANTES DE UN-PROGRAMA: SOLO UN-PROGRAMA
                    )]

                    [(expresion? exp)
                     (cases expresion exp
                       [num-lit (n) (number->string n)]
                       [exp-lit (exp1 op exp2) (string-append "(" (unparse exp1)  (unparse op)  (unparse exp2) ")" ) ]
                       [variable (id)  (symbol->string id) ]
                       [ declaracion (ids exps cuerpo)  (string-append "var (" (asociarIdConExp ids exps) ") in " (unparse cuerpo)  ) ]
                       )]

                    [(primitiva? exp)
                     (cases primitiva exp
                       [suma () "+"]
                       [resta () "-"]
                       [multiplicacion () "*"]
                       [div () "/"]                              
                       )]
                    
                     )   
                    ))

(define asociarIdConExp
  (lambda (ids exps)
    (cond
      [(null? ids) ""]
      [else (string-append  " " (symbol->string (car ids)) "="   (unparse (car exps) )   (asociarIdConExp (cdr ids) (cdr exps)) )  ]
     )
  ) )
;*****************************************************;


;pruebas
;(unparse (scan&parse "1") )
;(scan&parse "(1+2)")
;(unparse (scan&parse "((1+2)*(3+4))" ))
;(unparse (scan&parse "( ( (1+2)*(3+4) )*1 )" ))
;(unparse (scan&parse "(1 + 2)") )
;(scan&parse "x")
;(unparse (scan&parse "x"))
;(scan&parse "var (x=1) in (x+2)" )
;(unparse (scan&parse "var (x=1) in (x+2)" ) )
;(scan&parse "var (x=1 y=2) in (x+2)" )
;(asociarIdConExp '(x y) '(1 2)) 
;(unparse (scan&parse "var (x=1 y=2) in (x+2)" ) )
;(unparse (scan&parse "var (x=1 y=2 z=3) in var (x=1 y=2 z=3) in (x+2)" ) )