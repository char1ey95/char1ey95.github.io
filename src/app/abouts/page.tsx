import About from "@/common/about/about"
import LgTextBox from "@/components/boxes/lgTextBox"
import Separator from "@/components/line/separator"
import MSubject from "@/components/subjects/mSubject"

const Abouts = () => {
    return (
        <div className="mt-16">
            <MSubject>About</MSubject>
            <Separator />
            <About />
        </div>
    )
}

export default Abouts