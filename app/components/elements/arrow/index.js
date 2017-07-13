export const Arrow = ({className = ''}) =>
  <div class='arrow-container'>
    <span class={'arrow ' + className} />
  </div>

export const DownArrow = ({className = ''}) =>
  <Arrow className={'arrow-down ' + className} />

export const LeftArrow = ({className = ''}) =>
  <Arrow className={'arrow-left ' + className} />

export default Arrow
