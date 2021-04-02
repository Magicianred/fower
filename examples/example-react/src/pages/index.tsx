import { Box, injectGlobalStyle } from '@styli/react';
import { setTheme, styli } from '@styli/core';
import { useState } from 'react';
import { styled } from '@styli/styled';

const Button = styled('button');

// injectGlobalStyle({
//   '*': {},
//   body: {
//     margin: '0',
//     backgroundColor: 'red',
//     ':hover': {
//       backgroundColor: 'green',
//     },
//   },
//   div: {
//     backgroundColor: 'yellow',
//     ':hover': {
//       backgroundColor: 'blue',
//     },
//   },

// });

setTheme({
  colors: {
    brandLight: '#e0f2fe',
    brandLighter: '#bae6fd',
    brandLightest: '#7dd3fc',
    brandPrimary: '#38bdf8',
    brandDark: '#0ea5e9',
    brandDarker: '#0284c7',
    brandDarkest: '#0369a1',

    foo: '#f90',
  },
  spacings: {
    100: 400,
  },
  breakpoints: {
    '4xl': '',
  },
});

styli.registerAtomicProps(/heading(sm|md|lg)/i, (atom) => {
  const size = atom.propKey.replace('heading', '').toLowerCase();
  switch (size) {
    case 'sm':
      atom.style = { fontSize: 16 };
      break;
    case 'md':
      atom.style = { fontSize: 24 };
      break;
    case 'lg':
      atom.style = { fontSize: 32 };
      break;
    default:
      break;
  }
  return atom;
});

styli.registerAtomicProps('textBody', {
  fontSize: 20,
});

declare module '@styli/types' {
  export interface AtomicProps {
    textBody?: boolean;
    info?: boolean;
    bgInfo?: boolean;
    borderInfo?: boolean;

    brandLight?: boolean;
    brandLighter?: boolean;
    brandLightest?: boolean;

    brandPrimary?: boolean;

    brandDark?: boolean;
    brandDarker?: boolean;
    brandDarkest?: boolean;

    bgBrandPrimary?: boolean;

    borderBrandPrimary?: boolean;
  }
}

export default function IndexPage() {
  const [colorMode, setColorMode] = useState('default');
  return (
    <Box textSM textLG--sm text2XL--md text4XL--lg>
      Lorem ipsum dolor sit amet
    </Box>
  );
  return (
    <div>
      <Box
        headingMD
        // brandDarker
        green300--i--hover
        toCenter
        gray500--dark
        // bgBrandPrimray
        border
        borderBrandPrimary
      >
        test TExt
      </Box>
      <Box
        as="button"
        onClick={() => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default');
          if (colorMode === 'default') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }}
      >
        切换 {colorMode}
      </Box>

      {/* <Box red500 bgAmber100 bgRed100--hover p-10 p-40--sm p-60--md p6--hover>
        gogo
      </Box> */}

      <Box as="h2" spaceX4 row debugChildren>
        <Box>BB</Box>
        <Box>BB</Box>
        <Box>BB</Box>
        <Box>BB</Box>
        <Box>BB</Box>
      </Box>

      {/* <Box as="h2" red500 p4 color="colorHello">
          gogo
        </Box> */}
      {/* <Box
        as="h2"
        rounded3XL
        // roundedSM--hover
        pt1
        pb1
        m10
        gray400--hover
        blue400--dark
        css={{
          backgroundColor: 'bisque',
          // padding: 20,
          padding: '20px',
          ':hover': {
            backgroundColor: 'yellow',
          },
          '.child': {
            color: 'white',
            ':hover': {
              color: '#ddd',
            },
            '.two': {
              color: 'red',
              ':hover': {
                color: '#999',
              },
            },
          },
        }}
      >
        SubTitle
        <Box pt1 pb1 m10 className="child">
          Child
          <Box className="two">two</Box>
        </Box>
      </Box> */}
    </div>
  );
}
