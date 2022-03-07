import { PowerService } from 'src/power/power.service';
export declare class DiskService {
    private powerServ;
    constructor(powerServ: PowerService);
    getData(): string;
}
