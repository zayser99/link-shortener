import { useState } from "react"

export const useFetchShortUrl = () => {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [loading, setLoading] = useState(false);

    const handleGetShortUrl = () => {
        if (url.trim()) {
            // TODO: llamada a api
            setShortUrl("https://shorturl.com/xxxx");
        }
    }

    return { url, setUrl, shortUrl, handleGetShortUrl };

}