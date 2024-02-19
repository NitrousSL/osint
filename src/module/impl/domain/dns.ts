import {
    ModuleCategory,
    ModuleType,
    IModuleMeta,
    Module,
}                         from "osint.ts";

import axios              from "axios";

const META: IModuleMeta = {
    name        : "dns",
    description : "Searches for DNS records within a given domain name using API Ninjas.",

    category    : ModuleCategory.Domain,
    type        : ModuleType.Enrichment,
}

export class DNS extends Module {

    constructor() { super(META); }

    public async query(query: string): Promise<any> {

        const response = await axios.get(`https://api.api-ninjas.com/v1/dnslookup?domain=${query}`, {
            headers: {
                'X-Api-Key': process.env.API_NINJAS_KEY as string
            }
        });

        const exists = response.data !== '';

        return {
            status : exists ? 200           : 404,
            data   : exists ? response.data : null,
        }
    }
}

module.exports = new DNS;

// Path: src/module/impl/domain/dns.ts
