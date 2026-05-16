/** Shared theme tokens for cards, borders, and glows (cyan + violet aurora) */
export const theme = {
  card: "relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-card/70 shadow-xl shadow-cyan-500/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-cyan-500/15",
  cardInner: "rounded-[calc(1rem-1px)] bg-card/90 backdrop-blur-md",
  iconBox: "rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 p-4 shadow-lg shadow-cyan-500/25 lg:p-5",
  iconBoxAlt: "rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 p-4 shadow-lg shadow-violet-500/25 lg:p-5",
  bullet: "mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500",
  contentBox: "rounded-xl border border-cyan-500/10 bg-cyan-500/5 p-6 lg:p-8",
  gradientText: "bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent",
  gradientLine: "h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500",
  btnPrimary: "bg-cyan-500 font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 hover:bg-cyan-400",
  btnOutline: "border-cyan-500/40 bg-transparent hover:border-cyan-400/60 hover:bg-cyan-500/10",
} as const
