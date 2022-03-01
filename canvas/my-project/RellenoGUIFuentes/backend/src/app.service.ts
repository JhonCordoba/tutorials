import { Injectable } from "@nestjs/common";
import { CreateDataFileDto } from "./create-data-file.dto";

import * as childProcess from "child_process";
import * as util from "util";

import { createFile, getFilesList, getFile } from "./helpers/files";

@Injectable()
export class AppService {
	public async createDataFile(createDataFileDto: CreateDataFileDto): Promise<CreateDataFileDto> {
		const dataFileString = `
      sizeOfSquareRegion = ${createDataFileDto.sizeOfSquareRegion};
      amountOfCities =  ${createDataFileDto.amountOfCities};
      locations = ${createDataFileDto.locations};
    `;

		const actualDate: string = new Date(Date.now())
			.toLocaleString()
			.split("/")
			.join("-")
			.split(",")
			.join("-")
			.split(" ")
			.join("-");

		await createFile(
			__dirname + "/storage/datafiles",
			createDataFileDto.title + "-" + actualDate + ".dzn",
			dataFileString
		);

		return createDataFileDto;
	}

	public async calculateLandFillPosition({
		dataFileId,
	}: Record<string, string>): Promise<Record<string, string>> {
		const exec = util.promisify(childProcess.exec);

		try {
			const { stdout, stderr } = await exec(
				`minizinc --solver osicbc "${__dirname}"/minizinc-setting/model.mzn  "${__dirname}"/storage/datafiles/${dataFileId}`
			);
			return { result: stdout.split(";").splice(0, 3).join(" ") };
		} catch (error) {
			return { message: "Error calculating the landfill position: " + error };
		}
	}

	public async getDataFilesList(directoryPath: string): Promise<string[]> {
		return getFilesList(directoryPath);
	}

	public async getDataFile({
		dataFileId,
	}: Record<string, string>): Promise<Record<string, string>> {
		return {
			dataFile: (await getFile(__dirname + "/storage/datafiles/" + dataFileId)).toString(),
		};
	}
}
