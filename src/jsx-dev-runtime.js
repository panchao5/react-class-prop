import { mergeClassProp, hasOwnProperty } from './utils';
import * as ReactJSXENVRuntime from 'react/jsx-dev-runtime';

export const Fragment = ReactJSXENVRuntime.Fragment

export function jsxDEV(type, props, key, isStaicChildren, source, self ) {
  if (!hasOwnProperty.call(props, 'class')) {
    return ReactJSXENVRuntime.jsxDEV(
      type,
      props,
      key,
      isStaicChildren,
      source,
      self
    )
  }

  const newProps = mergeClassProp(props);

  return ReactJSXENVRuntime.jsxDEV(type, newProps, key);
}