import { Title } from "../components"
import { Card } from "../components/Card"
import { Fetch } from "../hook/Fetch"
import { useSearchParams } from "react-router-dom"

export const Search = ({apiPath}) => {
      const [searchItems] = useSearchParams()
      const getSearch = searchItems.get("query")
      const {data:Data} = Fetch(apiPath,getSearch)
      Title(`Search ${getSearch}`)

    return (
      <main>
          <section className="max-w-7xl m-auto py-7">
            <div className="my-4 px-7 max-sm:text-center">
              <h1 className="dark:text-white text-5xl font-bold uppercase">{getSearch}</h1>
            </div>
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
