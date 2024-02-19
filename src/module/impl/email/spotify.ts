import {
    ModuleCategory,
    ModuleType,
    IModuleMeta,
    Module,
}                         from "osint.ts";


import axios              from "axios";

const META: IModuleMeta = {
    name        : "spotify",
    description : "Searches for Spotify profile existence based on a given email.",

    category    : ModuleCategory.Email,
    type        : ModuleType.Existence,
}

export class Spotify extends Module {

    constructor() { super(META); }

    public async query(query: string): Promise<any> {

        const response = await axios.post(`https://spclient.wg.spotify.com/signup/public/v1/account?validate=1&email=${query}`);
        const exists = response.data.status === 20;

        return {
            status : exists ? 200  : 404,
            data   : exists ? true : null,
        }
    }
}

module.exports = new Spotify ;

// Path: src/module/impl/email/spotify.ts
