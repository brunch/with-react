import Card from '/components/elements/card'
import Button from '/components/elements/button'
import Dropdown from '/components/elements/dropdown'
import {
  Form,
  FormHeading,
  FieldSet,
  TextField
} from '/components/elements/form'
import {Row, Column} from '/components/elements/grid'
import Link from '/components/elements/link'

import range from '/util/range'

const Home = ({url}) =>
  <div style='max-width: 640px; margin: 1rem auto;'>
    <h1>Hello World</h1>
    <Card className='elevated hover-scale'>
      <p>{url}</p>
      <Link to='http://google.ca'>Google</Link>
      <Button to='http://news.ycombinator.com'>Hacker News</Button>
    </Card>
    <div class='spaced'>
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
    <Card className='spaced'>
      <Form>
        <FormHeading>
          <h2>Sign In</h2>
          <p>Sign in to your account below.</p>
        </FormHeading>

        <FieldSet>
          <Button className='btn-outline'>Sign In with Google</Button>
        </FieldSet>

        <div class='or'>
          <span>Or</span>
        </div>

        <FieldSet>
          <TextField placeholder='Your Email' name='email' />
          <TextField placeholder='Your Password' name='pass' />
        </FieldSet>

        <FieldSet className='submit'>
          <Button type='submit'>Sign In</Button>
        </FieldSet>
      </Form>
    </Card>
    <Row><h2>Grid</h2></Row>
    <Row>{range(1, 4).map((n) =>
      <Column>
        <Card>{n}</Card>
      </Column>
    )}</Row>
    <Row>{range(4, 6).map((n) =>
      <Column>
        <Card>{n}</Card>
      </Column>
    )}</Row>
  </div>

export default Home
