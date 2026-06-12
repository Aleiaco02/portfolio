interface BadgeProps {
  label: string;
}

export default function Badge({ label }: BadgeProps) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-mono text-white/75 bg-white/7 backdrop-blur-xl border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_16px_rgba(255,255,255,0.03)] rounded-full uppercase tracking-wider">
      {label}
    </span>
  );
}
