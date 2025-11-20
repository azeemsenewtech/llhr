const testimonial = {
  title: "What Our Clients Say",
  text: `Home is where love resides, memories are created, and dreams are nurtured. I've found my sanctuary in this beautiful property. Finding the perfect flat that resonates with your own soul is unmatched.`,
  author: {
    name: "Alexan Micelito",
    role: "Senior Manager",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  rating: 5,
  mainImage:
    "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=60",
  secondaryImage:
    "https://images.unsplash.com/photo-1430285561322-7808604715df?auto=format&fit=crop&w=600&q=60",
};

const ClientSection = () => {
  return (
    <section
      className="relative py-16 pb-80"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(246, 247, 248, 0.92), rgba(247, 249, 250, 0.75)), url('src/assets/image/main.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 opacity-10 mix-blend-soft-light">
        <p className="pointer-events-none select-none text-[88px] font-extrabold tracking-[0.15em] text-white/60">
          TESTIMONIALS
        </p>
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-center text-white">
        <div className="space-y-5 md:w-1/2">
          <div>
            
            <h2 className="mt-2 text-[40px] text-primary font-semibold">
              What Our Clients Say
            </h2>
          </div>
          <div className="flex gap-1 text-amber-400">
            {Array.from({ length: testimonial.rating }).map((_, idx) => (
              <span className="text-[20px]" key={idx}>★</span>
            ))}
          </div>
          <p className="text-sm leading-relaxed text-[#62708A] max-w-xl">
            {testimonial.text}
          </p>
          <div className="flex items-center gap-3">
            <img
              src={testimonial.author.avatar}
              alt={testimonial.author.name}
              className="h-18 w-16 rounded-tr-[20px]  rounded-[10px] object-cover shadow-lg"
            />
            <div>
              <p className="font-semibold text-primary">{testimonial.author.name}</p>
              <p className="text-sm text-[#62708A] ">{testimonial.author.role}</p>
            </div>
          </div>
        </div>

        <div className="relative flex w-full flex-col items-center md:w-1/2">
          <div className="h-80 w-full max-w-md overflow-hidden rounded-[22px] border border-white/40 bg-white/5 shadow-xl backdrop-blur">
            <img
              src={testimonial.mainImage}
              alt="Modern home"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 right-6 h-58 w-72 overflow-hidden rounded-tr-[52px] rounded-[22px]  shadow-lg">
            <img
              src={testimonial.secondaryImage}
              alt="Interior living room"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;

