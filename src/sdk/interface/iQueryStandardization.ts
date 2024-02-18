import { ModuleCategory } from "osint/src/sdk/enum/eModuleCategory";

export default interface IQueryStandardization {

    readonly category    : ModuleCategory;

    readonly minLength   : number;
    readonly maxLength   : number;

    readonly regex     ? : RegExp;
}

// Path: src/module/query/qEmail.ts
