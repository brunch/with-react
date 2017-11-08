import {urlFor} from '/util/route'

export default () =>
  <div>
    <a href={urlFor('home')}>Home</a>
    &nbsp;
    <a href={urlFor('components')}>Components</a>
    &nbsp;
    <a
      href={urlFor(
        'resource',
        {args: {id: 123}, queries: {search: 'abcd', options: ['1', 2, 'a', 'b']}}
      )}
    >
      Resource
    </a>
  </div>
