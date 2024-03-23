import { AlertCircle } from "lucide-react"

type AlertMessageProps = {
    message?: string
}

export const AlertMessage = ({message}: AlertMessageProps) => {
    return (
      <>
        {message && (
          <div className="p-4 bg-red-500 mt-5 text-white rounded-md flex items-center gap-5">
            <AlertCircle />
            {message}
          </div>
        )}
      </>
    );
}