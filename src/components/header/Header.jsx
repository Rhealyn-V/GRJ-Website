import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { assets } from "../../assets/assets.js"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import {
  Menu,
  Home,
  Info,
  Users,
  Phone,
  Briefcase,
  FileText,
} from "lucide-react"

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const isLightBgPage = location.pathname === "/careers"

  const textColorClass = isLightBgPage
    ? "text-gray-800 hover:text-gray-900"
    : isScrolled
    ? "text-white hover:text-gray-200"
    : "text-white hover:text-gray-200"

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogoClick = () => {
    navigate("/")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <header
      className={`fixed w-full z-50 ${
        isScrolled
          ? "bg-white/10 dark:bg-white/5  backdrop-blur-md shadow-lg transition-colors duration-300 "
          : "bg-transparent transition-colors duration-300"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <div
          onClick={handleLogoClick}
          className={`-m-1.5 p-1.5 flex items-center gap-2 cursor-pointer transition-opacity duration-500 ${
    isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
  }`}
        >
          <span className="sr-only">GRJ Group</span>
          <img
            className="h-10 w-auto opacity-90"
            src={assets.logoComp}
            alt="GRJ Logo"
          />
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex items-center gap-8">
            <NavigationMenuItem>
              <HashLink
                smooth
                to="/#home"
                className={`flex items-center gap-2 text-sm font-semibold  ${textColorClass}`}
              >
                <Home className="text-indigo-400 h-4 w-4" />
                Home
              </HashLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <HashLink
                smooth
                to="/#about-us"
                className={`flex items-center gap-2 text-sm font-semibold  ${textColorClass}`}
              >
                <Info className="text-indigo-400 h-4 w-4" />
                About Us
              </HashLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <HashLink
                smooth
                to="/#careers"
                className={`flex items-center gap-2 text-sm font-semibold  ${textColorClass}`}
              >
                <Briefcase className="text-indigo-400 h-4 w-4" />
                Careers
              </HashLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <HashLink
                smooth
                to="/#ourstory"
                className={`flex items-center gap-2 text-sm font-semibold  ${textColorClass}`}
              >
                <Users className="text-indigo-400 h-4 w-4" />
                Our Story
              </HashLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <HashLink
                smooth
                to="/#contact"
                className={`flex items-center gap-2 text-sm font-semibold  ${textColorClass}`}
              >
                <Phone className="text-indigo-400 h-4 w-4" />
                Contact Us
              </HashLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Button */}
        <div className="hidden lg:flex">
          <Button
            onClick={() => navigate("/apply")}
            className="rounded-full bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm flex items-center gap-2 "
          >
            <FileText className="h-4 w-4" />
            Apply Now
          </Button>
        </div>

        {/* Mobile Menu (Sheet) */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-900 hover:bg-gray-90"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-80 sm:w-96 flex flex-col"
            >
              <SheetHeader className="flex items-center justify-between border-b pb-2">
                <SheetTitle className="flex items-center justify-between w-full">
                  <img
                    onClick={() => handleLogoClick()}
                    src={assets.logoComp}
                    alt="GRJ Logo"
                    className="h-8 cursor-pointer"
                  />
                </SheetTitle>
              </SheetHeader>

              {/* Scrollable Nav Links */}
              <nav className="mt-6 flex-1 overflow-y-auto space-y-3">
                <SheetClose asChild>
                  <HashLink
                    smooth
                    to="/#home"
                    className="flex items-center gap-3 text-base font-semibold text-gray-900 hover:text-indigo-600 transition-colors px-2 py-1"
                  >
                    <Home className="h-5 w-5" />
                    Home
                  </HashLink>
                </SheetClose>

                <SheetClose asChild>
                  <HashLink
                    smooth
                    to="/#about-us"
                    className="flex items-center gap-3 text-base font-semibold text-gray-900 hover:text-indigo-600 transition-colors px-2 py-1"
                  >
                    <Info className="h-5 w-5" />
                    About Us
                  </HashLink>
                </SheetClose>

                

                <SheetClose asChild>
                  <HashLink
                    smooth
                    to="/careers"
                    className="flex items-center gap-3 text-base font-semibold text-gray-900 hover:text-indigo-600 transition-colors px-2 py-1"
                  >
                    <Briefcase className="h-5 w-5" />
                    Careers
                  </HashLink>
                </SheetClose>

                <SheetClose asChild>
                  <HashLink
                    smooth
                    to="/#our-story"
                    className="flex items-center gap-3 text-base font-semibold text-gray-900 hover:text-indigo-600 transition-colors px-2 py-1"
                  >
                    <Users className="h-5 w-5" />
                    Our Story
                  </HashLink>
                </SheetClose>

                <SheetClose asChild>
                  <HashLink
                    smooth
                    to="/#contact"
                    className="flex items-center gap-3 text-base font-semibold text-gray-900 hover:text-indigo-600 transition-colors px-2 py-1"
                  >
                    <Phone className="h-5 w-5" />
                    Contact Us
                  </HashLink>
                </SheetClose>
              </nav>

              {/* Bottom Button */}
              <div className="mt-6 pb-4">
                <SheetClose asChild>
                  <Button
                    onClick={() => navigate("/carrers")}
                    className="w-full rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center gap-2"
                  >
                    <FileText className="h-5 w-5" />
                    Apply Now
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Navbar
