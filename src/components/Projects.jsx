import EmojiText2 from "../components/EmojiText2"

const projects = [
    {
        'title': 'Modifikasi Radar Surveillance',
        'desc': 'Radar Rapier Surveillance Arhanud',
    },
    {
        'title': 'Rebuilding Meriam 57mm',
        'desc': 'Integrasi Meriam 57mm dengan alat kendali tembak',
    },
    {
        'title': 'Fa Poskodahanud Mobile',
        'desc': 'Versi First Article Posko Dahanud Mobile Bangtekidhan',
    },
    {
        'title': 'Modifikasi Radar Surveillance',
        'desc': 'Radar Rapier Surveillance Arhanud',
    },
    {
        'title': 'Rebuilding Meriam 57mm',
        'desc': 'Integrasi Meriam 57mm dengan alat kendali tembak',
    },
    {
        'title': 'Fa Poskodahanud Mobile',
        'desc': 'Versi First Article Posko Dahanud Mobile Bangtekidhan',
    },
    {
        'title': 'Modifikasi Radar Surveillance',
        'desc': 'Radar Rapier Surveillance Arhanud',
    },
    {
        'title': 'Rebuilding Meriam 57mm',
        'desc': 'Integrasi Meriam 57mm dengan alat kendali tembak',
    },
    {
        'title': 'Fa Poskodahanud Mobile',
        'desc': 'Versi First Article Posko Dahanud Mobile Bangtekidhan',
    },
]

const ProjectCard = ({ title, desc}) => {
    return (
        <div className="bg-card rounded-lg p-4">
            <img src="assets/gunung_keren.jpg" alt="" className="mb-4"/>
            <h3 className="text-[24px] underline">{ title }</h3>
            <p className="opacity-75">{ desc }</p>
        </div>
    )
}

const projectCards = projects.map((data) => <ProjectCard title={data.title} desc={data.desc}/>)

const Projects = () => {
    return (
        <div>
            <EmojiText2 text="📂 Pekerjaan Kami"/>
            <h1 className="text-[55px] mb-4"><span className="blue-gradient font-semibold">Proyek</span>, yang kami banggakan</h1>
            <div className="grid grid-cols-3 gap-4">
                {projectCards}
            </div>
        </div>
    )
}

export default Projects