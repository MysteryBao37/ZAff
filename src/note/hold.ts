import Note from "./note.js";
import Tap from "./tap.js";
import TimingGroup from "./timinggroup.js";

class Hold extends Tap
{
    timeEnd: number;

    constructor({
        time = 0,
        timeEnd = 0,
        track = 0
    } = {}) {
        super();
        this.time = time;
        this.timeEnd = timeEnd;
        this.track = track;
    }

    clone(): Hold
    {
        return new Hold({
            time: this.time,
            timeEnd: this.timeEnd,
            track: this.track
        });
    }

    moveBy(t: number): this
    {
        this.time += t;
        this.timeEnd += t;
        return this;
    }

    moveTo(t: number): this
    {
        this.timeEnd = t + this.timeEnd - this.time;
        this.time = t;
        return this;
    }

    toString(): string
    {
        return "hold({1},{2},{3});".arg(
            Math.floor(this.time),
            Math.floor(this.timeEnd),
            this.track
        );
    }
}

export default Hold;