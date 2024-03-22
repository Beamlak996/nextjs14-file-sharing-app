import { UserButton } from "@clerk/nextjs"

const FilesPage = () => {
  return (
    <div>
        <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default FilesPage