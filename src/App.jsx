import { useState } from "react";
import Acara from "./components/acara";
import ArRum from "./components/arRum";
import Detail from "./components/detail";
import Home from "./components/home";
import Map from "./components/map";
import Notes from "./components/notes";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const musicSrc = "../public/music.mp3";
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
        <Home isOpen={isOpen} setIsOpen={setIsOpen} playMusic={playMusic}/>
        <section className={`${isOpen ? 'block' : 'hidden'}`}>
          <ArRum />
          <Detail />
          <Acara />
          <Notes />
        </section>
      </main>
    </>
  );
}

export default App;
