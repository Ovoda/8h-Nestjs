import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {

    constructor(private powerServ: PowerService) {

    }

    getData() {
        console.log('Drawing 20 of power from PowerService');
        this.powerServ.supplyPower(20);

        return 'data!';
    }

}
