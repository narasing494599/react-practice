import { CORE_CONCEPTS } from '../src/assets/data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  function clickEvent(selectedTab) {
    console.log(selectedTab)
}
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => clickEvent('Components')}>Components</TabButton>
            <TabButton onSelect={() => clickEvent('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => clickEvent('Props')}>Props</TabButton>
            <TabButton onSelect={() => clickEvent('State')}>State</TabButton>
          </menu>

        </section>
      </main>
    </div>
  );
}

export default App;