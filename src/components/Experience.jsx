
export default function Experience() {
    const experiences = [
        {
            number: "1",
            role: "Full Stack Developer (Intern)",
            company: "NexGenix",
            duration: "4 Months (Jun 2026 – Present)",
            tags: ["Internship", "Full Stack Development"],
        },
        
    ];

    return (
        <section id="experience-work" className="relative overflow-hidden px-6 py-24 mt-10 md:px-10">
            {/* ambient glow, Qualification section-er moto */}
            <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full " />

            <div className="relative z-10 mx-auto max-w-7xl">
                <h2 className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-5xl font-extrabold text-transparent md:text-6xl">
                    Experience
                </h2>
                <p className="mt-3 text-lg text-slate-400">My Professional Journey</p>

                <div className="mt-20 space-y-16">
                    {experiences.map((exp, index) => {
                        const isLast = index === experiences.length - 1;

                        return (
                            <div key={exp.number} className="relative max-w-200 pl-20">
                                {/* connecting line, sudhu porer item thakle render hobe */}
                                {!isLast && (
                                    <div className="absolute bottom-[-4rem] left-5 top-10 w-px bg-gradient-to-b from-indigo-500/60 to-indigo-500/10" />
                                )}

                                {/* numbered node */}
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-indigo-400/40 bg-black text-sm font-semibold text-indigo-300">
                                    {exp.number}
                                </div>

                                {/* card */}
                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                    <p className="mt-2 text-slate-400">{exp.company}</p>

                                    <h4 className="mt-4 text-slate-300">
                                        <span className="text-slate-400">Duration: </span>
                                        <span className="font-bold text-white">{exp.duration}</span>
                                    </h4>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {exp.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}