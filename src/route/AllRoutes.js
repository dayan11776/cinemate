import { Routes, Route } from "react-router-dom"
import { MovieDetail, MovieList, PageNotFound, Search } from "../pages"

export const AllRoutes = () => {
  return (
    <div className="dark:bg-purple">
        <Routes>
            <Route path="/" element={<MovieList apiPath="movie/now_playing" title="now_playing"/>} />
            <Route path="/movie/popular" element={<MovieList apiPath="movie/popular" title="popular"/>} />
            <Route path="/movie/top_rated" element={<MovieList apiPath="movie/top_rated" title="top_rated" />} />
            <Route path="/movie/upcoming" element={<MovieList apiPath="movie/upcoming" title="upcoming" />} />
            <Route path="search/movie" element={<Search apiPath="search/movie" />} />
             <Route path="/movie/:id" element={<MovieDetail/>} />
             <Route path="*" element={<PageNotFound title="Page not found"/>} />
        </Routes>
    </div>
  )
}
