import { ModuleCategory } from "osint/src/sdk/enum/eModuleCategory";
import { ModuleType }     from "osint/src/sdk/enum/eModuleType";

/*
    * @return { ModuleMeta }
    * @description Interface for module metadata.
*/
export interface ModuleMeta {
    name        : string;
    description : string;

    category    : ModuleCategory;
    type        : ModuleType;
}

// Path: src/sdk/interface/iModuleMeta.ts
