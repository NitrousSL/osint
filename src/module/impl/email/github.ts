import {
    ModuleCategory,
    ModuleType,
    IModuleMeta,
    Module,
}                         from "osint.ts";

import axios              from "axios";

const META: IModuleMeta = {
    name        : "github",
    description : "Searches for GitHub profile info based on a given email.",

    category    : ModuleCategory.Email,
    type        : ModuleType.Enrichment,
}

export class Github extends Module {

    constructor() { super(META); }

    public async query(query: string): Promise<any> {

        const response = await axios.get(`https://api.github.com/search/users?q=${query}`);

        const exists = response.data.total_count > 0;

        return {
            status : exists ? 200           : 404,
            data   : exists ? response.data : null,
        }
    }
}

module.exports = new Github;

// Path: src/module/impl/email/github.ts
