import {
    ModuleCategory,
    ModuleType,
    IModuleMeta,
    Module,
}                         from "osint.ts";

import { exec }           from "child_process";
import path               from "path";

const META: IModuleMeta = {
    name        : "google",
    description : "Searches Google profile info using Ghunt based on a given gmail address.",

    category    : ModuleCategory.Email,
    type        : ModuleType.Enrichment,
}

const ghunt : string = `${process.cwd()}/osint/bin/ghuntQuery.py`;
const creds : string = `${process.cwd()}/creds.txt`;

export class Google extends Module {

    constructor() { super(META); }

    public async query(query: string): Promise<any> {

        let execQuery : string = `python3.10 ${ghunt} ${query} `;

        if (!creds) { execQuery += process.env.GHUNT_CREDS; }

        const result = await new Promise((resolve, reject) => {
            exec(execQuery, (err, stdout, stderr) => {
                if (err) { reject(err); }
                resolve(stdout);
            });
        });

        const parsed = JSON.parse(<string>result);

        const exists = parsed.toString() !== 'false';

        return {
            status : exists ? 200                        : 404,
            data   : exists ? JSON.parse(<string>result) : null,
        };
    }
}

module.exports = new Google;

// Path: src/module/impl/email/google.ts
