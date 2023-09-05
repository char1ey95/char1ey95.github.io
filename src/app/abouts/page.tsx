import About from "@/common/about/about"
import LgTextBox from "@/components/boxes/lgTextBox"
import Separator from "@/components/line/separator"
import MSubject from "@/components/subjects/mSubject"

const Abouts = () => {
    return (
        <div className="mt-16 px-6 h-screen flex flex-col justify-center items-center">
            <MSubject>About</MSubject>
            <Separator />
            <About />
        </div>
    )
}

export default Abouts