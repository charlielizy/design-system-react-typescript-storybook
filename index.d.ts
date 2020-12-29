import {} from 'styled-components';
import { CSSProp } from 'styled-components';

declare module '@deck.gl/layers';
declare module '@deck.gl/core';
declare module '@deck.gl/react';
declare module 'deck.gl';


declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}