const Detail = () => {
  return (
    <section className="h-screen px-5 py-10 text-center text-xs flex flex-col justify-between">
      <p className="h-1/3">
        Dengan memohon Rahmat dan Ridho Allah SWT, Kami bermaksud mengundang
        Bapak/Ibu/Saudara/i untuk hadir dalam pernikahan putra/putri kami
      </p>
      <div className="flex flex-col justify-between flex-3 h-2/3 text-sm mb-10">
        <div className="relative">
          <p className="font-msMadi left-1/2 -translate-x-1/2 -top-10 absolute text-9xl opacity-10 -rotate-2">Dani</p>
          <p className="font-cinzel text-xl">Muhammad Hamdani</p>
          <p>Putra pertama Bapak Sadi dan Ibu Khusnul Wati</p>

        </div>
        <p className="text-md">dengan</p>
        <div className="relative">
        <p className="font-msMadi -top-10 left-1/2 -translate-x-1/2 absolute text-9xl opacity-10 -rotate-2">Rima</p>
          <p className="font-cinzel text-xl">Siti Karimatus Sa'adah</p>
          <p>Putri pertama Bapak Mahbub Zunaidi dan Ibu Genduk Mu'anis</p>
        </div>
      </div>
    </section>
  );
};

export default Detail;
