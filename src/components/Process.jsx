import EmojiText2 from "./EmojiText2";

const processes = [
    {
        'title': 'Penelitian',
        'desc': 'Kami bekerjasama dengan Institut Teknologi Bandung untuk melakukan penelitian.',
    },
    {
        'title': 'Desain',
        'desc': 'Kami mendesain rancangan dan aplikasi untuk implementasi yang lebih baik.',
    },
    {
        'title': 'Pengembangan',
        'desc': 'Kami mengembangkan semua yang kami kerjakan.',
    },
    {
        'title': 'Publikasi',
        'desc': 'Kami mempublikasikan seluruh kegiatan, penelitian kami baik secara media cetak maupun video.',
    },
];

const GridItems = ({ title, desc }) => {
  return (
    <div>
      <h3 className="font-semibold mb-4">{title}</h3>
      <p className="opacity-75">{desc}</p>
    </div>
  );
};

const processItems = processes.map((data, index) => (
  <GridItems key={data.title || index} title={data.title} desc={data.desc} />
));

const Process = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-t from-blue-800 to-card p-16 rounded-xl">
      <EmojiText2 text="⏳ Proses kami" />
      <h1 className="text-[64px] blue-gradient">PROSES</h1>
      <p className="max-w-[500px] text-center mb-16">
        Sebagai startup binaan PPTIK-ITB, kami memberikan solusi nyata yang
        berkelanjutan sehingga dapat meningkatkan nilai tambah komoditas atau
        aktivitas seluruh masyarakat Indonesia.
      </p>

      <div className="grid grid-cols-4 gap-4 w-4/5">
        {processItems}
      </div>
    </div>
  );
};

export default Process;
