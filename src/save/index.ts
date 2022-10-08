import path from "path";
import open from "@pcrab/pblive-lib";
import append from "./append.js";

const saveRoom = (roomid: number, savePath: string): void => {
    const save = append(path.join(savePath, roomid.toString(10)));
    open(roomid, {
        onAllMsg: (msg, raw) => {
            if (typeof raw === "number") {
                save(
                    `${new Date().toJSON()}-${JSON.stringify(msg)}`,
                    "HEART_BEAT",
                );
                return;
            }
            save(JSON.stringify(msg), raw.cmd);
            return;
        },
    });
    return;
};

export default saveRoom;
