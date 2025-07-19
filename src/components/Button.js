import { Link } from "react-router-dom"

export const Button = ({children}) => {
  return (
     <button className="py-2 mx-2 px-4 border rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
    hover:bg-gradient-to-r hover:from-indigo-500 hover:from-10% hover:via-sky-500 via-30% hover:to-emerald-500 hover:to-90%">
        <Link className="text-lg dark:text-white" to="/">{children}</Link>
    </button>
  )
}
