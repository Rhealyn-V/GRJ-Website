import React from 'react'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
const stats = [
  { name: 'Offices worldwide', value: '23' },
  { name: 'Full-time colleagues', value: '400+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Schedule', value: <Link to="/Office_Hours" className="hover:text-sky-700">Office Hours</Link> },
]
function AboutUs() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32" id="about-us">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Work with us</h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8 text-justify">
            At GRJ JARO ENTERPRISE INC., objective is to maintain our customer’s trust by 
            delivering the best quality products which meet their expectations and set us apart in the market. 
            We will also deliver the best possible service experience to our customers by exceeding their 
            expectations and keeping our promises. We achieve his through our exceptional people, 
            excellent equipment’s, use of only the very best raw materials and robust systems that are 
            continuously improved.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
  <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">

    {/* Static links (not part of the loop) */}
    <HashLink
      smooth
      to="/Open_roles"
      className="text-sm font-semibold transition-colors duration-300 hover:text-sky-700"
    >
      Open Roles →
    </HashLink>

    <HashLink
      to="/Internship_program"
      className="text-sm font-semibold transition-colors duration-300 hover:text-sky-700"
    >
      Internship program →
    </HashLink>

    <HashLink
      smooth
      to="/Our_values"
      className="text-sm font-semibold transition-colors duration-300 hover:text-sky-700"
    >
      Our values →
    </HashLink>
    <HashLink
      to="/General_information"
      className="text-sm font-semibold transition-colors duration-300 hover:text-sky-700"
    >
      More Information →
    </HashLink>
    
  </div>

          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default AboutUs