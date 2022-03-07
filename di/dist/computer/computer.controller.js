"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerController = void 0;
const common_1 = require("@nestjs/common");
const disk_service_1 = require("../disk/disk.service");
const cpu_service_1 = require("../cpu/cpu.service");
let ComputerController = class ComputerController {
    constructor(diskServ, cpuServ) {
        this.diskServ = diskServ;
        this.cpuServ = cpuServ;
    }
    run() {
        return [
            this.cpuServ.compute(1, 2),
            this.diskServ.getData()
        ];
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComputerController.prototype, "run", null);
ComputerController = __decorate([
    (0, common_1.Controller)('computer'),
    __metadata("design:paramtypes", [disk_service_1.DiskService,
        cpu_service_1.CpuService])
], ComputerController);
exports.ComputerController = ComputerController;
//# sourceMappingURL=computer.controller.js.map