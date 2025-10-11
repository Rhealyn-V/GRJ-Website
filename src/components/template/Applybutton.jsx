import { useId, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Download } from "lucide-react"

export default function Applybutton({ jobTitle }) {
  const id = useId()
  const [showDetails, setShowDetails] = useState(false)
  const [files, setFiles] = useState({
    certificate: null,
    coe: null,
    resume: null,
  })

  const handleFileChange = (e, type) => {
    setFiles({ ...files, [type]: e.target.files[0] })
  }

  return (
    <Dialog>
      {/* ✅ Trigger Button */}
      <DialogTrigger asChild>
        <Button
          size="lg"
          variant="outline"
          className="bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center gap-2"
        >
          <Mail className="w-4 h-4" />
          Apply for {jobTitle}
        </Button>
      </DialogTrigger>

      {/* ✅ Dialog Content — scroll only when showDetails is true */}
      <DialogContent
        className={`sm:max-w-lg backdrop-blur-md bg-white transition-all duration-300  mt-8 ${
          showDetails
            ? "max-h-[80vh] overflow-y-auto"
            : "max-h-fit overflow-hidden"
        }`}
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-3">
          <div
            className="flex size-12 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-600"
            aria-hidden="true"
          >
            <Mail className="h-5 w-5" />
          </div>
          <DialogHeader className="text-center">
            <DialogTitle className="text-lg font-semibold text-gray-800">
              Apply for {jobTitle}
            </DialogTitle>
          </DialogHeader>
        </div>

        {/* ✅ Form Section */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            alert(`Application for ${jobTitle} submitted successfully!`)
          }}
          className="space-y-5"
        >
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <Label htmlFor={`${id}-name`}>Full Name</Label>
            <Input id={`${id}-name`} placeholder="John Doe" required />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <Label htmlFor={`${id}-email`}>Email</Label>
            <Input id={`${id}-email`} placeholder="you@example.com" type="email" required />
          </div>

          {/* Other Details Checkbox */}
          <div className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              id="other-details"
              onChange={(e) => setShowDetails(e.target.checked)}
            />
            <Label htmlFor="other-details" className="text-sm font-medium text-gray-700">
              Other Details (Optional)
            </Label>
          </div>

          {/* ✅ Conditional Details Section */}
          {showDetails && (
            <div className="space-y-4 transition-all duration-300">
              <div className="flex flex-col gap-4">
                <div>
                    <a
                    href=""
                    target="_blank"
                    download
                    className="text-blue-600 hover:underline text-sm"
                    >
                    Profile Information - Downloadable File
                    </a>
                </div>
          
                <div>
                  <Label>SSS Number</Label>
                  <Input placeholder="Enter your SSS Number" />
                </div>
                <div>
                  <Label>Pag-IBIG Number</Label>
                  <Input placeholder="Enter your Pag-IBIG Number" />
                </div>
                <div>
                  <Label>TIN Number</Label>
                  <Input placeholder="Enter your TIN Number" />
                </div>
              </div>
            </div>
          )}

          {/* File Uploads */}
          <div className="space-y-4 border-t pt-3">
            <Label className="font-semibold text-gray-700">Upload Files</Label>

            {[
              { key: "certificate", label: "Certificate" },
              { key: "coe", label: "COE" },
              { key: "others", label: "Others" },
            ].map((file) => (
              <div key={file.key} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id={file.key}
                  onChange={(e) =>
                    e.target.checked
                      ? document.getElementById(`${file.key}-file`).classList.remove("hidden")
                      : document.getElementById(`${file.key}-file`).classList.add("hidden")
                  }
                />
                <Label htmlFor={file.key} className="w-24">{file.label}</Label>
                <div id={`${file.key}-file`} className="hidden flex items-center gap-2">
                  <Input
                    type="file"
                    onChange={(e) => handleFileChange(e, file.key)}
                    className="flex-1"
                  />
                  {files[file.key] && (
                    <a
                      href={URL.createObjectURL(files[file.key])}
                      download={files[file.key].name}
                      className="text-blue-600 hover:underline flex items-center gap-1"
                    >
                      <Download className="w-4 h-4" /> Download
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>





          {/* Submit */}
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium mt-4"
          >
            Send Application
          </Button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-4">
          We’ll never share your information with anyone else.
        </p>
      </DialogContent>
    </Dialog>
  )
}
