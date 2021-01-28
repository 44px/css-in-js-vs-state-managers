import { VoidFunctionComponent } from 'react';
import Fade from 'react-reveal/Fade';
import { Item } from '../data';
import { Link } from './Link';

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
        <Fade key={index}>
          <li>
            <Link href={url}>{label}</Link>
          </li>
        </Fade>
      ))}
    </ol>
  );
};
