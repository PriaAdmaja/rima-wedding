const Acara = () => {
  return (
    <section className="h-screen px-5 py-10 text-center text-lg bg-[#ddd7d7] text-[#312F2D] flex flex-col justify-between">
      <div className="rounded-lg bg-white shadow-lg p-4 h-full flex flex-col justify-around">
        <div className="flex flex-col justify-center items-center w-full">
          <p className="font-bold border-b-[2px] border-b-solid border-b-black">AKAD NIKAH</p>
          <p>Rabu, 18 Oktober 2023</p>
          <p className="font-semibold">08.00 WIB - selesai</p>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <p className="font-bold border-b-[2px] border-b-solid border-b-black">RESEPSI</p>
          <p>Rabu, 18 Oktober 2023</p>
          <p className="font-semibold">10.00 WIB - selesai</p>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <p className="font-bold border-b-[2px] border-b-solid border-b-black">LOKASI</p>
          <p>RT.16 RW.03 Jegulo Soko Tuban</p>
          <button type="button" className="py-1 px-3 shadow-lg">Google Map</button>
        </div>
      </div>
    </section>
  );
};

export default Acara;
