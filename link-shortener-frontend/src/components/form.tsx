"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Form() {
    return (
            <div className="flex gap-2">
              <Input
                type="url"
                placeholder="https://ejemplo.com/xxxxxxxx"
                className="flex-1"
              />
              <Button  className="px-6">
                Acortar
              </Button>
            </div>
    );
}
