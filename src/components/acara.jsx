import daun from '../assets/daun.png'

const Acara = () => {
  return (
    <section className="h-screen min-h-[700px] px-5 py-10 text-center text-lg bg-[#ddd7d7] text-[#312F2D] flex flex-col justify-between">
      <div className="rounded-lg bg-white shadow-lg p-4 h-full flex flex-col justify-around items-center">
        <div className="flex flex-col justify-center items-center w-full">
          <p className="font-bold text-xl font-cinzel border-b-[2px] border-b-solid border-b-black mb-2">
            Akad Nikah
          </p>
          <p>Rabu, 18 Oktober 2023</p>
          <p className="font-semibold">08.00 WIB - selesai</p>
        </div>
        <img src={daun} alt='daun' width={80}/>
        <div className="flex flex-col justify-center items-center w-full">
          <p className="font-bold text-xl font-cinzel border-b-[2px] border-b-solid border-b-black mb-2">
            Resepsi
          </p>
          <p>Rabu, 18 Oktober 2023</p>
          <p className="font-semibold">10.00 WIB - selesai</p>
        </div>
        <img src={daun} alt='daun' width={80} className='rotate-180'/>
        <div className="flex flex-col justify-center items-center w-full">
          <p className="font-bold text-xl font-cinzel border-b-[2px] border-b-solid border-b-black mb-2">
            Lokasi
          </p>
          <p>Kediaman mempelai wanita</p>
          <p className="font-semibold">RT.16 RW.03 Jegulo Soko Tuban</p>
          <a
            href="https://maps.app.goo.gl/N4CqrDC3enw7sAj69"
            className="py-1 px-5 shadow-lg mt-4 bg-[#605d56] text-white rounded-md"
          >
            Open Map
          </a>
        </div>
      </div>
    </section>
  );
};

export default Acara;
