import React, { Component } from 'react';

import {
  Anim,
  Appear,
  BlockQuote,
  Cite,
  // CodePane,
  // ComponentPlayground,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  // Link,
  ListItem,
  List,
  // Markdown,
  MarkdownSlides,
  Notes,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  // Text,
  GoToAction
} from '../../src';
import preloader from '../../src/utils/preloader';
import createTheme from '../../src/themes/default';
import Interactive from '../assets/interactive';
const acurisLogo = require('../assets/acuris-logo.svg');
require('normalize.css');

const images = {
  hooks: require('../assets/hooks.gif')
};

preloader(images);

const theme = createTheme({
  background: '#FFFFF9',
  quaternary: '#bc3f4e',
  primary: '#bc3f4e'
});

const transitionTime = 200;

export default class Presentation extends Component {
  constructor() {
    super(...arguments);

    this.updateSteps = this.updateSteps.bind(this);
  }

  state = {
    steps: 0
  };

  updateSteps(steps) {
    if (this.state.steps !== steps) {
      this.setState({ steps });
    }
  }

  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        theme={theme}
        transitionDuration={transitionTime}
      >
        <Slide transition={['zoom']} bgColor="background">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            You are about to begin...
          </Heading>
          <Appear fid="1">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              An Adventurous Foray into React Hooks
            </Heading>
          </Appear>
          <Appear fid="2">
            <Image src={images.hooks.replace('/', '')} margin="0px auto" />
          </Appear>
        </Slide>
        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}
          bgColor="background"
        >
          <Anim
            fromStyle={{
              opacity: 1,
              transform: 'translate3d(0px, 0px, 0px) scale(1) rotate(0deg)'
            }}
            toStyle={[
              {
                opacity: 1,
                transform: 'translate3d(0px, -50%, 0px) scale(1) rotate(0deg)'
              }
            ]}
            easing={'circleIn'}
            transitionDuration={transitionTime}
          >
            <Heading size={2} caps fits textColor="primary">
              But first a few words from our "sponsor":
            </Heading>
          </Anim>
          <Anim
            fromStyle={{
              opacity: 0,
              transform: 'translate3d(0px, 0px, 0px) scale(1) rotate(0deg)'
            }}
            toStyle={[
              {
                opacity: 1,
                transform: 'translate3d(0px, 0px, 0px) scale(1) rotate(0deg)'
              },
              {
                opacity: 1,
                transform: 'translate3d(0px, -100%, 0px) scale(1) rotate(0deg)'
              }
            ]}
            easing={'circleIn'}
            transitionDuration={transitionTime}
          >
            <Heading size={2} caps textColor="black" textFont="primary">
              <img
                src={acurisLogo}
                height="120px"
                style={{ marginBottom: '-40px' }}
              />{' '}
              Acuris
            </Heading>
          </Anim>
          <Anim
            fromStyle={{
              opacity: 0,
              transform: 'translate3d(0px, 0px, 0px) scale(1) rotate(0deg)'
            }}
            toStyle={[
              {
                opacity: 1,
                transform: 'translate3d(-40%, -50%, 0px) scale(1) rotate(0deg)'
              }
            ]}
            easing={'circleIn'}
            transitionDuration={transitionTime}
          >
            <Heading size={2} caps fits textColor="primary" textSize="1.8em">
              Financial Publishing
              <br /> and Business Intelligence
            </Heading>
          </Anim>
          <Anim
            fromStyle={{
              opacity: 0,
              transform: 'translate3d(0px, 0px, 0px) scale(1) rotate(0deg)'
            }}
            toStyle={[
              {
                opacity: 1,
                transform: 'translate3d(+40%, -225%, 0px) scale(1) rotate(0deg)'
              }
            ]}
            easing={'circleIn'}
            transitionDuration={transitionTime}
          >
            <Heading size={2} caps fits textColor="primary" textSize="2em">
              Founded in 2000
            </Heading>
          </Anim>
          <Anim
            fromStyle={{
              opacity: 0,
              transform: 'translate3d(0px, 0px, 0px) scale(1) rotate(0deg)'
            }}
            toStyle={[
              {
                opacity: 1,
                transform: 'translate3d(-40%, -50%, 0px) scale(1) rotate(0deg)'
              }
            ]}
            easing={'circleIn'}
            transitionDuration={transitionTime}
          >
            <Heading size={2} caps fits textColor="primary" textSize="1.8em">
              Main sites: London,
              <br />
              New York, Hong Kong
            </Heading>
          </Anim>
          <Anim
            fromStyle={{
              opacity: 0,
              transform: 'translate3d(0px, 0px, 0px) scale(1) rotate(0deg)'
            }}
            toStyle={[
              {
                opacity: 1,
                transform: 'translate3d(+40%, -150%, 0px) scale(1) rotate(0deg)'
              }
            ]}
            easing={'circleIn'}
            transitionDuration={transitionTime}
          >
            <Heading size={2} caps fits textColor="primary" textSize="1.8em">
              1300 Employees
              <br />
              in 70 locations
            </Heading>
          </Anim>
          <Anim
            fromStyle={{
              opacity: 0,
              transform: 'translate3d(0px, 0px, 0px) scale(1) rotate(0deg)'
            }}
            toStyle={[
              {
                opacity: 1,
                transform: 'translate3d(-40%, -100%, 0px) scale(1) rotate(0deg)'
              }
            ]}
            easing={'circleIn'}
            transitionDuration={transitionTime}
          >
            <Heading size={2} caps fits textColor="primary" textSize="1.8em">
              11 Development Teams
              <br />
              across Europe
            </Heading>
          </Anim>
          <Anim
            fromStyle={{
              opacity: 0,
              transform: 'translate3d(0px, 0px, 0px) scale(1) rotate(0deg)'
            }}
            toStyle={[
              {
                opacity: 1,
                transform: 'translate3d(+40%, -200%, 0px) scale(1) rotate(0deg)'
              }
            ]}
            easing={'circleIn'}
            transitionDuration={transitionTime}
          >
            <Heading size={2} caps fits textColor="primary" textSize="1.8em">
              Portugal, Poland, Romania
              <br />
              and of course <b>London</b>
            </Heading>
          </Anim>
        </Slide>
        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}
          bgColor="background"
        >
          <Heading size={2} caps fits textColor="primary" textSize="1.8em">
            In our stack we have React, Redux, Angular, NodeJS, AWS, Go,
            Terraform and much more
            <br />
            <br />
          </Heading>
          <Appear fd="1">
            <Heading size={2} caps fits textColor="primary" textSize="1.8em">
              Currently used by 60+ Devs and Engineers of different seniorities
            </Heading>
          </Appear>
          <Appear fd="2">
            <Heading size={2} caps fits textColor="primary" textSize="1.8em">
              And Planning to double that number by the end of the year
              <br />
              <br />
            </Heading>
          </Appear>
          <Appear fd="3">
            <Heading size={2} caps fits textColor="primary" textSize="1.25em">
              And we attract and keep our talents with competitive remuneration
              and a lot of other perks:
              <br />
              training/conferences budget, pair programming, hackdays, wfh days,
              team lunches (on our roof garden if you wish so), bike-to-work
              schema, gym discounts and plenty more
            </Heading>
          </Appear>
        </Slide>
        <Slide
          transition={[
            'fade',
            (transitioning, forward) => {
              const angle = forward ? -180 : 180;
              return {
                transform: `
                  translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                  rotate(${transitioning ? angle : 0}deg)
                `,
                backgroundColor: transitioning ? 'background' : 'quaternary'
              };
            }
          ]}
          bgColor="background"
        >
          <Heading size={2} caps fits textColor="primary" textSize="1.25em">
            ...And now, back to Business: React Hooks! <br />
            First of all - how many are out there for us?
          </Heading>
          <Appear fd="1">
            <div>
              <Heading size={2} caps fits textColor="primary" textSize="1.25em">
                Plenty! The full list:
              </Heading>
              <List textColor="primary">
                Basic ones:
                <ListItem>
                  <a href="https://reactjs.org/docs/hooks-reference.html#usestate">
                    useState
                  </a>
                </ListItem>
                <ListItem>
                  <a href="https://reactjs.org/docs/hooks-reference.html#useeffect">
                    useEffect
                  </a>
                </ListItem>
                <ListItem>
                  <a href="https://reactjs.org/docs/hooks-reference.html#usecontext">
                    useContext
                  </a>
                </ListItem>
                More specific ones (you won't be seeing them very often):
                <ListItem>
                  <a href="https://reactjs.org/docs/hooks-reference.html#usereducer">
                    usereducer
                  </a>
                </ListItem>
                <ListItem>
                  <a href="https://reactjs.org/docs/hooks-reference.html#usecallback">
                    useCallback
                  </a>
                </ListItem>
                <ListItem>
                  <a href="https://reactjs.org/docs/hooks-reference.html#usememo">
                    useMemo
                  </a>
                </ListItem>
                <ListItem>
                  <a href="https://reactjs.org/docs/hooks-reference.html#useref">
                    useRef
                  </a>
                </ListItem>
                <ListItem>
                  <a href="https://reactjs.org/docs/hooks-reference.html#useimperativehandle">
                    useImperativeHandle
                  </a>
                </ListItem>
                <ListItem>
                  <a href="https://reactjs.org/docs/hooks-reference.html#uselayouteffect">
                    useLayoutEffect
                  </a>
                </ListItem>
                <ListItem>
                  <a href="https://reactjs.org/docs/hooks-reference.html#usedebugvalue">
                    useDebugValue
                  </a>
                </ListItem>
              </List>
            </div>
          </Appear>
          {/* <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/deck.example')}
            margin="20px auto"
            overflow="overflow"
          /> */}
        </Slide>
        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}
          bgColor="background"
        >
          <Heading size={2} caps fits textColor="primary" textSize="1.25em">
            That's a lot, but they will all do basically one thing
            <br />- you get the full power of a class component while using
            function components -...
            <br />
            <br />
          </Heading>
          <Appear fid="1">
            <div>
              <Heading size={2} caps fits textColor="primary" textSize="1.25em">
                ...and they all follow 2 simple rules:
              </Heading>
              <List textColor="primary">
                <ListItem>
                  <b>
                    Thou shall not use hooks outside the top level and never in
                    loops, conditionals, etc or be cursed;
                  </b>
                </ListItem>
                <ListItem>
                  <b>
                    Thou shall not use hooks outside functional components (ie:
                    never in ordinary JS function) or spend thousands of years
                    in the CR limbo;
                  </b>
                </ListItem>
              </List>
            </div>
          </Appear>
          <Appear fid="2">
            <Heading size={2} caps fits textColor="primary" textSize="1.25em">
              Extra unwritten rule: they are *optional*
              <br />- use them only if/when you wish!
            </Heading>
          </Appear>
        </Slide>
        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}
          bgColor="background"
        >
          <Heading size={2} caps fits textColor="primary" textSize="1.25em">
            We are going to focus on 2 of them:
          </Heading>
          <List textColor="primary">
            <Appear fid="1">
              <ListItem>
                <b>useState</b>: adding a state to a function component
              </ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>
                <b>useEffect</b>: adding lifecycle methods to a function
                component
              </ListItem>
            </Appear>
          </List>
          <Appear fid="2">
            <Heading size={2} caps fits textColor="primary" textSize="1.25em">
              Don't be sad: they are probably the most common and what you learn
              with them can be easily translated to the others!
              <br />
              <br />
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={2} caps fits textColor="primary" textSize="1.25em">
              [Or be sad for all the times that you had to "upgrade" a function
              component to class component or the other way around and screwed
              up something...]
            </Heading>
          </Appear>
        </Slide>
        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}
          bgColor="background"
        >
          <Anim
            onAnim={(forwards, animIndex) => {
              /* eslint-disable */
              console.log('forwards ', forwards);
              console.log('animIndex ', animIndex);
              /* eslint-enable */
            }}
            fromStyle={{
              opacity: 0,
              transform: 'translate3d(0px, -100px, 0px)  scale(1) rotate(0deg)'
            }}
            toStyle={[
              {
                opacity: 1,
                transform: 'translate3d(0px, 0px, 0px)  scale(1) rotate(0deg)'
              },
              {
                opacity: 1,
                transform:
                  'translate3d(0px, 0px, 0px) scale(1.6) rotate(-15deg)'
              },
              {
                opacity: 1,
                transform: 'translate3d(0px, 0px, 0px)  scale(0.8) rotate(0deg)'
              },
              {
                opacity: 1,
                transform:
                  'translate3d(0px, -200px, 0px)  scale(0.8) rotate(0deg)'
              },
              {
                opacity: 1,
                transform:
                  'translate3d(200px, 0px, 0px)  scale(0.8) rotate(0deg)'
              },
              {
                opacity: 1,
                transform:
                  'translate3d(0px, 200px, 0px)  scale(0.8) rotate(0deg)'
              },
              {
                opacity: 1,
                transform:
                  'translate3d(-200px, 0px, 0px)  scale(0.8) rotate(0deg)'
              }
            ]}
            easing={'bounceOut'}
            transitionDuration={transitionTime}
          >
            <div>
              <Heading size={6} caps fit textColor="secondary">
                Flexible
                <br />
                animations
              </Heading>
            </div>
          </Anim>
          <Notes>Much animation, very style</Notes>
        </Slide>
        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}
          bgColor="background"
        >
          <Heading size={2} textColor="secondary" margin="0.25em">
            Mix it up!
          </Heading>
          <Heading size={6} textColor="tertiary">
            You can even jump to different slides with a standard button or
            custom component!
          </Heading>
          <GoToAction margin="1em" slide={8}>
            Jump to Slide 8
          </GoToAction>
          <GoToAction
            render={goToSlide => (
              <select
                defaultValue=""
                style={{
                  background: '#000',
                  color: '#fff',
                  fontFamily: theme.print.fonts.primary,
                  fontSize: '1.1em'
                }}
                onChange={({ target }) => goToSlide(target.value)}
              >
                <option value="" disabled>
                  Custom Slide Picker
                </option>
                <option value="wait-what">Wait What!? Slide</option>
                <option value={3}>Slide 3</option>
              </select>
            )}
          />
          <Notes>Doesn't work in export view, though</Notes>
        </Slide>
        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}
          bgColor="background"
        >
          <Appear>
            <Heading size={1} caps textColor="tertiary">
              Can
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps textColor="secondary">
              Count
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps textColor="tertiary">
              Steps
            </Heading>
          </Appear>
          <Heading size={1} caps fit textColor="secondary">
            Steps: {this.state.steps}
          </Heading>
        </Slide>
        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}
          bgColor="background"
        >
          <Heading caps fit>
            Flexible Layouts
          </Heading>
          <Layout>
            <Fill>
              <Heading
                size={4}
                caps
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
                Left
              </Heading>
            </Fill>
            <Fill>
              <Heading
                size={4}
                caps
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
                Right
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}
          bgColor="background"
        >
          <BlockQuote>
            <Quote>Wonderfully formatted quotes</Quote>
            <Cite>Ken Wheeler</Cite>
          </BlockQuote>
        </Slide>
        <Slide
          transition={['spin', 'zoom']}
          bgColor="tertiary"
          controlColor="primary"
          progressColor="primary"
        >
          <Heading caps fit size={1} textColor="primary">
            Inline Markdown
          </Heading>

          <Notes>Who doesn't love markdown?</Notes>
        </Slide>
        {MarkdownSlides`
#### Create Multiple Slides in Markdown
All the same tags and elements supported in <Markdown /> are supported in MarkdownSlides.
---
Slides are separated with **three dashes** and can be used _anywhere_ in the deck. The markdown can either be:
* A Tagged Template Literal
* Imported Markdown from another file
---
Add some inline code to your markdown!

\`\`\`js
const myCode = (is, great) => 'for' + 'sharing';
\`\`\`
          `}
        <Slide transition={['slide', 'spin']} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Smooth
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Combinable Transitions
          </Heading>
          <Notes>So smooth</Notes>
        </Slide>
        <SlideSet>
          <Slide transition={['fade']} bgColor="secondary" textColor="primary">
            <List>
              <Appear>
                <ListItem>Inline style based theme system</ListItem>
              </Appear>
              <Appear>
                <ListItem>Autofit text</ListItem>
              </Appear>
              <Appear>
                <ListItem>Flexbox layout system</ListItem>
              </Appear>
              <Appear>
                <ListItem>PDF export</ListItem>
              </Appear>
              <Appear>
                <ListItem>And...</ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide transition={['slide']} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive />
          </Slide>
        </SlideSet>
        <Slide transition={['slide']} bgColor="primary">
          <Heading
            size={4}
            caps
            textColor="secondary"
            bgColor="white"
            margin={10}
          >
            Pizza Toppings
          </Heading>
          <Layout>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderItem />
                  <TableHeaderItem>2011</TableHeaderItem>
                  <TableHeaderItem>2013</TableHeaderItem>
                  <TableHeaderItem>2015</TableHeaderItem>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableItem>None</TableItem>
                  <TableItem>61.8%</TableItem>
                  <TableItem>39.6%</TableItem>
                  <TableItem>35.0%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Pineapple</TableItem>
                  <TableItem>28.3%</TableItem>
                  <TableItem>54.5%</TableItem>
                  <TableItem>61.5%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Pepperoni</TableItem>
                  <TableItem />
                  <TableItem>50.2%</TableItem>
                  <TableItem>77.2%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Olives</TableItem>
                  <TableItem />
                  <TableItem>24.9%</TableItem>
                  <TableItem>55.9%</TableItem>
                </TableRow>
              </TableBody>
            </Table>
          </Layout>
          <Notes>Hard to find cities without any pizza</Notes>
        </Slide>
        <Slide transition={['spin', 'slide']} bgColor="tertiary">
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            Made with love in Seattle by
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
