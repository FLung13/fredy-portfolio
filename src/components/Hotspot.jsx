
export default function Hotspot({
  label,
  tooltip,
  href,
  x,
  y,
  Icon,
}) {
  return (
    <a
      href={href}
      aria-label={tooltip || label}
      className="
        group absolute z-20
        -translate-x-1/2 -translate-y-1/2
        rounded-full
        focus-visible:outline-none
      "
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      {/* Outer glowing ring */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute -inset-3
          rounded-full border border-cyan-400/35
          bg-cyan-400/10
          opacity-60 transition-all duration-300
          group-hover:scale-125 group-hover:opacity-100
          group-focus-visible:scale-125
          group-focus-visible:opacity-100
        "
      />

      {/* Beacon animation */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute -inset-2
          rounded-full border border-cyan-300/50
          motion-safe:animate-ping
        "
      />

      {/* Main clickable marker */}
      <span
        className="
          relative flex h-12 w-12 items-center justify-center
          rounded-full border border-cyan-300
          bg-[#061327]/95 text-cyan-300
          shadow-[0_0_18px_rgba(34,211,238,0.4)]
          transition-all duration-300
          group-hover:scale-115
          group-hover:bg-cyan-400
          group-hover:text-[#061327]
          group-hover:shadow-[0_0_35px_rgba(34,211,238,0.8)]
          group-focus-visible:ring-2
          group-focus-visible:ring-cyan-200
          group-focus-visible:ring-offset-4
          group-focus-visible:ring-offset-[#061327]
        "
      >
        <Icon size={21} strokeWidth={1.8} />
      </span>

      {/* Floating tooltip */}
      <span
        role="tooltip"
        className="
          pointer-events-none absolute bottom-full left-1/2
          mb-5 w-max max-w-52
          -translate-x-1/2 translate-y-2
          rounded-lg border border-cyan-400/40
          bg-[#061327]/95 px-4 py-2
          text-center text-xs font-medium text-cyan-100
          opacity-0 shadow-xl
          transition-all duration-200
          group-hover:translate-y-0
          group-hover:opacity-100
          group-focus-visible:translate-y-0
          group-focus-visible:opacity-100
        "
      >
        {tooltip}
      </span>
    </a>
  );
}
