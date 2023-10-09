import rings from '../assets/wedding-rings.svg'

const Notes = () => {
  return (
    <section className="h-screen min-h-[800px] px-5 py-10 text-center text-xl bg-[#ddd7d7] text-[#221e1a] flex flex-col items-center">
      <div className="flex flex-col gap-3 h-1/2">
        <p>
          Dengan segala kerendahan hati, kami sangat berbahagia bisa membagi
          saat-saat penting ini kepada Bapak/Ibu/Saudara/i.
        </p>
        <p>
          Besar harapan kami atas kehadiran serta iringan doa dan restunya agar
          pernikahan yang akan digelar bisa berjalan sebagaimana mestinya.
        </p>
        <p>Terima kasih.</p>
      </div>
      <div className="h-1/2 flex flex-col items-center gap-10">
        <p className="font-msMadi text-6xl pt-10">Dani & Rima</p>
        <img src={rings} className='w-20' alt='rings'/>
      </div>
    </section>
  );
};

export default Notes;
