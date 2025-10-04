import { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { assets } from '../../assets/assets.js';
import  BasicButtons  from './button/Button.jsx';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';

const products = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of your traffic',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will convert',
    href: '#',
    icon: ArrowPathIcon,
  },
];

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const isLightBgPage = location.pathname === '/careers';

  const textColorClass = isLightBgPage
  ? 'text-gray-800 hover:text-gray-900' // dark text for light bg pages
  : isScrolled
    ? 'text-gray-800 hover:text-gray-900' // scrolled: dark text
    : 'text-white hover:text-gray-200'; // default: light text

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
  navigate('/');
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
  }, 100); // Wait a moment for the navigation to happen
};

  return (
    <header className={`fixed w-full z-50 ${
      isScrolled ? 'bg-white/30 backdrop-blur-md transition-colors duration-300' : 'bg-transparent transition-colors duration-300'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <div onClick={handleLogoClick} className="-m-1.5 p-1.5 flex items-center gap-2 cursor-pointer">
            <span className="sr-only">GRJ Group</span>
            <div className=" p-1 opacity-90">
            <img
              className="h-15 w-auto  opacity-90"
              src={assets.logoComp}
              alt="GRJ Logo"
            />
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Menu */}
        <PopoverGroup className="hidden lg:flex lg:items-center lg:gap-x-10">
          {/* Product Popover */}
          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton
                  className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-300 ${textColorClass}`}
                >
                  Product
                  <ChevronDownIcon
                    className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </PopoverButton>

                <PopoverPanel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 rounded-3xl bg-white dark:bg-gray-900 shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-4 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800 group-hover:bg-white dark:group-hover:bg-gray-700">
                          <item.icon className="h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-indigo-600" />
                        </div>
                        <div>
                          <a href={item.href} className="block font-semibold text-gray-900 dark:text-white">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600 dark:text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-gray-800 bg-gray-50 dark:bg-gray-800">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <item.icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          {/* Static Links */}
          <HashLink
            smooth
            to="/#contact"
            className={`text-sm font-semibold transition-colors duration-300 ${textColorClass}`}
          >
            Contact
          </HashLink>
          <Link
            to="/careers"
            className={`text-sm font-semibold transition-colors duration-300 ${textColorClass}`}
          >
            Careers
          </Link>
          <HashLink
            smooth
            to="/#about-us"
            className={`text-sm font-semibold transition-colors duration-300 ${textColorClass}`}
          >
            About Us
          </HashLink>
        </PopoverGroup>

        {/* Login Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <BasicButtons/>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white dark:bg-gray-900 p-6 sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <div  onClick={() => {
                handleLogoClick();
                setMobileMenuOpen(false); // Close mobile menu too
              }} className="-m-1.5 p-1.5 cursor-pointer">
              <span className="sr-only">GRJ Group</span>
              <img
                className="h-8 w-auto opacity-90"
                src={assets.logoComp}
                alt="GRJ Logo"
              />
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    Product
                    <ChevronDownIcon
                      className={`h-5 w-5 transform transition-transform ${open ? 'rotate-180' : ''}`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg px-6 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {item.name}
                      </a>
                    ))}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>

            <HashLink smooth
            to="/#contact" className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              Contact
            </HashLink>
            <Link to="/careers" className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              Careers
            </Link>
            <HashLink smooth
             to="/#about-us" className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              About Us
            </HashLink>

            <div className="mt-6">
              <a href="#" className="block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                Apply Now
              </a>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Navbar;
