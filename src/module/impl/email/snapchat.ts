import {
    ModuleCategory,
    ModuleType,
    IModuleMeta,
    Module,
}                         from "osint.ts";

import axios              from "axios";

const META: IModuleMeta = {
    name        : "snapchat",
    description : "Searches for SnapChat profile existence based on a given username.",

    category    : ModuleCategory.Email,
    type        : ModuleType.Existence,
}

export class Snapchat extends Module {

    constructor() { super(META); }

    public async query(query: string): Promise<any> {

        const response = await axios.post('https://bitmoji.api.snapchat.com/api/user/find',
            {
                email: query,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

        const exists = JSON.stringify(response.data).includes('{"account_type":"bitmoji"}');

        return {
            status : exists ? 200  : 404,
            data   : exists ? true : null,
        }
    }
}

module.exports = new Snapchat;

// Path: src/module/impl/email/snapchat.ts
