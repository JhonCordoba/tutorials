//#########################################################
//CODE TO VALIDATE

const pi = 3.1415926535897932384626433832795028841971693993751;


//CONDICIONES QUE DEBE CUMPLIR:
// variables constantes
// variables que guarden un número

//LO QUE ESPERAMOS QUE PASE:
//El nombre de la variable tiene que estar en UPPERCASE 
//#########################################################

//#########################################################
//ESLINT RULE:
export default function(context){
	return {
    	VariableDeclaration(node){
        	if(node.kind === "const"){
              //en este ejemplo solo validamos la primer declaración del nodo
             const declaration = node.declarations[0];
              //aseguramos que el valor sea un número
              if(typeof declaration.init.value === "number" ){
               	
                //ahora verficamos que esté en UPPERCASE
                if(declaration.id.name !== declaration.id.name.toUpperCase()){
                	//reportamos el error:
                  	context.report({
                    	node: declaration.id,
                        message: "El nombre de la constante debe estar en mayúscula",
                      fix: function(fixer){
                      	return fixer.replaceText(declaration.id, declaration.id.name.toUpperCase())
                      }
                    })
                }
              }
            }
        }
    }
}
//#########################################################


//#########################################################
//TREE
/**
 
{
  "type": "Program",
  "start": 0,
  "end": 244,
  "loc": {
    "start": {
      "line": 2,
      "column": 0
    },
    "end": {
      "line": 2,
      "column": 63
    }
  },
  "comments": [
    {
      "type": "Line",
      "value": "CONDICIONES QUE DEBE CUMPLIR:",
      "start": 67,
      "end": 98,
      "loc": {
        "start": {
          "line": 5,
          "column": 0
        },
        "end": {
          "line": 5,
          "column": 31
        }
      },
      "range": [
        67,
        98
      ]
    },
    {
      "type": "Line",
      "value": " variables constantes",
      "start": 99,
      "end": 122,
      "loc": {
        "start": {
          "line": 6,
          "column": 0
        },
        "end": {
          "line": 6,
          "column": 23
        }
      },
      "range": [
        99,
        122
      ]
    },
    {
      "type": "Line",
      "value": " variables que guarden un número",
      "start": 123,
      "end": 157,
      "loc": {
        "start": {
          "line": 7,
          "column": 0
        },
        "end": {
          "line": 7,
          "column": 34
        }
      },
      "range": [
        123,
        157
      ]
    },
    {
      "type": "Line",
      "value": "LO QUE ESPERAMOS QUE PASE:",
      "start": 159,
      "end": 187,
      "loc": {
        "start": {
          "line": 9,
          "column": 0
        },
        "end": {
          "line": 9,
          "column": 28
        }
      },
      "range": [
        159,
        187
      ]
    },
    {
      "type": "Line",
      "value": "El nombre de la variable tiene que estar en UPPERCASE ",
      "start": 188,
      "end": 244,
      "loc": {
        "start": {
          "line": 10,
          "column": 0
        },
        "end": {
          "line": 10,
          "column": 56
        }
      },
      "range": [
        188,
        244
      ]
    }
  ],
  "range": [
    1,
    64
  ],
  "sourceType": "module",
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 64,
      "loc": {
        "start": {
          "line": 2,
          "column": 0
        },
        "end": {
          "line": 2,
          "column": 63
        }
      },
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7,
          "end": 63,
          "loc": {
            "start": {
              "line": 2,
              "column": 6
            },
            "end": {
              "line": 2,
              "column": 62
            }
          },
          "id": {
            "type": "Identifier",
            "start": 7,
            "end": 9,
            "loc": {
              "start": {
                "line": 2,
                "column": 6
              },
              "end": {
                "line": 2,
                "column": 8
              },
              "identifierName": "pi"
            },
            "name": "pi",
            "range": [
              7,
              9
            ],
            "_babelType": "Identifier"
          },
          "init": {
            "type": "Literal",
            "start": 12,
            "end": 63,
            "loc": {
              "start": {
                "line": 2,
                "column": 11
              },
              "end": {
                "line": 2,
                "column": 62
              }
            },
            "extra": {
              "rawValue": 3.141592653589793,
              "raw": "3.1415926535897932384626433832795028841971693993751"
            },
            "value": 3.141592653589793,
            "range": [
              12,
              63
            ],
            "_babelType": "NumericLiteral",
            "raw": "3.1415926535897932384626433832795028841971693993751"
          },
          "range": [
            7,
            63
          ],
          "_babelType": "VariableDeclarator"
        }
      ],
      "kind": "const",
      "trailingComments": [
        {
          "type": "Line",
          "value": "CONDICIONES QUE DEBE CUMPLIR:",
          "start": 67,
          "end": 98,
          "loc": {
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 31
            }
          },
          "range": [
            67,
            98
          ]
        },
        {
          "type": "Line",
          "value": " variables constantes",
          "start": 99,
          "end": 122,
          "loc": {
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 23
            }
          },
          "range": [
            99,
            122
          ]
        },
        {
          "type": "Line",
          "value": " variables que guarden un número",
          "start": 123,
          "end": 157,
          "loc": {
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 34
            }
          },
          "range": [
            123,
            157
          ]
        },
        {
          "type": "Line",
          "value": "LO QUE ESPERAMOS QUE PASE:",
          "start": 159,
          "end": 187,
          "loc": {
            "start": {
              "line": 9,
              "column": 0
            },
            "end": {
              "line": 9,
              "column": 28
            }
          },
          "range": [
            159,
            187
          ]
        },
        {
          "type": "Line",
          "value": "El nombre de la variable tiene que estar en UPPERCASE ",
          "start": 188,
          "end": 244,
          "loc": {
            "start": {
              "line": 10,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 56
            }
          },
          "range": [
            188,
            244
          ]
        }
      ],
      "range": [
        1,
        64
      ],
      "_babelType": "VariableDeclaration"
    }
  ]
}

 */
//#########################################################


