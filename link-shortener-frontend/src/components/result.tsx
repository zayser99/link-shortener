"use client"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react";

export default function Form({shortenedUrl }: {shortenedUrl: string}) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    if (shortenedUrl) {
      await navigator.clipboard.writeText(shortenedUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  };

    return (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-green-800 mb-1">¡Link acortado exitosamente!</p>
                    <p className="text-green-700 text-sm font-mono break-all">{shortenedUrl}</p>
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopy}
                    className="ml-3 flex-shrink-0 bg-transparent"
                >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
            </div>
        </div>
    );
}
