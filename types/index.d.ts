import * as React from 'react';
import { CustomJSX } from './jsx-namespace';

export const jsx: typeof React.createElement;

export namespace jsx {
  namespace JSX {
    interface Element extends CustomJSX.Element {}
    interface ElemElementClassent extends CustomJSX.ElementClass {}
    interface ElementAttributesProperty extends CustomJSX.ElementAttributesProperty {}
    interface ElementChildrenAttribute extends CustomJSX.ElementChildrenAttribute {}

    type LibraryManagedAttributes<C, P> = CustomJSX.LibraryManagedAttributes<C, P>

    interface IntrinsicAttributes extends CustomJSX.IntrinsicAttributes{}
    interface IntrinsicClassAttributes<T> extends CustomJSX.IntrinsicClassAttributes<T> {}

    type IntrinsicElements = CustomJSX.IntrinsicElements
  }
}