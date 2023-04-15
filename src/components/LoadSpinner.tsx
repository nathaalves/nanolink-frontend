export function LoadSpinner() {
  return (
    <div className="flex items-center gap-2 h-3/4">
      <div className="w-3 bg-white animate-load-spinner animation-delay-0"></div>
      <div className="w-3 bg-white animate-load-spinner animation-delay-150"></div>
      <div className="w-3 bg-white animate-load-spinner animation-delay-300"></div>
    </div>
  );
}
