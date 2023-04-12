type ResponsiveContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function ResponsiveContainer({
  className,
  children,
}: ResponsiveContainerProps) {
  return (
    <div
      className={
        className +
        ' w-full max-w-md sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'
      }
    >
      {children}
    </div>
  );
}
