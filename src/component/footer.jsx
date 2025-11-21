const footerLinks = {
  company: ["Buy", "Rent", "Sell", "Contact Us"],
  resources: ["Help Center", "Community", "Contact"],
  legal: ["Privacy Policy", "Terms of Service"],
};

const Footer = () => {
  return (
    <footer className="   bg-primary text-white">
      
      <div className=" bg-primary relative px-10 w-[80%] mx-auto rounded-br-[0px] -mt-[100px] z-20  rounded-[38px] border-2 border-white bg-white/15 p-8 py-10 ">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/75">
                Join the Future of Real Estate
              </p>
              <h2 className="text-3xl font-semibold">Ready to Get Started?</h2>
              <p className="text-sm text-white/80">
                Join thousands of users who are already experiencing smarter, faster, and safer real
                estate transactions.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-[10px] bg-white px-6 py-3 text-sm font-semibold text-[#0d7cb3] shadow-lg shadow-white/30">
                Sign Up Free
              </button>
              <button className="rounded-[10px] border border-white px-6 py-3 text-sm font-semibold text-white">
                Explore Marketplace
              </button>
            </div>
          </div>
        </div>
      <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-10 space-y-12">
       

        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-2xl font-bold">
              <img src="/assets/icon/footerlogo.svg" alt="Senev Logo" className="h w-16 object-contain" />
            </div>
            <p className="text-sm text-white/80">
              AI-powered real estate platform connecting tenants and owners with trust,
              transparency, and automation.
            </p>
          </div>

          {Object.entries(footerLinks).map(([section, items]) => (
            <div key={section}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/85">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-white/70">
          © {new Date().getFullYear()} Senev. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

