export default function Badge({ children, className = '' }) {
  return (
    <span
      className={
        'inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm ' +
        className
      }
    >
      {children}
    </span>
  )
}
