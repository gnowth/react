import { mixin } from '@gnowth/style';
import { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const main = {
  root: css`
    ${mixin({ name: 'disabled' })}
    ${mixin({ name: 'readOnly' })}
  `,

  styles: {},
};
