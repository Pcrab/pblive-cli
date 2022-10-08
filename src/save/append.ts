import { appendFileSync, existsSync, mkdirSync } from "fs";
import path from "path";

const append = (
    savePath: string,
): ((content: string, type: string) => void) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const startTime = `${year}-${month}-${day}-${hour}-${minute}-${second}`;
    const realPath = path.join(savePath, startTime);
    if (!existsSync(realPath)) {
        mkdirSync(realPath, { recursive: true });
    }
    return (content: string, type: string): void => {
        const finalPath = path.join(realPath, `${type}.txt`);
        appendFileSync(finalPath, content + "\n", "utf-8");
    };
};

export default append;
