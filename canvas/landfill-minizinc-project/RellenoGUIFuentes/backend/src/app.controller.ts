import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { CreateDataFileDto } from "./create-data-file.dto";

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Post("data-file")
	async createDataFile(@Body() createDataFileDto: CreateDataFileDto): Promise<CreateDataFileDto> {
		return await this.appService.createDataFile(createDataFileDto);
	}

	@Get("data-files")
	getDataFilesList() {
		return this.appService.getDataFilesList(__dirname + "/storage/datafiles");
	}

	@Post("get-data-file")
	getDataFile(@Body() dataFileId: Record<string, string>) {
		return this.appService.getDataFile(dataFileId);
	}

	@Post("calculate-landfill-position")
	calculateLandFillPosition(@Body() dataFileId: Record<string, string>) {
		return this.appService.calculateLandFillPosition(dataFileId);
	}
}
