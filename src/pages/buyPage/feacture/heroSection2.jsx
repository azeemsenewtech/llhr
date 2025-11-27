const HeroSection2 = ({
  title = "Buy Your Dream Home",
  breadcrumb = ["Home", "Rent"],
  background =
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
}) => {
  return (
    <section
      className="relative flex h-80 items-center bg-cover bg-center text-white"
      style={{ backgroundImage: `linear-gradient(rgba(15, 14, 14, 0.45), rgba(0,0,0,0.45)), url('/assets/image/herobg.png')` }}
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <h1 className="md:text-[54px] font-poppin text-[40px] font-bold ">{title}</h1>
        <p className="mt-3 text-md font-poppin text-white">
          {breadcrumb.map((crumb, idx) => (
            <span key={crumb}>
              {crumb}
              {idx !== breadcrumb.length - 1 && <span className="mx-2">•</span>}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default HeroSection2;

