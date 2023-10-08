import { useState } from "react";
import Acara from "./components/acara";
import ArRum from "./components/arRum";
import Detail from "./components/detail";
import Home from "./components/home";
import Map from "./components/map";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const musicSrc = "../public/music.mp3";
  const playMusic = () => {
    const audio = new Audio(musicSrc);
    audio.play();
    console.log("music");
  };
  return (
    <>
      <main
        className="sm:w-[450px] mx-auto font-quicksand text-xl"
        onScroll={playMusic}
      >
        <Home isOpen={isOpen} setIsOpen={setIsOpen}/>
        <section className=''>
          <ArRum />
          {/* <button onClick={playMusic}>Play Music</button> */}
          <Detail />
          <Acara />
          <Map />
        </section>
      </main>
    </>
  );
}

export default App;
