import { css } from 'styled-components';

export const effect1 = css`
  box-shadow: 0 10px 6px -6px #777;
`;

export const effect2 = css`
  position: relative;

  &::before,
  &::after {
    z-index: -1;
    position: absolute;
    content: "";
    bottom: 15px;
    left: 10px;
    width: 50%;
    top: 80%;
    max-width: 300px;
    background: #777;
    box-shadow: 0 15px 10px #777;
    transform: rotate(-3deg);
  }

  &::after {
    transform: rotate(3deg);
    right: 10px;
    left: auto;
  }
`;

export const effect3 = css`
  position: relative;

  &::before {
    z-index: -1;
    position: absolute;
    content: "";
    bottom: 15px;
    left: 10px;
    width: 50%;
    top: 80%;
    max-width: 300px;
    background: #777;
    box-shadow: 0 15px 10px #777;
    transform: rotate(-3deg);
  }
`;

export const effect4 = css`
  position: relative;

  &::after {
    z-index: -1;
    position: absolute;
    content: "";
    bottom: 15px;
    right: 10px;
    left: auto;
    width: 50%;
    top: 80%;
    max-width: 300px;
    background: #777;
    box-shadow: 0 15px 10px #777;
    transform: rotate(3deg);
  }
`;

export const effect5 = css`
  position: relative;

  &::before,
  &::after {
    z-index: -1;
    position: absolute;
    content: "";
    bottom: 25px;
    left: 10px;
    width: 50%;
    top: 80%;
    max-width: 300px;
    background: #777;
    box-shadow: 0 35px 20px #777;
    transform: rotate(-8deg);
  }

  &::after {
    transform: rotate(8deg);
    right: 10px;
    left: auto;
  }
`;

export const effect6 = css`
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 50%;
    bottom: 0;
    left: 10px;
    right: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
    border-radius: 100px / 10px;
  }

  &::after {
    right: 10px;
    left: auto;
    transform: skew(8deg) rotate(3deg);
  }
`;

export const effect7 = css`
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 10px;
    right: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
    border-radius: 100px / 10px;
  }

  &::after {
    right: 10px;
    left: auto;
    transform: skew(8deg) rotate(3deg);
  }
`;

export const effect8 = css`
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
    top: 10px;
    bottom: 10px;
    left: 0;
    right: 0;
    border-radius: 100px / 10px;
  }

  &::after {
    right: 10px;
    left: auto;
    transform: skew(8deg) rotate(3deg);
  }
`;

export const material1 = css`
  border-radius: 2px;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const material2 = css`
  border-radius: 2px;
  position: relative;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const material3 = css`
  border-radius: 2px;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const material4 = css`
  border-radius: 2px;
  position: relative;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const material5 = css`
  border-radius: 2px;
  position: relative;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const material_hover1 = css`
  border-radius: 2px;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const material_hover2 = css`
  border-radius: 2px;
  position: relative;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const material_hover3 = css`
  border-radius: 2px;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const material_hover4 = css`
  border-radius: 2px;
  position: relative;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const material_hover5 = css`
  border-radius: 2px;
  position: relative;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
