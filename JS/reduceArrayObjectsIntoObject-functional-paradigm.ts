const objectArray: Array<Record<string, string>> = [
    {a: "xfgsdf"},
    {b: "fsdfsd2"}
  ];


  const convertObjectArrayIntoObject = (
    objectArray: Array<Record<string, string>>
  ): Record<string, string> => {
    return objectArray.reduce(
      (accumulator, currentValue) => ({ ...accumulator, ...currentValue }),
      {}
    );
  };

console.log( convertObjectArrayIntoObject(objectArray) );

console.log( convertObjectArrayIntoObject(objectArray)['a'] );


