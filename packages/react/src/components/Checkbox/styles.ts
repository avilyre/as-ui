import * as Checkbox from '@radix-ui/react-checkbox';

import { styled, keyframes } from '../../styles';

const slideInAnim = keyframes({
  from: {
    transform: 'translateY(-100%)'
  },
  to: {
    transform: 'translateY(0)'
  }
});

const slideOutAnim = keyframes({
  from: {
    transform: 'translateY(0)'
  },
  to: {
    transform: 'translateY(-100%)'
  }
});

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $ignite00',

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300'
  },

  '&:focus': {
    border: '2px solid $ignite300'
  }
});

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideInAnim} 200ms ease-out`
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOutAnim} 200ms ease-out`
  },
});