import Image from "../assets/image/empty.jpg"
import { Title } from "../components"
import { Button } from "../components/Button"

export const PageNotFound = ({title}) => {

    Title(title)

  return (
    <main>
        <section className="flex flex-col p-7 items-center">
            <div className="my-4">
                <img className="rounded border-white border-2" src={Image} alt="Page not found" />
            </div>
            <div>
                <Button>Home</Button>
                <Button>Back</Button>
            </div>
        </section>
    </main>
  )
}
