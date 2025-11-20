const tenantFeatures = [
  {
    title: "Smart Property Search",
    description: "AI-powered search filters to find your perfect home",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-white">
        <path
          fill="currentColor"
          d="M21 20.79l-5.62-5.61a7 7 0 1 0-1.41 1.41L19.59 22ZM5 10a5 5 0 1 1 5 5a5 5 0 0 1-5-5Z"
        />
      </svg>
    ),
  },
  {
    title: "Verified Owners",
    description: "All property owners are verified and rated",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-white">
        <path
          fill="currentColor"
          d="M12 12a4 4 0 1 0-4-4a4 4 0 0 0 4 4Zm0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2Zm0 7c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z"
        />
      </svg>
    ),
  },
  {
    title: "Secure Documents",
    description: "End-to-end encrypted document storage",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-white">
        <path
           fill="currentColor"
          d="M17 8h-1V6a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2ZM9 6a3 3 0 0 1 6 0v2H9Zm8 13H7v-9h10Z"
        />
      </svg>
    ),
  },
  {
    title: "Direct Chat",
    description: "Communicate securely with property owners",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-white">
        <path
          fill="currentColor"
          d="M20 2H4a2 2 0 0 0-2 2v17l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm0 13H6.83L4 17.83V4h16Z"
        />
      </svg>
    ),
  },
];

const TenantSection = () => {
  return (
    <section className="bg-[#1c83b8] py-16 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="text-center space-y-3">
          <p className=" text-[40px] text-white">For Tenants</p>
          <h2 className="text-[18px]  mt-4 font-semibold">Find your next home with confidence</h2>
          
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tenantFeatures.map((feature) => (
            <article
              key={feature.title}
              className="rounded-t-[36px] rounded-bl-[36px] rounded-br-none bg-white p-6 text-slate-900 shadow-lg shadow-slate-900/10"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{feature.description}</p>
            </article>
          ))}
        </div>

        <div className="rounded-t-[36px] rounded-bl-[36px] rounded-br-none border-2 border-white/60 bg-white/10 p-8 text-white shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <p className="text-2xl font-semibold">Ready to find your dream home?</p>
              <p className="text-white/80">
                Join thousands of tenants who found their perfect match through LIHAR.
              </p>
              <button className="rounded-[5px] bg-white px-6 py-3 text-sm font-semibold text-sky-600 shadow-lg shadow-white/30 transition hover:bg-white/90">
              Start Searching
            </button>
            </div>
            <div className="flex items-start gap-4 justify-end">
              <div className="rounded-2xl text-primary bg-white  px-10 py-3 text-center">
                <p className="text-3xl font-semibold">2.5M+</p>
                <p className="text-sm text-primary">Active listings</p>
              </div>
              <div className="rounded-2xl text-primary bg-white px-10 py-3 text-center">
                <p className="text-3xl font-semibold">4.8★</p>
                <p className="text-sm ">Average rating</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenantSection;

