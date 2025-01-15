import AboutHero from "../assets/images/aboutImage.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="w-full lg:w-3/4 lg:mr-auto h-auto relative">
          <img
            src={AboutHero}
            width={801.778}
            height={594.667}
            className="w-full h-auto object-cover shadow-xl"
            alt="Company leader in a green polo shirt with glasses"
            loading="lazy"
          />
          <div className="lg:absolute lg:top-1/2 lg:right-0 lg:-translate-y-1/2 lg:translate-x-1/2">
            <div className="bg-primary shadow-xl p-4 sm:p-9 flex flex-col items-center lg:block">
              <div className="max-w-lg lg:max-w-xs">
                <h2 className="text-3xl md:text-4xl font-bold text-left text-white mb-8">
                  About us
                </h2>
                <p className="text-white font-normal text-base">
                  For more than 30 years we have been delivering world-class
                  construction and we&apos;ve built many lasting relationships
                  along the way.
                  <br />
                  <br />
                  We&apos;ve matured into an industry leader and trusted
                  resource for those seeking quality, innovation and reliability
                  when building in the U.S.
                </p>
                <button
                  className="bg-white text-primary mt-16 py-3 px-4 rounded text-base font-semibold transition-all duration-300 hover:bg-primary hover:text-white hover:ring-2 hover:ring-white"
                  aria-label="More on Our History"
                >
                  More on Our History
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
