export default function NotFound() {
  return (
    <div className="relative h-svh w-svw overflow-hidden">
      <style>{`
        @keyframes expand {
          0% {
            width: 25rem;
            height: 25rem;
          }
          100% {
            width: 1000rem;
            height: 1000rem;
          }
        }
      `}</style>

      {/* Animated expanding circle background. */}
      <div
        className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-background animate-[expand_1500s_ease-out_forwards]
          rounded-full shadow-white-glow
        "
      />

      <div className="relative flex flex-col items-center justify-center text-center h-full p-8 gap-4">
        <h1 className="text-5xl font-bold font-mono">404</h1>
        <p className="text-lg font-medium text-white/80 max-w-md">
          Looks like you found a black hole.
          <br />
          There&apos;s <i>probably</i> nothing inside.
        </p>
      </div>
    </div>
  );
}
