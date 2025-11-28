import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI Valuation",
    description:
      "Get instant, accurate property valuations powered by advanced AI and real-time market data.",
    tag: "98% accuracy",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-white">
        <path
          fill="currentColor"
          d="M12 2L3 6.5v11L12 22l9-4.5v-11Zm.75 17.25v-8.7l6-2.89v8.46Zm-1.5-8.7v8.7l-6-3.13v-8.46Zm.75-5.84l5.61 2.7L12 10.14 6.89 7.41Z"
        />
      </svg>
    ),
  },
  {
    title: "Secure Docs",
    description:
      "Store, sign, and share documents securely with bank-level encryption and e-signature integration.",
    tag: "256-bit encryption",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-white">
        <path
          fill="currentColor"
          d="M17 8h-1V6a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2ZM9 6a3 3 0 0 1 6 0v2H9Zm9 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Z"
        />
      </svg>
    ),
  },
  {
    title: "Tenant Scoring",
    description:
      "Screen tenants with comprehensive background checks, credit reports, and rental history verification.",
    tag: "5M+ verified",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-white">
        <path
          fill="currentColor"
          d="M12 12a4 4 0 1 0-4-4a4 4 0 0 0 4 4Zm0-7a3 3 0 1 1-3 3a3 3 0 0 1 3-3Zm5 10.5a11.67 11.67 0 0 0-10 0A2.49 2.49 0 0 0 5 17.7V20h14v-2.3a2.49 2.49 0 0 0-2-2.2Zm1 4.5H6v-1.3a1.49 1.49 0 0 1 .9-1.36a10.63 10.63 0 0 1 10.2 0A1.49 1.49 0 0 1 18 18.7Z"
        />
      </svg>
    ),
  },
  {
    title: "Payments",
    description:
      "Simplified rent collection and property payments with automatic processing and tracking.",
    tag: "Zero fees",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-white">
        <path
          fill="currentColor"
          d="M21 6H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm1 10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1Zm-4-6a1 1 0 1 0 1 1a1 1 0 0 0-1-1Z"
        />
      </svg>
    ),
  },
];

const ListSection = () => {
  // Variants for animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-center space-y-2 mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">
          Our Features
        </p>
        <h2 className="text-3xl font-bold text-slate-900">What Makes Us Different</h2>
      </div>

      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {features.map((feature) => (
          <motion.article
            key={feature.title}
            className="flex h-full flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_15px_30px_rgba(15,23,42,0.06)]"
            variants={cardVariants}
          >
            <div className="flex items-center gap-3">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500">
                {feature.icon}
              </div>
              <p className="text-lg font-semibold text-slate-900">{feature.title}</p>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">{feature.description}</p>
            <span className="inline-flex w-fit rounded-full bg-slate-50 px-4 py-1 text-xs font-semibold text-sky-600">
              {feature.tag}
            </span>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default ListSection;
