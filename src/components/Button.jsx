export default function Button({
  as: Comp = "button",
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition " +
    "focus:outline-none focus:ring-2 focus:ring-blue-300/70 focus:ring-offset-2";

  const variants = {
    // ✅ Primary Blue
    primary: "bg-blue-600 text-white hover:bg-blue-700",

    secondary: "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50",

    // (optional) keep brand same as primary blue for consistency
    brand: "bg-blue-600 text-white hover:bg-blue-700",

    ghost: "text-slate-700 hover:bg-slate-100",
  };

  return (
    <Comp className={`${base} ${variants[variant]} ${className}`.trim()} {...props}>
      {children}
    </Comp>
  );
}
