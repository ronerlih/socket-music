import { Synth } from "tone";
//create a synth and connect it to the master output (your speakers)
// const sounds = [280, 320, 350,370,400, 470, 520,540, 560,590,610,640]

export default {
    play: yPosition => {
        const synth = new Synth().toMaster();
        synth.triggerAttackRelease((yPosition), "8n")}
};
