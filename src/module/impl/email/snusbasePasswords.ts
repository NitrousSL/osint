import {
    ModuleCategory,
    ModuleType,
    IModuleMeta,
    Module,
}                         from "osint.ts";


import axios              from "axios";

const META: IModuleMeta = {
    name        : "snusbase-passwords",
    description : "Searches the Snusbase API v2 for passwords associated with a given email address",

    category    : ModuleCategory.Email,
    type        : ModuleType.Enrichment,
}

export class SnusbasePasswords extends Module {

    constructor() { super(META); }

    public async query(query: string): Promise<any> {

        const response = await axios.get(`https://beta.snusbase.com/v2/combo/${query}`);

        if (response.data.size === 0) {

            return {
                status : 404,
                data   : null,
            };
        }

        let passwords: string[] = [];

        Object.keys(response.data.result).forEach((key: string) => {

            response.data.result[key].forEach((entry: any) => {

                passwords.push(entry.password);
            });
        });

        return {
            status : 200,
            data   : passwords,
        };
    }
}

module.exports = new SnusbasePasswords;

// Path: src/module/impl/email/snusbasePasswords.ts
