import { VoidFunctionComponent } from 'react';
import { Item } from '../data';

type Props = {
  items: Item[];
};

export const List: VoidFunctionComponent<Props> = ({ items }) => {
  const sortedItems = items.slice(0).sort((a, b) => {
    return a.label
      .toLocaleLowerCase()
      .localeCompare(b.label.toLocaleLowerCase());
  });

  return (
    <ol className="pl-12 list-decimal list-outside space-y-3 text-xl whitespace-nowrap">
      {sortedItems.map(({ label, url }, index) => (
        <li key={index}>
          <a
            className="font-normal text-blue-800 border-b border-dashed border-current transition-colors hover:text-blue-400"
            href={url}
          >
            {label}
          </a>
        </li>
      ))}
    </ol>
  );
};
