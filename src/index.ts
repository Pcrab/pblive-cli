import open from "@pcrab/pblive-lib";
import { Command } from "commander";
import pkg from "../package.json";
import onDanmuMsg from "./open/danmu.js";
import onSendGift from "./open/gift.js";

const program = new Command();
program
    .name(pkg.name.split("/")[1] || "pblive-cli")
    .description(pkg.description)
    .version(pkg.version);

program
    .command("save")
    .description("Save all danmus")
    .argument("<path>")
    .action((savePath) => {
        if (typeof savePath !== "string") return;
    });

program
    .command("open")
    .description("Open bilibili live")
    .argument("<roomid>")
    .action((str) => {
        if (typeof str !== "string") return;
        const roomid = parseInt(str) || NaN;
        if (!roomid)
            throw Error(`Wrong roomid format! expect number, given ${roomid}`);
        open(roomid, {
            onDanmuMsg,
            onSendGift,
        });
        console.log(`roomid: ${str}`);
    });

program.parse();
