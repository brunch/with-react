import Card from '/components/elements/card'
import Link from '/components/elements/link'
import Button from '/components/elements/button'
import Dropdown from '/components/elements/dropdown'

const Home = ({url}) =>
  <div>
    <h1>Hello World</h1>
    <Card className='elevated hover-scale'>
      <p>{url}</p>
      <Link to='http://google.ca'>Google</Link>
      <Button to='http://news.ycombinator.com'>Hacker News</Button>
    </Card>
    <div>
      <h2>Dropdown</h2>
      <Dropdown>
        <ul>
          <li><a href=''>Hotdog</a></li>
          <li><a href=''>Cola</a></li>
          <li><a href=''>Fruit Smoothie</a></li>
          <li><a href=''>Dinasaur Egg</a></li>
        </ul>
      </Dropdown>
    </div>
  </div>

export default Home
