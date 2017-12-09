import {map} from 'wasmuth'

export default function render ({
  active,
  prev,
  next,
  className = 'carousel-slide',
  getRef,
  getStyle,
  children
}) {
  return <div className='carousel-block carousel'>
    <div className='card-carousel-content row'>
      <nav>
        <a onClick={prev} href='#' className='carousel-btn left'>&nbsp;</a>
      </nav>
      <div className='slides'>
        {map((c, idx) =>
          <div
            ref={(ref) => idx === 0 && getRef(ref)}
            style={getStyle(idx, active)}
            class={`${className}${idx === active ? ' active' : ''}`}
          >{c}</div>
        , children)}
      </div>
      <nav>
        <a onClick={next} href='#' className='carousel-btn right'>&nbsp;</a>
      </nav>
    </div>
  </div>
}
