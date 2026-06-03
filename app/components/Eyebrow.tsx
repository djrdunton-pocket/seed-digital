export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase">
      <span className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
      <span>{children}</span>
    </div>
  );
}
