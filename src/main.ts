import {NestFactory, Reflector} from '@nestjs/core';
import {AppModule} from './app.module';
import {FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify';
import {ClassSerializerInterceptor, ValidationPipe} from '@nestjs/common';
import {config} from '../env/config';


async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter({
            logger: true,
        })
    );

    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
    await app.listen(config.server.port, 'localhost');
}

bootstrap();
