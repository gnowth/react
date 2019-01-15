import styled, { css } from 'styled-components';
import { color } from '@gnowth/style';

export const UILabelRoot = styled.div`
  ${props => props.css}
`;

export const Label = styled.label`
  ${props => props.css}
`;

export default {
  icon: css`
    color: ${color({ name: 'danger' })};

    && {
      font-size: 0.8rem;
    }
  `,
  tooltip: css`
    margin-left: 0.5rem;
  `,
};