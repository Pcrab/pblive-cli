import { Command } from "commander";
import saveRoom from "./save/index.js";
import openRoom from "./open/index.js";
import pkg from "../package.json";

const program = new Command();
program
    .name(pkg.name.split("/")[1] || "pblive-cli")
    .description(pkg.description)
    .version(pkg.version);

program
    .command("save")
    .description("Save all danmus")
    .option("-p, --path [savePath]", "specific save path")
    .argument("<roomid>")
    .action((roomidStr: string, opts: { path?: string }) => {
        if (typeof roomidStr !== "string") return;
        const roomid = parseInt(roomidStr) || NaN;
        if (!roomid)
            throw Error(`Wrong roomid format! expect number, given ${roomid}`);
        const savePath = opts?.path || ".";
        saveRoom(roomid, savePath);
    });

program
    .command("open")
    .description("Open bilibili live")
    .argument("<roomid>")
    .action((roomidStr) => {
        if (typeof roomidStr !== "string") return;
        const roomid = parseInt(roomidStr) || NaN;
        if (!roomid)
            throw Error(`Wrong roomid format! expect number, given ${roomid}`);
        openRoom(roomid);
    });

program.parse();
