import React from "React";
import useAudio from "../../utils/useAudio"

  const AudioPlayer = ({ url }) => {
    const [playing, toggle] = useAudio(url);
  
    return (
      <div>
        <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
      </div>
    );
  };

  export default AudioPlayer;