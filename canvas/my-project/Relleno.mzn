%En el modelo que utiliza la GUI, los parámetros n y m tienen nombres sizeOfSquareRegion y amountOfCities respectivamente,
% con el fin de aumentar la legibilidad del código.
%Sin embargo, aquí se utiliza n y m para cumplir con el contrato.

/*LIST OF PARAMS OF THE MODEL */
  int: n; 
  int: m;
  array[1..m, 1..2] of int: locations;
/*HERE END THE LIST OF PARAMS OF THE MODEL */

/*LIST OF DECISION VARS*/
  var 0.0..n: landfillWest;
  var 0.0..n: landfillSouth;
  var 0..m: nearestCity;
/*HERE END THE LIST OF DECISION VARS*/


/*LIST OF CONSTRAINTS*/
  %the landfill have to be inside of the square region (redundant, implicit in var definitions).
   constraint landfillWest >= 0 /\ landfillWest <= n;
   constraint landfillSouth >= 0 /\ landfillSouth <= n;

  constraint forall(i in 1..m)(
    landfillWest != locations[i, 1] \/ landfillSouth != locations[i, 2] %los 2 puntos no pueden ser iguales simultaneamente, porque estaríamos colocando el relleno sanitario en una ciudad%
  );

  %this constraint ensure that the distance is the most possible great between ALL cities and the landfill
   constraint forall(i in 1..m)(
      (abs(landfillWest - locations[nearestCity, 1] ) + abs(landfillSouth - locations[nearestCity, 2]))  %this is we are maximizing, in other words, we are searching the city most away,
             <= %<= because this ensure that the distance between the position of the landfill and the nearest city has the distance most long
      (abs( landfillWest - locations[i, 1]) + abs(landfillSouth - locations[i, 2]))
      /*
      *In other words: we search the nearest city with the distance most away, BECAUSE WE MAXIMIZE THE DISTANCE IN THE NEAREST CITY
      */
   );


/*HERE END THE LIST OF CONSTRAINTS*/

%maximize the manhattan distance:
  solve maximize (abs(landfillWest - locations[nearestCity, 1]) + abs(landfillSouth - locations[nearestCity, 2]));  %distance between the possible o and its city nearest