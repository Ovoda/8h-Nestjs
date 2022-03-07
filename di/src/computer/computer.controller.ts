import { Controller, Get } from '@nestjs/common';
import { DiskService } from 'src/disk/disk.service';
import { CpuService } from 'src/cpu/cpu.service';


@Controller('computer')
export class ComputerController {

    constructor(
        private diskServ: DiskService,
        private cpuServ: CpuService
    ) { }

    @Get()
    run() {
        return [
            this.cpuServ.compute(1, 2),
            this.diskServ.getData()
        ];
    }
}
