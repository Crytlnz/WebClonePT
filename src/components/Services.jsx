import EmojiText2 from "./EmojiText2";

const ServiceCard = ({ text1, text2 }) => {
  return (
    <div className="p-8 bg-card rounded-lg flex flex-col justify-between">
      <div className="mb-8">
        <p className="text-[20px]">{text1}</p>
        <h3 className="blue-gradient text-[32px] font-semibold">{text2}</h3>
      </div>
      <img src="assets/gunung_keren.jpg" alt="" />
    </div>
  );
};

const services = {
  top: [
    {
      text1: "Social Media",
      text2: "Marketing",
    },
    {
      text1: "Web",
      text2: "Development",
    },
    {
      text1: "App",
      text2: "Development",
    },
  ],
  bottom: [
    {
      text1: "Brand",
      text2: "Identity",
    },
    {
      text1: "Internet of",
      text2: "Things",
    },
  ],
};

const Services = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <EmojiText2 text="💼 Layanan" />
        <h1 className="text-[64px]">
          Apa yang bisa kami lakukan{" "}
          <span className="font-semibold blue-gradient">Untuk mu?</span>
        </h1>
        <p>
          Pengembangan{" "}
          <i>
            <b>Cyber-Physical System</b>
          </i>
          , yang kami lakukan dengan bermodal pengetahuan teknologi Internet{" "}
          <i>
            <b>(IOT)</b>
          </i>{" "}
          sebagai awalan pengembangannya.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {services.top.map((data, index) => (
          <ServiceCard key={`top-${index}`} text1={data.text1} text2={data.text2} />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-8">
        {services.bottom.map((data, index) => (
          <ServiceCard key={`bottom-${index}`} text1={data.text1} text2={data.text2} />
        ))}
      </div>

      <div className="px-16 py-8">
        <img
          src="https://www.lskk.co.id/wp-content/uploads/elementor/thumbs/xDSC01345-Copy-qphgr56uwlq1ydlrv2dcacr5yo7lryir8lvr9cxzf8.jpg.pagespeed.ic.UTZWP6fRTd.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Services;
