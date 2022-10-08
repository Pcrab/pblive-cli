import open from "@pcrab/pblive-lib";
import onDanmuMsg from "./danmu.js";
import onSendGift from "./gift.js";

const openRoom = (roomid: number): void => {
    open(roomid, {
        onDanmuMsg,
        onSendGift,
    });
    return;
};

export default openRoom;
