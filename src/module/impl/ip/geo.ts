import {
    ModuleCategory,
    ModuleType,
    IModuleMeta,
    Module,
}                         from "osint.ts";

import axios              from "axios";

const META: IModuleMeta = {
    name        : "geo",
    description : "Searches a location for a given IP address.",

    category    : ModuleCategory.IP,
    type        : ModuleType.Enrichment,
}

export class Geo extends Module {

    constructor() { super(META); }

    public async query(query: string): Promise<any> {

        const response = await axios.get(`https://ipapi.co/${query}/json/`)

        const exists = response.data !== '';

        return {
            status : exists ? 200           : 404,
            data   : exists ? response.data : null,
        }
    }
}

module.exports = new Geo;

// Path: src/module/impl/ip/geo.ts
