import { IsDefined, IsNotEmpty } from "class-validator";

export class CreateDataFileDto {
	@IsDefined()
	sizeOfSquareRegion!: number;
	@IsDefined()
	amountOfCities!: number;
	@IsDefined()
	locations!: string;
	@IsDefined()
	@IsNotEmpty()
	title!: string;
}
