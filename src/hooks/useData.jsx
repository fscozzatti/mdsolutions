import { useEffect, useState } from 'react'
import axios from 'axios'


const useData = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const setAllData = async () => {

            const url = 'http://api.mediastack.com/v1/news?access_key=c77f1203003aed60b2de5d7cc67dbee1'

            try {

                const { data } = await axios.get(url)
                setData(data.data)
                
                
                

            } catch (error) {
                if (error.response) { // Errores que nos responde el server
                    console.error("Ha ocurrido un error en el servidor")
                } else if (error.request) { // Errores que suceden por no llegar al server
                    console.error("Verifique la conexión a internet")
                } else { // Errores imprevistos
                    console.error("Error al cargar los datos")
                }                
            }

        }
            setAllData()

    }, [])

    return { data }
}

export default useData
