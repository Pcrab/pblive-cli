import chalk from "chalk";
import { SendGift } from "@pcrab/pblive-lib";

const onSendGift = (gift: SendGift) => {
    console.log(
        chalk.bgWhiteBright.bold(
            `感谢 ${gift.user.username} 赠送的 ${gift.count} 个 ${gift.name} ！ `,
        ),
    );
};

export default onSendGift;
