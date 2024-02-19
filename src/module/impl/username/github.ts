import {
    ModuleCategory,
    ModuleType,
    IModuleMeta,
    Module,
}                         from "osint.ts";


import axios              from "axios";

const META: IModuleMeta = {
    name        : "github",
    description : "Searches for GitHub profile info based on a given username.",

    category    : ModuleCategory.Username,
    type        : ModuleType.Enrichment,
}

export class GitHub extends Module {

    constructor() { super(META); }

    public async query(query: string): Promise<any> {

        const response = await axios.get(`https://api.github.com/users/${query}`);

        const exists = response.data.login.toLowerCase() === query.toLowerCase();

        return {
            status : exists ? 200           : 404,
            data   : exists ? response.data : null,
        }
    }
}

module.exports = new GitHub;

// Path: src/module/impl/username/github.ts
