const logosTop = [
  { src: "../../../src/assets/collegeslogo/acharya-logo.png", alt: "acharya college" },
  { src: "../../../src/assets/collegeslogo/ACS.png", alt: "ACS" },
  { src: "../../../src/assets/collegeslogo/akash-institute-of-engineering-and-technology.jpg", alt: "akash-institute" },
  { src: "../../../src/assets/collegeslogo/Bapuji.jpg", alt: "bapuji" },
  { src: "../../../src/assets/collegeslogo/BMS banglore.jpg", alt: "BMS" },
  { src: "../../../src/assets/collegeslogo/BMS.jpg", alt: "bms", h: "h-12" },
  { src: "../../../src/assets/collegeslogo/Brindavan.jpg", alt: "brindavan" },
];

const logosBottom = [
  { src: "../../../src/assets/collegeslogo/Cambridge.png", alt: "cambridge" },
  { src: "../../../src/assets/collegeslogo/CEC.jpg", alt: "CEC", h: "h-10" },
  { src: "../../../src/assets/collegeslogo/CIT.jpg", alt: "CIT", h: "h-10" },
  { src: "../../../src/assets/collegeslogo/CMRIT.png", alt: "CMRIT", h: "h-10" },
  { src: "../../../src/assets/collegeslogo/DRAmbedkar.jpg", alt: "DrAmbedkar", h: "h-10" },
  { src: "../../../src/assets/collegeslogo/RVCollege.jpg", alt: "RVcollege", h: "h-8" },
  { src: "../../../src/assets/collegeslogo/Revauniversity.jpg", alt: "Reva" },
];

const LogoRow = ({ logos, animation }) => (
  <div className="flex overflow-hidden w-full">
    <div
      className={`flex gap-16 lg:gap-24 items-center whitespace-nowrap pl-4 will-change-transform ${animation}`}
    >
      {[...logos, ...logos].map((logo, i) => (
        <img
          key={i}
          src={logo.src}
          alt={logo.alt}
          className={`partner-logo ${logo.h || "h-9"} w-auto object-contain`}
        />
      ))}
    </div>
  </div>
);

const HiringPartners = () => {
  return (
    <section className="relative w-full min-h-[350px] flex flex-col justify-center bg-surface overflow-hidden py-12 border-y border-slate-100">

      {/* dotted background */}
      <div className="absolute inset-0 opacity-[0.4] bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto relative z-10 marquee-wrapper">

        {/* heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brandRed animate-pulse" />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Academic Excellence
            </span>
          </div>

          <div className="text-center mb-10">
  

        <h3 className="text-2xl lg:text-3xl font-extrabold text-brandNavy">
              Our Elite Network of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandRed to-orange-600">
              Partner Colleges
            </span>
        </h3>
      </div>
        </div>

        {/* marquee */}
        <div className="marquee-mask flex flex-col gap-8 marquee-container">
          <LogoRow logos={logosTop} animation="animate-scroll-left" />
          <LogoRow logos={logosBottom} animation="animate-scroll-right" />
        </div>

      </div>
    </section>
  );
};

export default HiringPartners;
