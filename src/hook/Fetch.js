import { useCallback, useEffect, useState } from "react"

export const Fetch = (apiPath,getSearch="") => {

    const [data,setData] = useState([])
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${getSearch}`
    
    const Data = useCallback(async () => {
        const response = await fetch(url)
        const getData = await response.json()
        setData(getData.results)
    },[url])

    useEffect(() => {
        Data()
    },[Data])

  return {data}
}
