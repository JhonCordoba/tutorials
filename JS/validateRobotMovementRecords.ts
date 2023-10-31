//const recordInput: number[][] = [[1,0,0,0], [1,0,0,0], [0,1,0,0]]; //it should be true
// const recordInput: number[][] = [[1,0,0,1], [0,1,1,0]]; //it should be true

const recordInput: number[][] = [[1,0,0,0,1], [1,0,1,0,0]]; //it should be true

const numberOfRobotsInput: number = 2;


function validateRobotMovementRecords(record: number[][], numberOfRobots: number): boolean{
	for(let i = 0; i < record.length; i++){

		let numberOfRobotsInRecordI = 0;

		for(let j = 0; j < record[i].length; j++){
			if(record[i][j] === 1){
				numberOfRobotsInRecordI++;
			}
		}

		if(numberOfRobotsInRecordI != numberOfRobots){
			return false;
		}

		//if there is an initial record to compare:
		if(i > 0){
			if(!validateRecord(record[i - 1], record[i])){
				return false;
			}
		}
	}
	return true;
}


function validateRecord(previousRecord: number[], currentRecord: number[]){
	for(let i = 0; i < previousRecord.length; i++){
		if(previousRecord[i] === 1 && currentRecord[i] !== 1 && currentRecord[i + 1] !== 1 && currentRecord[i - 1] !== 1){
			return false;
		}
	}

	return true;
}


console.log( validateRobotMovementRecords(recordInput, numberOfRobotsInput) );