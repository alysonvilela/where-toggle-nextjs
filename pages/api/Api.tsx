import axios from "axios";
import { useEffect, useState } from "react";



export default function Api() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_URL = 'https://mocki.io/v1/46130913-560b-4d41-8bf4-8d03cc3f5dee'

  useEffect(() => {
    setLoading(true);
    async function getApi() {
      const { data } = await axios.get(API_URL); 
      setData(data);
      setLoading(false);
    }
    getApi();
  }, [])

  return { data, loading, API_URL }
}
