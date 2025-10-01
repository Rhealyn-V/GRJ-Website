import React from 'react';

const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Dries Vincent',
    role: 'Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Courtney Henry',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Tom Cook',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

function Teams() {
  return (
    <div className="py-16 sm:py-24 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Intro Card */}
        <div className="mb-12 max-w-4xl mx-auto bg-white/5 p-6 rounded-xl shadow-lg ring-1 ring-white/10 backdrop-blur text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet our leadership</h2>
          <p className="mt-4 text-gray-300 text-lg">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {people.map((person) => (
            <div
              key={person.name}
              className="group bg-white/5 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  className="w-24 h-24 rounded-full mb-4 border-2 border-white/20"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400">
                  {person.name}
                </h3>
                <p className="text-sm text-gray-400">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teams;
