import { useState } from "react";
import Acara from "./components/acara";
import ArRum from "./components/arRum";
import Detail from "./components/detail";
import Home from "./components/home";
import Map from "./components/map";
import Notes from "./components/notes";
// import playBtn from "./assets/play-button.png";
// import pauseBtn from "./assets/pause.png";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const musicSrc = "/music.mp3";
  // const musicSrc = "https://soundcloud.com/corbel-keep/christina-perri-a-thousand-10?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";
  const playMusic = () => {
    const audio = new Audio(musicSrc);
    audio.play();
    // console.log("music");
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
          <button
            type="button"
            className="w-10 h-10 rounded-full fixed bottom-1/4 left-1"
          >
            {/* <img src={pause} alt="pause" />
            <img src={play} alt="play" /> */}
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
