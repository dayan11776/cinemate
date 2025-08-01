import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import BackUpImage from "../assets/image/empty.jpg"
import { Title } from "../components"

export const MovieDetail = () => {

    const getID = useParams()
    const id = getID.id
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    const [detail,getDetail] = useState({})
    const image = detail.poster_path?`https://image.tmdb.org/t/p/w500/${detail.poster_path}`:BackUpImage

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url)
            const data = await response.json()

            getDetail(data)
        }
        fetchData()
    },[url])

    Title(detail.title)
  return (
    <main>
        <section className="flex  flex-wrap justify-around p-7">
            <div className="lg:w-2/5 p-7">
                <div>
                    <img className="rounded" src={image} alt="" />
                </div>
            </div>
            <div  className="lg:w-3/5 p-7">
                <h1 className="my-4 dark:text-white font-bold max-sm:text-4xl text-5xl">{detail.title}</h1>
                <p className="my-4 dark:text-white font-medium text-lg">{detail.overview}</p>
                <div className="my-4 flex">
                    {
                        detail.genres?(detail.genres.map((items) => (
                            <span key={items.id} className="mr-2 border p-2 dark:text-white rounded">{items.name}</span>
                        ))):""
                    }
                </div>
                <div class="flex items-center">
                    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">{detail.vote_average}</p>
                    <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <span class=" font-medium text-gray-900  dark:text-white">{detail.vote_count}</span>
                </div>
            </div>
        </section>
    </main>
  )
}
