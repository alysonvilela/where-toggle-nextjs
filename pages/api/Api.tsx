import axios from "axios";
import { useEffect, useState } from "react";

export default function Api() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_URL = 'https://mocki.io/v1/e807d0f0-495b-4d04-8bc7-67cc626b5950'

  useEffect(() => {
    setLoading(true);
    async function getApi() {
      const { data } = await axios.get(API_URL); 
      setData(data);
      setLoading(false);
    }
    getApi();
  }, [])

  return { data, loading}
}
