import { useEffect, useState } from 'react'

const useFetch = (endpoints) => {
    const [data, setdata] = useState(null)
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(false)
    const api = `https://contact.mediusware.com/api` + endpoints

    useEffect(() => {
        const req_data = async () => {
            try {
                setloading(true)
                const res = await fetch(api)
                const res_json = await res.json()
                setdata(res_json)
                setloading(false)

            } catch (error) {
                seterror(error)
                setloading(false)
            }
        }

        req_data()
    }, [api])

    return { data, error, loading }
}

export default useFetch