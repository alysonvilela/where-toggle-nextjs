import axios from "axios";
import { useEffect, useState } from "react";


export const API_URL = 'https://mocki.io/v1/32c0f825-98d0-472d-a47a-981c33fbec1a';

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
