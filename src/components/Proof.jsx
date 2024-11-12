const Proof = () => {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="grid grid-cols-3">
        <p className="leading-10">
          Kami mendasarkan pekerjaan kami pada konsep, menyusun strategi dengan
          cermat, dan melaksanakannya secara kreatif, menciptakan merek,
          merancang situs web, dan memberikan pengalaman digital yang luar
          biasa.
        </p>
        <h3 className="font-light col-span-2 text-[40px]">
          Menggunakan , Desain,{" "}
          <span className="yellow-gradient font-semibold">
            Teknologi, dan Pemasaran
          </span>
          , kami membentuk Pengalaman{" "}
          <span className="yellow-gradient font-semibold">Merek Digital</span>{" "}
          yang mendorong{" "}
          <span className="yellow-gradient font-semibold">Sukses Anda</span> di
          dunia digital.
        </h3>
      </div>
      <span className="w-4/5 h-[1px] bg-white opacity-40"></span>
      <div className="w-4/5 grid grid-cols-5 text-center">
        <div className="flex items-center justify-center">
          <div>
            <p className="text-[36px]">254 rb</p>
            <p className="text-[16px]">Successful Projects</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <span className="w-[1px] h-full bg-white opacity-20"></span>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <p className="text-[36px]">8 Tahun</p>
            <p className="text-[16px]">Years in Business</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <span className="w-[1px] h-full bg-white opacity-20"></span>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <p className="text-[36px]">35</p>
            <p className="text-[16px]">Team Members</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proof;
