import { mergeClassProp, hasOwnProperty } from './utils';
import * as React from 'react';

export const jsx = (type, props, ...children) => {

  if (props == null || !hasOwnProperty.call(props, 'class')) {
    return React.createElement(type, props, ...children)
  }
  
  const newProps = mergeClassProp(props);

  return React.createElement(type, newProps, ...children);
}