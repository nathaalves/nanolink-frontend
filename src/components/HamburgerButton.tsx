'use client';

import { ButtonHTMLAttributes, useState } from 'react';

type SandwichButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick: () => void;
};

export function HamburgerButton({
  className,
  onClick,
  ...rest
}: SandwichButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    onClick();
    setIsExpanded(!isExpanded);
  };

  return (
    <button
      onClick={handleClick}
      aria-controls="primary-navigation"
      aria-expanded={isExpanded}
      className={`hamburger ${className}`}
      {...rest}
    >
      <svg viewBox="0 0 100 100" width={32}>
        <rect
          className="line top fill-sky-600"
          width={90}
          height={10}
          x={5}
          rx={5}
          y={15}
        />
        <rect
          className="line middle fill-sky-600"
          width={90}
          height={10}
          x={5}
          rx={5}
          y={45}
        />
        <rect
          className="line bottom fill-sky-600"
          width={90}
          height={10}
          x={5}
          rx={5}
          y={75}
        />
      </svg>
    </button>
  );
}

// left-1/2 translate-x-[-50%]
