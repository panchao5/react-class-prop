import 'react'

import { ClassValue } from 'clsx';

type WithConditionalClassProp<P> = 'className' extends keyof P
  ? string extends P['className' & keyof P] ? { class?: ClassValue } : {} : {}

export namespace CustomJSX {
  interface Element extends JSX.Element {}
  interface ElementClass extends JSX.ElementClass {}
  interface ElementAttributesProperty extends JSX.ElementAttributesProperty {}
  interface ElementChildrenAttribute extends JSX.ElementChildrenAttribute {}

  type LibraryManagedAttributes<C, P> = WithConditionalClassProp<P> &  JSX.LibraryManagedAttributes<C, P>;

  interface IntrinsicAttributes  extends JSX.IntrinsicAttributes {}
  interface IntrinsicClassAttributes<T> extends JSX.IntrinsicClassAttributes<T> {}

  type IntrinsicElements = {
    [K in keyof JSX.IntrinsicElements]: JSX.IntrinsicElements[K] & {
      class?: ClassValue;
    }
  }

}