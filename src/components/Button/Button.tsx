import React from 'react';
import styled, { css } from 'styled-components';

import { MyTheme } from '../../styles/myTheme'

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optinal for colors
   */
  mode?: 'default' | 'dark' | 'light';

}

const ButtonContent: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  mode = 'default',
  ...props
}) => {
  return (
    <button
      type="button"
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export const Button = styled(ButtonContent)`
  border: 0;
  border-radius: 3em;
  font-weight: 700;
  font-family: 'Nunito Sans', 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${props =>props.primary === true && props.mode === 'default' && css`
    color: ${MyTheme.color.primary};
    background-color: #1ea7fd;
  `}

  ${props =>props.primary === true && props.mode === 'dark' && css`
    color: ${MyTheme.color.secondary};
    background-color: ${MyTheme.background.appInverse}
  `}

  ${props =>props.primary === true && props.mode === 'light' && css`
    color: ${MyTheme.color.secondary};
    background-color: #ddd;
  `}

  ${props =>props.primary === false && css`
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  `}

  ${props =>props.size === 'small' && css`
    font-size: 12px;
    padding: 10px 16px;
  `}
  
  ${props =>props.size === 'medium' && css`
    font-size: 14px;
    padding: 11px 20px;
  `}

  ${props =>props.size === 'large' && css`
    font-size: 16px;
    padding: 12px 24px;
  `}

`;

