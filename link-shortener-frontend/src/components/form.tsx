"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Form({url, setUrl, handleGetShortUrl}: {url: string, setUrl: (url: string) => void, handleGetShortUrl: () => void}) {
    return (
            <div className="flex gap-2">
              <Input
                type="url"
                placeholder="https://ejemplo.com/mi-enlace-muy-largo"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleGetShortUrl} disabled={!url.trim()} className="px-6">
                Acortar
              </Button>
            </div>
    );
}
