import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.useGlobalPipes(
		new ValidationPipe({
			disableErrorMessages: false,
			enableDebugMessages: true,
			forbidNonWhitelisted: true,
		})
	);
	app.enableCors({
		origin: "*",
		credentials: true,
	});
	await app.listen(3000);
}
bootstrap();
