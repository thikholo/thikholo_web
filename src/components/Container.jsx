export default function Container({ className = "", children }) {
  return (
    <div
      className={[
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        // normal screens: keep a reasonable max width
        "max-w-6xl",
        // big screens: expand to 75% of viewport width (so side space ~= 25% total)
        "xl:max-w-[80vw] 2xl:max-w-[85vw]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
