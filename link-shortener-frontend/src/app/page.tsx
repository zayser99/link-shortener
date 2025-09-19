"use client"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Form from "@/components/form"
import Result from "@/components/result"
import { useFetchShortUrl } from "@/hooks/useFetchShortUrl"


export default function Home() {
  const { url, setUrl, shortUrl, handleGetShortUrl } = useFetchShortUrl();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardContent className="p-8">
          <Header />
          <div className="space-y-4">

            <Form url={url} setUrl={setUrl} handleGetShortUrl={handleGetShortUrl} />

            {shortUrl && (<Result shortenedUrl={shortUrl}/>)}
            
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">Sergio Manuel Zaldivar Yerbes </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
