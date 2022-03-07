import { Controller, Get } from "@nestjs/common";

@Controller('app')
export class AppController {
    @Get()
    getRootRoute(): string {
        return 'hi there!';
    }

    @Get('bye')
    getByeThre() {
        return 'bye there!';
    }
}