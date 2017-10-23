const classMap = {
  noPadding: 'no-padding',
  halfPadding: 'half-padding',
  notSpaced: 'not-spaced',
  withUnderline: 'with-underline'
}

const cls = (obj) =>
  'level ' +
  Object
    .keys(obj)
    .filter((k) => obj[k] === true)
    .map((k) => classMap[k])
    .join(' ')

const Level = ({
  // Components as props
  left,
  right,
  // CSS modifiers
  noPadding,
  halfPadding,
  notSpaced,
  withUnderline,
  // ...rest
  children,
  ...props
}) =>
  <div>
    {children.length > 0 &&
      <div class={cls({noPadding, halfPadding, notSpaced, withUnderline})}>
        {children}
      </div>}

    {!children.length &&
      <div class={cls({noPadding, halfPadding})}>
        <div class='level-left'>
          {left(props)}
        </div>
        <div class='level-right'>
          {right(props)}
        </div>
      </div>}
  </div>

export default Level
