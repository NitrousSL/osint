import { IQueryStandardization, ModuleCategory } from "osint.ts"

export default class QDomain implements IQueryStandardization {

    readonly category    : ModuleCategory = ModuleCategory.Domain;

    readonly minLength   : number = 3;
    readonly maxLength   : number = 255;

    readonly regex     ? : RegExp = /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/;
}

module.exports = new QDomain;

// Path: src/module/query/qDomain.ts
