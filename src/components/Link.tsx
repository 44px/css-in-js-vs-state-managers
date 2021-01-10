import { FunctionComponent } from 'react';

type Props = {
  href: string;
};

export const Link: FunctionComponent<Props> = ({ href, children }) => {
  return (
    <a
      className="text-blue-800 border-b border-dashed border-current transition-colors hover:text-blue-400"
      href={href}
    >
      {children}
    </a>
  );
};
