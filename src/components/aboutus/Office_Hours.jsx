import React from "react";
import { assets } from "../../assets/assets";

function Office_Hours() {
  return (
    <div className="flex justify-center items-center py-28 px-4 bg-sky-900 min-h-screen">
      <div className="w-full max-w-5xl bg-white relative text-black p-10 border border-gray-300 shadow-2xl rounded-lg">

        {/* Header */}
        <div className="relative z-10 text-center mb-6">
          <h1 className="text-2xl font-bold uppercase">
            GRJ Jaro Group of Companies
          </h1>
          <p className="text-sm font-semibold">AD-MEMO-25-0069</p>
        </div>

        {/* Title */}
        <div className="relative z-10 text-center mb-6">
          <h2 className="text-2xl font-extrabold underline underline-offset-4">
            Office Hours Schedule
          </h2>
        </div>

        {/* Intro */}
        <p className="relative z-10 text-center mb-8 text-gray-700">
          This is to formally advise everyone of the official office working
          hours, effective immediately:
        </p>

        {/* Schedule Section */}
        <div className="relative z-10 grid md:grid-cols-2 gap-8 text-center text-[18px]">
          {[
            {
              branch: "Head Office",
              sched: ["Mon - Fri: 8:00am to 5:00pm", "Sat: 8:00am to 3:00pm"],
            },
            {
              branch: "Cavite Branch",
              sched: ["Mon - Fri: 8:00am to 5:00pm", "Sat: 8:00am to 5:00pm"],
            },
            {
              branch: "Balayan Branch",
              sched: ["Mon - Fri: 8:00am to 5:00pm", "Sat: 8:00am to 5:00pm"],
            },
            {
              branch: "Ibaan Branch",
              sched: ["Mon - Fri: 8:00am to 5:00pm", "Sat: 8:00am to 5:00pm"],
            },
            {
              branch: "PuyPuy Branch",
              sched: ["Mon - Fri: 8:00am to 5:00pm", "Sat: 8:00am to 5:00pm"],
            },
            {
              branch: "Southfour Builders Operation",
              sched: ["Mon - Fri: 8:00am to 5:00pm", "Sat: 8:00am to 5:00pm"],
            },
            {
              branch: "Kansai Ueno Operation",
              sched: ["Mon - Fri: 8:00am to 5:00pm", "Sat: 8:00am to 5:00pm"],
            },
            {
              branch: "Readymix",
              sched: [
                "Mon - Fri: 7:00am to 4:00pm",
                "Mon - Fri: 8:00am to 5:00pm",
                "Sat: 7:00am to 4:00pm",
                "Sat: 8:00am to 5:00pm",
              ],
            },
          ].map((item) => (
            <div key={item.branch} className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold text-gray-900">
                {item.branch}
              </h3>
              {item.sched.map((s, i) => (
                <p key={i} className="text-gray-700 text-md">
                  {s}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Office_Hours;
