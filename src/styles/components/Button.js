import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    font-size: 12px;
    height: 28px;
  `,
  default: css`
    font-size: 14px;
    height: 36px;
  `,
  big: css`
    font-size: 18px;
    height: 44px;
  `,
};

const colors = {
  default: css`
    background: #7289da;

    &:hover: {
      background: #5f73bc;
    }
  `,
  danger: css`
    background: #e04848;

    &:hover: {
      background: #a43d3d;
    }
  `,
  gray: css`
    background: #b9bbbe;
    color: #666666;
    &:hover: {
      background: #999999;
    }
  `,
};

const Button = styled.button.attrs({
  type: 'button',
})`
  background: #7289da;
  border: 0;
  border-radius: 3px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  padding: 0 10px;
  text-transform: uppercase;
  transition: background-color 0.15s ease;

  ${props => sizes[props.size || 'default']}
  ${props => colors[props.color || 'default']}
  ${props => props.filled === false
    && css`
      background: 'none';
      &:hover {
        background: none;
        opacity: 0.6;
      }
    `}
`;

export default Button;
