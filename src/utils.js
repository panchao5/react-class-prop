import clsx from 'clsx';

export const hasOwnProperty = Object.hasOwnProperty

export const mergeClassProp = (props) => {
  const className = clsx(props['className'], props['class'])

  const newProps = { className }

  for (let key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'class' && key !== 'className') {
      newProps[key] = props[key]
    }
  }

  return newProps;
}