import { Danmu } from "@pcrab/pblive-lib";
import chalk from "chalk";

const onDanmuMsg = (danmu: Danmu) => {
    let msg = "";
    if (danmu.user.identity.isAdmin) {
        msg += chalk.bold.bgCyanBright.blackBright(" 房 ");
    }
    if (danmu.user.identity.rank) {
        msg += chalk.bold.bgRedBright.whiteBright(
            ` 榜 ${danmu.user.identity.rank} `,
        );
    }
    if (danmu.user.badge?.isActive) {
        msg += chalk.bold
            .bgHex(danmu.user.badge.color)
            .whiteBright(` ${danmu.user.badge.name} `);
        msg += chalk.bold.bgGray.hex(danmu.user.badge.color)(
            ` ${danmu.user.badge.level > 10 ? "" : " "}${
                danmu.user.badge.level
            } `,
        );
    }
    msg += chalk.bold.bgWhiteBright.blackBright(` ${danmu.user.username}:`);
    if (danmu.emoticon) {
        msg += chalk.bold.bgGray.blackBright("『表情』");
    }
    msg += chalk.bgWhiteBright.blackBright(` ${danmu.content} `);
    console.log(msg);
};

export default onDanmuMsg;
