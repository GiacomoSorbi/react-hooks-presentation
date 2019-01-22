import React, { Component } from 'react';

import {
  Anim,
  Appear,
  // BlockQuote,
  // Cite,
  CodePane,
  // ComponentPlayground,
  Deck,
  // Fill,
  Heading,
  Image,
  // Layout,
  // Link,
  ListItem,
  List,
  // Markdown,
  // MarkdownSlides,
  // Notes,
  // Quote,
  Slide
  // SlideSet,
  // TableBody,
  // TableHeader,
  // TableHeaderItem,
  // TableItem,
  // TableRow,
  // Table,
  // Text,
  // GoToAction
} from '../../src';
import preloader from '../../src/utils/preloader';
import createTheme from '../../src/themes/default';
const acurisLogo = require('../assets/acuris-logo.svg');
require('normalize.css');

const images = {
  ffuu: require('../assets/ffuu.jpg'),
  hooks: require('../assets/hooks.gif')
};

preloader(images);

const theme = createTheme({
  background: '#FFFFF9',
  quaternary: '#bc3f4e',
  primary: '#bc3f4e'
});

const transitionTime = 200;

const slideProps = {
  transitionIn: ['zoom', 'fade'],
  transitionOut: ['slide', 'fade'],
  bgColor: 'background'
};

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
        <Slide {...slideProps}>
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
        <Slide {...slideProps}>
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
            First of all - how many are out there for us? <br /> <br />
          </Heading>
          <Appear fd="1">
            <div>
              <Heading size={2} caps fits textColor="primary" textSize="1.25em">
                Plenty! The full list:
              </Heading>
              <List textColor="primary">
                <Appear>
                  <div>
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
                  </div>
                </Appear>
                <Appear>
                  <div>
                    More specific ones (you won't be seeing them very often):
                    <ListItem>
                      <a href="https://reactjs.org/docs/hooks-reference.html#usereducer">
                        useReducer
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
                  </div>
                </Appear>
              </List>
            </div>
          </Appear>
        </Slide>
        <Slide {...slideProps}>
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
        <Slide {...slideProps}>
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
        <Slide {...slideProps}>
          <Heading size={2} caps fits textColor="primary" textSize="1.25em">
            Think for example of a neat, minimalist component like this:
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/button-function.example')}
            margin="20px auto"
            overflow="overflow"
            textSize="0.8em"
          />
          <Appear>
            <Heading size={2} caps fits textColor="primary" textSize="1.25em">
              ...and then a Change Request appears - make it so that it displays
              <i>text1</i> or <i>text2</i> according to how many times it has
              been clicked, starting with <i>text1</i>.<br />
              <br />
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} caps fits textColor="primary" textSize="1.25em">
              FFFFFFFFFFFFFFUUUU-
              <Image src={images.ffuu.replace('/', '')} width="200px" />
            </Heading>
          </Appear>
        </Slide>
        <Slide {...slideProps}>
          <Heading size={2} caps fits textColor="primary" textSize="1.25em">
            The traditional way:
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/button-class.example')}
            margin="20px auto"
            overflow="overflow"
            textSize="0.6em"
          />
          <Appear>
            <Heading size={2} caps fits textColor="primary" textSize="1.25em">
              Did you notice at least 3 errors above?
              <br />
              <br />
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} caps fits textColor="primary" textSize="1.25em">
              Also, do you really like pain?
            </Heading>
          </Appear>
        </Slide>
        <Slide {...slideProps}>
          <Heading size={2} caps fits textColor="primary" textSize="1.25em">
            The hooks way:
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/button-hooks.example')}
            margin="20px auto"
            overflow="overflow"
            textSize="0.8em"
          />
          <Appear>
            <Heading size={2} caps fits textColor="primary" textSize="1.25em">
              Did you notice at least 3 errors above?
              <br />
              <br />
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} caps fits textColor="primary" textSize="1.25em">
              No, this time they are not there: leaner code, easier to write and
              maintain FTW!
            </Heading>
          </Appear>
        </Slide>
        <Slide {...slideProps}>
          <Heading size={2} fits textColor="primary" textSize="1.25em">
            useState TAKE-AWAYS:
          </Heading>
          <List textColor="primary">
            <Appear>
              <ListItem>
                state like in a class component, right out of the box
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                can replace the use of <i>constructor</i> in a lot of use cases
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                can replace the use of <i>getDerivedStateFromProps</i> too with{' '}
                <a
                  href="https://reactjs.org/docs/hooks-faq.html#how-do-i-implement-getderivedstatefromprops"
                  target="_blank"
                >
                  some little trick
                </a>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                always generated in a [variable, setter] format, thus...
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>...also more readable and easy to grasp</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                and can be composed <i>outside</i> a component to make them more
                modular reusable...
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                ...as long as you <i>use</i> them in a component
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                That is called <i>custom hook</i> and React really needed
                something like that!
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading size={2} caps fits textColor="primary" textSize="1.25em">
            On this one we try together to make sense of it
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/timer.example')}
            margin="20px auto"
            overflow="overflow"
            textSize="0.8em"
          />
          <Appear>
            <Heading size={2} caps fits textColor="primary" textSize="1.25em">
              Was it really so hard?
              <br />
              <br />
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} caps fits textColor="primary" textSize="1.25em">
              Oh, and it was a custom hook
            </Heading>
          </Appear>
        </Slide>
        <Slide {...slideProps}>
          <Heading size={2} fits textColor="primary" textSize="1.25em">
            useEffect TAKE-AWAYS:
          </Heading>
          <List textColor="primary">
            <Appear>
              <ListItem>
                lifecycle methods like in a class component, right out of the
                box
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                can replace the use of{' '}
                <i>componentDidMount, componentDidUpdate</i> and{' '}
                <i>componentWillUnmount</i>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                the last one is triggered if/when your <i>useEffect</i> returns
                something
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                to this day, <i>componentDidCatch</i> and{' '}
                <i>getDerivedStateFromError</i> are the only methods that still
                need a class
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                [<i>shouldComponentUpdate</i> requires <i>React.memo</i>, if you
                are curious]
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                they can be fine tuned avoiding unnecessary calls, so it is
                ideal
                <a
                  href="https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect"
                  target="_blank"
                >
                  passing a second parameter, an array of values to ignore
                </a>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                the function is called <b>after</b> the paint, so if you want
                something that fires with the same event, go for
                <a
                  href="https://reactjs.org/docs/hooks-reference.html#uselayouteffect"
                  target="_blank"
                >
                  useLayoutEffect
                </a>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading size={1} caps fits textColor="primary" textSize="1.25em">
            Quick general take-aways:
          </Heading>
          <List textColor="primary">
            <Appear fid="1">
              <ListItem>
                Don't force their adoption - no need to rewrite all your old
                components
              </ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>
                Don't panic: your current skills are going to stay relevant
              </ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>
                ESLint is (already) your friend:{' '}
                <a
                  href="https://www.npmjs.com/package/eslint-plugin-react-hooks"
                  target="_blank"
                >
                  eslint-plugin-react-hooks@next
                </a>
              </ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem>
                And so are TypeScript and Flow (not 100% sure about Reason!)
              </ListItem>
            </Appear>
            <Appear fid="5">
              <ListItem>
                Hooked components work as usual (and custom hooks can be tested
                in components!)
              </ListItem>
            </Appear>
            <Appear fid="6">
              <ListItem>
                Eat healthy, sleep regularly and follow the rules of hooks!
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading size={1} caps fits textColor="primary">
            Question (or booing) time!
            <br />
            <br />
          </Heading>
          <Heading size={1} caps fits textColor="primary" textSize="1.8em">
            [Plus: thanks again to our super kind hosts and...
            <br />
            <br />
            We are hiring, come to have a quick talk with us if you are
            interested!]
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
