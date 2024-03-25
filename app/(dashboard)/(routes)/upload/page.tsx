"use client"
import { app } from "@/firebase-config"
import { UploadForm } from "./_components/upload-form"
import { getStorage } from "firebase/storage"

const UploadPage = () => {
  const storage = getStorage(app)

  const uploadFile = (file: File) => {

  }

  return (
    <div className="p-5 px-8 md:px-28" >
      <h2 className="text-[20px] text-center m-5" >
        Start <strong className="text-primary">Uploading</strong> File and{" "}
        <strong className="text-primary">Share</strong> it
      </h2>
      <UploadForm uploadBtnClick={()=>console.log('')} />
    </div>
  );
}

export default UploadPage