import axios from "axios";
import { useEffect, useState } from "react";


export const API_URL = 'https://mocki.io/v1/9c8f1a64-d4c5-4b56-9d66-3c3caadcd4f0';

export default function Api() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

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
