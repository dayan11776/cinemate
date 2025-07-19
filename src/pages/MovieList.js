import { Title } from "../components"
import { Card } from "../components/Card"
import { Fetch } from "../hook/Fetch"

export const MovieList = ({apiPath,title}) => {

    const {data:Data} = Fetch(apiPath)
    Title(title)
    
  return (
    <main>
        <section className="max-maxWidth m-auto py-7">
          <div className="flex flex-wrap justify-center md:justify-evenly">
            {
              Data && Data.map((movies) => (
                <Card key={movies.id} movies={movies} />
              ))
            }
            </div>
        </section>
    </main>
  )
}
