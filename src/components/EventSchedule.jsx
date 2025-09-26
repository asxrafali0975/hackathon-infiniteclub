import React from "react";
import Day1 from "./Day1";
import Day2 from "./Day2";
import ElectricBorder from "../ReactBit/ElectricBorder";

export default function EventSchedule() {
  const day1 = [
    {
      time: "9:30 AM",
      title: "Opening Ceremony",
      desc: "Welcome note & rules.",
    },
    { time: "10:00 AM", title: "Lab Allotment", desc: "Lab Alloted" },
    { time: "10:00 AM - 4:30 PM", title: "Coding Time", desc: "Build mode." },
    {
      time: "4:30 PM",
      title: "Submission Deadline",
      desc: "Finalize & submit.",
    },
  ];

  const day2 = [
    {
      time: "10:00 AM",
      title: "Presentation",
      desc: "Presenting Presentation",
    },
    { time: "12:00 PM", title: "Judging", desc: "Demos & reviews." },
    { time: "1:00 PM", title: "Closing & Prizes", desc: "Winners announced." },
    { time: "2:00 PM", title: "Event Concluded", desc: "Event ends" },
  ];

  return (
    <section className="py-12 bg-[#030712] text-white border-t-2 border-t-slate-200">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Event Schedule</h2>
        <p className="text-gray-400 mb-10">
          2 action-packed days — talks, mentoring, aur coding!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Day 1 */}
          <ElectricBorder
            color="#00f0ff"
            speed={1}
            chaos={0.6}
            thickness={3}
            style={{
              borderRadius: "16px",
              display: "inline-block",
              padding: "3px", // ensures glow is visible
            }}
          >
            <div className="bg-gray-900 rounded-2xl p-6 shadow-md relative z-10">
              <Day1 day1={day1} />
            </div>
          </ElectricBorder>

          {/* Day 2 */}
          <ElectricBorder
            color="#ff00aa"
            speed={1}
            chaos={0.6}
            thickness={3}
            style={{
              borderRadius: "16px",
              display: "inline-block",
              padding: "3px", // ensures glow is visible
            }}
          >
            <div className="bg-gray-900 rounded-2xl p-6 shadow-md relative z-10">
              <Day2 day2={day2} />
            </div>
          </ElectricBorder>
        </div>
      </div>
    </section>
  );
}
