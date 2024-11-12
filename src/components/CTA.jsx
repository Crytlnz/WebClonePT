import Button from "./Button"

const CTA = () => {
    return (
        <div className="bg-card rounded-xl p-8 flex justify-between h-[400px] items-center">
            <div>
                <h1 className="text-[64px] font-semibold">Kembangkan Bisnis <br />Anda <span className="blue-gradient">Sekarang!</span></h1>
                <Button text="Mari diskusikan sebuah proyek"/>
            </div>
            <img src="assets/ruanmei.jpg" alt="" className="h-full w-auto"/>
        </div>
    )
}

export default CTA