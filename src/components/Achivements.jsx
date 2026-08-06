
export default function Achievements() {
    const achievements = [
        {
            title: "Codeforces",
            subtitle: "Pupil",
            statLabel: "Max Rating",
            statValue: "1244",
            tags: ["498+ Solved", "Competitive Programming"],
        },
        {
            title: "CodeChef",
            subtitle: "2★ Coder",
            statLabel: "Max Rating",
            statValue: "1451",
            tags: ["150+ Solved", "Competitive Programming"],
        },
        {
            title: "ICPC Preliminary Contest",
            subtitle: "Regional Preliminary Round",
            statLabel: "Years",
            statValue: "2023 & 2024",
            tags: ["Participant", "Team Contest"],
        },
        {
            title: "CodeMaster Showdown",
            subtitle: "Organized by BGC Trust University Bangladesh",
            statLabel: "Result",
            statValue: "Runners Up",
            tags: ["2nd Place", "Programming Contest"],
            highlight: true, 
        },
    ];

    return (
        <section id="achievements" className="relative overflow-hidden  px-6 py-24 md:px-10">
            <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full" />

            <div className="relative z-10 mx-auto max-w-7xl">
                <h2 className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-5xl font-extrabold text-transparent md:text-6xl">
                    Achievements
                </h2>
                <p className="mt-3 text-lg text-slate-400">Competitive Programming & Contests</p>

                <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {achievements.map((item) => (
                        <div
                            key={item.title}
                            className={
                                item.highlight
                                    ? "rounded-2xl border border-indigo-400/30 bg-white/[0.03] p-8"
                                    : "rounded-2xl border border-white/10 bg-white/[0.03] p-8"
                            }
                        >
                            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                            <p className="mt-2 text-slate-400">{item.subtitle}</p>

                            <h4 className="mt-4 text-slate-300">
                                <span className="text-slate-400">{item.statLabel}: </span>
                                <span className="font-bold text-white">{item.statValue}</span>
                            </h4>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {item.tags.map((tag, i) => (
                                    <span
                                        key={tag}
                                        className={
                                            item.highlight && i === 0
                                                ? "rounded-md border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-300"
                                                : "rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300"
                                        }
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}