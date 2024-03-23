import { UserButton } from "@clerk/nextjs"
import { AlignJustify } from "lucide-react"
import Image from "next/image"

export const TopHeader = () => {
    return (
        <div className="flex p-5 border-b items-center justify-between md:justify-end" >
            <AlignJustify className="md:hidden cursor-pointer" />
            <Image src="/logo.svg" alt="" width={150} height={100} className="md:hidden" />
            <UserButton afterSignOutUrl="/" />
        </div>
    )
}