import { FunctionComponent } from 'react';

export const Text: FunctionComponent = ({ children }) => {
  return <div className="space-y-4 text-2xl text-black">{children}</div>;
};
