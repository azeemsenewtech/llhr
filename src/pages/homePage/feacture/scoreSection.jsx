const highlights = [
  {
    title: "Verified Identity",
    description: "Government ID and document validation",
  },
  {
    title: "Financial Health",
    description: "Income verification and credit assessment",
  },
  {
    title: "Rental History",
    description: "Past behavior and references",
  },
];

const ScoreSection = () => {
  return (
    <section className="relative  bg-[#f4f7fb] py-16">
   <img src="/assets/image/dot.png" alt="Background" className=" absolute top-10 left-5 w-[50px] object-cover opacity-10 pointer-events-none" />

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-center">
        <div className="relative w-full max-w-md rounded-[56px] border-[3px] border-sky-400 bg-white px-8 py-10 shadow-[0_20px_45px_rgba(15,23,42,0.1)]">
          <div className="absolute -left-10 -top-10 h-20 w-20 rounded-full bg-sky-500"></div>
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Score</p>
              <p className="text-5xl font-semibold text-slate-900">850</p>
            </div>

            {[
              { label: "Identity", value: "100%" },
              { label: "Financial", value: "95%" },
              { label: "History", value: "88%" },
            ].map((item) => (
              <div key={item.label} className="space-y-1">
                <div className="flex items-center justify-between text-sm font-semibold text-slate-600">
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-sky-400"
                    style={{ width: item.value }}
                  ></div>
                </div>
              </div>
            ))}

            <div className="rounded-full bg-sky-50 px-5 py-3 text-sm font-semibold text-sky-600">
              <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-sky-500">
                ↗
              </span>
              Excellent Standing
            </div>
          </div>

          <div className="absolute right-6 top-10 bottom-6 flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg">
            <svg width="18" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0L0 5.45455V13.6364C0 21.2045 5.12 28.2818 12 30C18.88 28.2818 24 21.2045 24 13.6364V5.45455L12 0ZM9.33333 21.8182L4 16.3636L5.88 14.4409L9.33333 17.9591L18.12 8.97273L20 10.9091L9.33333 21.8182Z" fill="white"/>
</svg>

          </div>
        </div>

        <div className="flex-1 space-y-6 text-slate-700">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">
              Trust & Transparency
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">What is LIHARScore™?</h2>
            <p className="text-base leading-relaxed text-slate-600">
              LIHARScore™ is an AI-driven trust metric that evaluates tenants and owners based on
              verified documents, financial history, and behavior patterns. It builds confidence in
              every transaction.
            </p>
          </div>

          <div className="space-y-4">
            {highlights.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-sky-400 text-sky-500">
                  ✓
                </div>
                <div>
                  <p className="text-base font-semibold text-slate-900">{item.title}</p>
                  <p className="text-sm text-slate-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="rounded-[25px] bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-600">
            Try your Own Score
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScoreSection;

