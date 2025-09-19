"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function Form({
  url,
  setUrl,
  handleGetShortUrl,
}: { url: string; setUrl: (url: string) => void; handleGetShortUrl: () => void }) {
  const [isValidUrl, setIsValidUrl] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const validateUrl = (urlString: string) => {
    if (!urlString.trim()) {
      setIsValidUrl(false)
      setErrorMessage("")
      return
    }

    try {
      const url = new URL(urlString)
      if (url.protocol === "http:" || url.protocol === "https:") {
        setIsValidUrl(true)
        setErrorMessage("")
      } else {
        setIsValidUrl(false)
        setErrorMessage("La URL debe comenzar con http:// o https://")
      }
    } catch {
      setIsValidUrl(false)
      setErrorMessage("Por favor ingresa una URL válida")
    }
  }

  useEffect(() => {
    validateUrl(url)
  }, [url])

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <Input
          type="url"
          placeholder="https://ejemplo.com/mi-enlace-muy-largo"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className={`flex-1 ${!isValidUrl && url.trim() ? "border-red-500 focus:border-red-500" : ""}`}
        />
        <Button onClick={handleGetShortUrl} disabled={!url.trim() || !isValidUrl} className="px-6">
          Acortar
        </Button>
      </div>
      {errorMessage && <p className="text-sm text-red-500 mt-1">{errorMessage}</p>}
    </div>
  )
}
