const Home = ({isOpen, setIsOpen}) => {
  return (
    <section className={`${isOpen ? 'hidden' : 'block'} transition ease-in-out duration-500 fixed z-50 h-screen bg-home bg-cover w-full`}>
      <div className="bg-[#0D100D]/30 h-full text-center">
        <div className="py-16 h-full flex flex-col justify-around">
          <div>
            <p className="text-slate-50">THE WEDDING OF</p>
            <p className="font-msMadi text-slate-50 text-6xl pt-10">
              Dani & Rima
            </p>
            <p className="text-slate-50">- 18 Oktober 2023 -</p>
          </div>
          <div>
            <button type="button" className="bg-slate-50 px-3 py-1 rounded-xl font-semibold" onClick={() => setIsOpen(true)}>
              Buka Undangan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
