import { DiskService } from 'src/disk/disk.service';
import { CpuService } from 'src/cpu/cpu.service';
export declare class ComputerController {
    private diskServ;
    private cpuServ;
    constructor(diskServ: DiskService, cpuServ: CpuService);
    run(): (string | number)[];
}
