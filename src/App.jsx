import { useState } from "react";
import Acara from "./components/acara";
import ArRum from "./components/arRum";
import Detail from "./components/detail";
import Home from "./components/home";
import Notes from "./components/notes";
import playBtn from "./assets/play-button.png";
import pauseBtn from "./assets/pause-button.png";
import music from "/music.mp3"

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [audio, setAudio] = useState(new Audio(music));



  const playMusic = () => {
    if(isPlay === false) {
      setIsPlay(true);
      audio.play();
      return
    }
    setIsPlay(false);
    audio.pause()
  };
  return (
    <>
      <main
        className="sm:w-[450px] mx-auto font-quicksand text-xl"
        onScroll={playMusic}
      >
        <Home isOpen={isOpen} setIsOpen={setIsOpen} playMusic={playMusic} />
        <section className={`${isOpen ? "block" : "hidden"} relative`}>
          <ArRum />
          <Detail />
          <Acara />
          <Notes />
          <div className="rounded-full fixed bottom-1/4 left-1">
            <button type="button" className={`w-10 h-10 `} onClick={playMusic}>
              <img
                src={playBtn}
                alt="play"
                className={`${isPlay ? "hidden" : "block"}`}
              />
              <img
                src={pauseBtn}
                alt="pause"
                className={`${isPlay ? "block" : "hidden"}`}
              />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
