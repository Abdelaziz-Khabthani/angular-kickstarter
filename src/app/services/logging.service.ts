import { Injectable } from "@angular/core";
import { GenericService } from "./generic.service";

@Injectable()
export class LogginService {
    constructor(private genericService: GenericService) {}
    log(message: string) {
        this.genericService.generic();
        console.log(message);
    }
}