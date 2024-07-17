import axios from "axios";
import  { useEffect, useState } from "react";

function useFetch(url){
    const [data,setData]=useState([])
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(true)

        async function fetchData(){
            try {
                const response =await axios.get(url)
                setData(response)
               
            } catch (error) {
                    setError(error)
            }
            setLoading(false)
            
        }

        useEffect(()=>{
            fetchData();

        },[])

        return (error,loading,data)
}
export default useFetch