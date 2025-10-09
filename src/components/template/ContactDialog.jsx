import { useId } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail } from "lucide-react"

export default function ContactDialog() {
  const id = useId()

  return (
    <Dialog>
      {/* ✅ Trigger Button */}
      <DialogTrigger asChild>
        <Button
          size="lg"
          variant="outline"
          className="text-gray-600 border-white hover:bg-white hover:text-blue-700 rounded-full flex items-center gap-2"
        >
          <Mail className="w-4 h-4" />
          Get in Touch
        </Button>
      </DialogTrigger>

      {/* ✅ Dialog Content */}
      <DialogContent className="sm:max-w-md">
        {/* Header */}
        <div className="flex flex-col items-center gap-3">
          <div
            className="flex size-12 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-600"
            aria-hidden="true"
          >
            <Mail className="h-5 w-5" />
          </div>
          <DialogHeader className="text-center">
            <DialogTitle>Contact Us</DialogTitle>
            <DialogDescription>
              We’d love to hear from you! Please fill out the form below and
              we’ll get back to you soon.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            // TODO: handle form submission logic here
          }}
          className="space-y-5 mt-6"
        >
          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <Label htmlFor={`${id}-name`} className="text-sm font-medium text-gray-700">
              Full Name
            </Label>
            <Input
              id={`${id}-name`}
              placeholder="John Doe"
              type="text"
              required
              className="mt-1"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <Label htmlFor={`${id}-email`} className="text-sm font-medium text-gray-700">
              Email
            </Label>
            <Input
              id={`${id}-email`}
              placeholder="you@example.com"
              type="email"
              required
              className="mt-1"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-2">
            <Label htmlFor={`${id}-message`} className="text-sm font-medium text-gray-700">
              Message
            </Label>
            <Textarea
              id={`${id}-message`}
              placeholder="Write your message here..."
              required
              rows={4}
              className="mt-1"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
          >
            Send Message
          </Button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-5">
          We’ll never share your information with anyone else.
        </p>
      </DialogContent>
    </Dialog>
  )
}
