
import Acara from "./components/acara";
import Detail from "./components/detail";
import Home from "./components/home";

function App() {
  const musicSrc = '../public/music.mp3'
  const playMusic = () => {
    const audio = new Audio(musicSrc)
    audio.play()
    console.log('music');
  }
  return (
    <>
      <main className="sm:w-[450px] mx-auto font-quicksand text-xl" onScroll={playMusic}>
        <Home />
        {/* <button onClick={playMusic}>Play Music</button> */}
        <Detail />
        <Acara />
      </main>
    </>
  );
}

export default App;
