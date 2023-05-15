type LoadSpinnerPropsType = {
  conatinerClass?: string;
  spinnerClass?: string;
};

export function LoadSpinner({
  conatinerClass,
  spinnerClass,
}: LoadSpinnerPropsType) {
  return (
    <div className={`flex items-center gap-2 h-3/4 ${conatinerClass}`}>
      <div
        className={`w-3 animate-load-spinner animation-delay-0 ${
          spinnerClass ? spinnerClass : 'bg-white'
        }`}
      ></div>
      <div
        className={`w-3 animate-load-spinner animation-delay-150 ${
          spinnerClass ? spinnerClass : 'bg-white'
        }`}
      ></div>
      <div
        className={`w-3 animate-load-spinner animation-delay-300 ${
          spinnerClass ? spinnerClass : 'bg-white'
        }`}
      ></div>
    </div>
  );
}
