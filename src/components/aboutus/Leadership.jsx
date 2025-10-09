import React from 'react';

const people = [
  {
    name: 'Mr. Gilbert A. Jaro',
    role: 'President',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ms. Ellaine Ann S. Jaro',
    role: 'Executive Vice President',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ms. Samantha Joyce L. Jaro',
    role: 'Managing Director',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Mr. Mariano B. Pascual',
    role: 'Vice President - Sales',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ms. Marilou Sarado',
    role: 'Regional Sales & Operation Manager',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ms. Joyrish S. Panti',
    role: 'Admin & HR Personnel Head/EA',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
    {
    name: 'Ms. Estrellita B. Isaac',
    role: 'Sr. Treasury Head',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ms. Mishell Floresta',
    role: 'Inventory & Planning Head',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
   {
    name: 'Mr. Eduardo Alsa',
    role: 'Area Sales Manager (Cavite & Laguna)',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Mr. Felix Sapico',
    role: 'Area Sales Manager (Batangas)',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ms. Angelica Narag',
    role: 'Area Sales Manager (Ibaan, Batangas)',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Mr. Ronnel Barrera',
    role: 'Area Sales Manager (Laguna)',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

function Teams() {
  return (
     <div className="py-16 sm:py-24 bg-sky-900 text-gray-900" id="Leadership">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Intro Card */}
        <div className="mb-12 max-w-4xl mx-auto bg-gray-100 p-6 rounded-xl shadow-lg ring-1 ring-gray-300 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet our leadership</h2>
          <p className="mt-4 text-gray-700 text-lg">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {people.map((person) => (
            <div
              key={person.name}
              className="group bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-indigo-50"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  className="w-24 h-24 rounded-full mb-4 border-2 border-indigo-200"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600">
                  {person.name}
                </h3>
                <p className="text-sm text-gray-600">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teams;
