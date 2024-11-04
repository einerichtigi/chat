import { Search, MessageCircle, User, Cube, Play } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function SocialFeed() {
  return (
    <div className="flex flex-col h-screen bg-[#000033]">
      {/* Header */}
      <header className="bg-[#00BFFF] p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/placeholder.svg"
            alt="Logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <span className="text-xl font-bold text-white">KASTENL.ST</span>
        </div>
        <button className="p-2 hover:bg-blue-400 rounded-full">
          <Search className="w-6 h-6 text-white" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-4 grid gap-4 grid-cols-1 sm:grid-cols-2">
        <Card className="bg-gray-900 overflow-hidden">
          <CardContent className="p-0 relative">
            <div className="grid grid-cols-2 gap-0">
              <Image
                src="/placeholder.svg"
                alt="Post content"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
              <Image
                src="/placeholder.svg"
                alt="Post content"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">Username1051</span>
                </div>
                <div className="flex items-center gap-1">
                  <Play className="w-4 h-4" />
                  <span className="text-sm">2.8M</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 overflow-hidden">
          <CardContent className="p-0 relative">
            <Image
              src="/placeholder.svg"
              alt="Post content"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">machina_0909</span>
                </div>
                <div className="flex items-center gap-1">
                  <Play className="w-4 h-4" />
                  <span className="text-sm">768.6K</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 overflow-hidden sm:col-span-2">
          <CardContent className="p-0 relative">
            <Image
              src="/placeholder.svg"
              alt="Post content"
              width={600}
              height={400}
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">snz.jpeg</span>
                </div>
                <div className="flex items-center gap-1">
                  <Play className="w-4 h-4" />
                  <span className="text-sm">155.8K</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer Navigation */}
      <footer className="bg-[#00BFFF] p-4">
        <nav className="flex justify-around items-center">
          <Link href="#" className="text-white">
            <MessageCircle className="w-6 h-6" />
          </Link>
          <Link href="#" className="text-white">
            <Cube className="w-8 h-8" />
          </Link>
          <Link href="#" className="text-white">
            <User className="w-6 h-6" />
          </Link>
        </nav>
      </footer>
    </div>
  )
}
