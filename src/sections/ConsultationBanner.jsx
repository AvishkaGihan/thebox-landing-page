import bannerImage from "../assets/images/bannerImage.png";

const ConsultationBanner = () => {
  return (
    <section
      className="relative min-h-fit w-full overflow-hidden"
      aria-label="Consultation Banner"
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70 z-10" aria-hidden="true" />

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
        aria-hidden="true"
      />

      {/* Content container */}
      <div className="relative z-20 h-full flex flex-col justify-center px-8 py-24 max-w-6xl mx-auto">
        <div className="flex flex-col items-start md:flex-row md:items-center justify-between  gap-10">
          <div className="flex flex-col items-start gap-6">
            <h2 className="text-white text-3xl font-bold ">
              Free consultation with exceptional quality
            </h2>
            <p className="text-white text-xl font-normal">
              {" "}
              Just one call away:{" "}
              <a
                href="tel:+841102703"
                className="underline"
                aria-label="Call us at +84 1102 2703"
              >
                +84 1102 2703
              </a>
            </p>
          </div>
          <button
            type="button"
            aria-label="Request consultation"
            className=" px-4 py-3.5 rounded-sm border-2 border-white text-center text-white text-base font-semibold transition-all duration-300 hover:bg-white hover:text-primary"
          >
            Get your consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBanner;
