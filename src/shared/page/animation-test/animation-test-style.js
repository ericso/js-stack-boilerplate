// @flow

const style = {
  '@keyframes bulge-animation': {
    '0%': {
      transform: 'scale(1)',
    },
    '30%': {
      transform: 'scale(2)',
    },
    '100%': {
      transform: 'scale(1.3)',
    },
  },
  bulgeBox: {
    height: '50px',
    width: '50px',
    border: '2px solid red',
    animation: 'bulge-animation 2s infinite',
  },
};

export default style;
