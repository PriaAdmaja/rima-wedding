const Map = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-between px-5 py-10">
      <p>Lokasi</p>
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d880.3752401575503!2d111.94514662321772!3d-7.072884936686791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid!4v1696775740793!5m2!1sid!2sid"
        width="400"
        height="300"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d880.3752401575503!2d111.94514662321772!3d-7.072884936686791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid!4v1696775740793!5m2!1sid!2sid"
        loading="lazy"
        width="full"
        height={600}

      ></iframe>
    </section>
  );
};

export default Map;
