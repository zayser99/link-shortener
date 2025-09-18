import { Link } from "lucide-react"

export default function Header() {
    return (
        <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Link className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Acortador de URLs</h1>
            <p className="text-gray-600 text-sm">Ingresa tu URL para acortarla</p>
        </div>
    );
}
