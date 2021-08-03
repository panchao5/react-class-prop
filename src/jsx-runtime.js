import { mergeClassProp, hasOwnProperty } from './utils';
import * as ReactJSXRuntime from "react/jsx-runtime";

export function jsx(type, props, key) {
  if (!hasOwnProperty.call(props, "class")) {
    return ReactJSXRuntime.jsx(type, props, key);
  }

  const newProps = mergeClassProp(props)

  return ReactJSXRuntime.jsx(type, newProps, key);
}

export function jsxs(type, props, key) {
  if (!hasOwnProperty.call(props, "class")) {
    return ReactJSXRuntime.jsxs(type, props, key);
  }

  const newProps = mergeClassProp(props)

  return ReactJSXRuntime.jsxs(type, newProps, key);
}
