import fs from "fs";

export const PathFinder = {

    // get project root path
    root: function () {
        return process.cwd();
    },

    // get project src path
    src: function () {
        return `${this.root()}/src`;
    },

    // get project dist path
    dist: function () {
        return `${this.root()}/dist`;
    },

    // get project bin path
    bin: function () {
        return `${this.root()}/bin`;
    },
}