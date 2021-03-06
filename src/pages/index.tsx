import { FunctionComponent } from 'react';
import Fade from 'react-reveal/Fade';
import Head from 'next/head';
import { Logo } from '../components/Logo';
import { List } from '../components/List';
import { Text } from '../components/Text';
import { Item, cssInJsLibs, stateManagers } from '../data';
import { Link } from '../components/Link';

type Result = 'tie' | 'cssInJs' | 'stateManagers';

const bgColors: Record<Result, string> = {
  tie: 'bg-gray-50',
  cssInJs: 'bg-pink-50',
  stateManagers: 'bg-blue-50',
};

const Home: FunctionComponent = () => {
  const result = getWinner(cssInJsLibs, stateManagers);

  return (
    <div className="px-8 py-16 mx-auto w-full max-w-4xl space-y-16">
      <Head>
        <title>CSS-IN-JS vs STATE MANAGERS</title>
      </Head>

      <Logo />

      <Text>
        <p>
          One day I realized there are a lot of CSS-in-JS libraries. Maybe more
          than state management libraries, which are a lot too...
        </p>
        <p>So, if I count them all, which would win? Let the battle begin!</p>
      </Text>

      <div className="flex justify-between">
        <div className="w-5/12">
          <List items={cssInJsLibs} />
        </div>

        <div className="w-5/12">
          <List items={stateManagers} />
        </div>
      </div>

      <div className="text-center text-2xl">
        <Fade
          duration={0}
          onReveal={() => {
            document.body.classList.add(bgColors[result]);
          }}
        >
          {result === 'cssInJs' ? (
            <p>CSS-in-JS wins!</p>
          ) : result === 'stateManagers' ? (
            <p>State managers wins!</p>
          ) : (
            <p>It's tie!</p>
          )}
        </Fade>

        <p>
          Know a library not listed here?{' '}
          <Link href="https://github.com/44px/css-in-js-vs-state-managers/edit/main/src/data.ts">
            Add it!
          </Link>
        </p>
      </div>

      <div className="text-center">
        <a href="https://github.com/44px/css-in-js-vs-state-managers">
          <img
            className="inline-block"
            alt="GitHub last commit"
            src="https://img.shields.io/github/last-commit/44px/css-in-js-vs-state-managers?label=last%20update&logo=github"
          />
        </a>
      </div>
    </div>
  );
};

function getWinner(cssInJsLibs: Item[], stateManagers: Item[]): Result {
  if (cssInJsLibs.length > stateManagers.length) {
    return 'cssInJs';
  }

  if (stateManagers.length > cssInJsLibs.length) {
    return 'stateManagers';
  }

  return 'tie';
}

export default Home;
