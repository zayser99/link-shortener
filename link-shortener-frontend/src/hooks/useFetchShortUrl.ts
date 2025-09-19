import { postData } from "@/helpers/postData";
import { useState } from "react";

export const useFetchShortUrl = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetShortUrl = () => {
    if (url.trim()) {
      console.log("Fetching short URL for:", url);

      async function fetchData() {
        setLoading(true);
        setError(null); 

        try {
          const data = await postData(url);
          console.log("Response data:", data);

          if (data?.success === false) {
            setError(data.message);
            setShortUrl("");
            return;
          }

          if (data?.shortUrl) {
            setShortUrl(data.shortUrl);
          } else {
            setError("No se recibió shortUrl en la respuesta");
            setShortUrl("");
          }
        } catch (err) {
          console.error("Error fetching short URL:", err);
          setError("Error inesperado al acortar la URL");
          setShortUrl("");
        }
      }

      fetchData().finally(() => setLoading(false));
    }
  };

  return { url, setUrl, shortUrl, error, loading, handleGetShortUrl };
};
