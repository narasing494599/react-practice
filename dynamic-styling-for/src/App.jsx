import { CORE_CONCEPTS } from '../src/assets/data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import {EXAMPLES} from '../src/assets/data.js'
function App() {

  let tabs = ['components', 'jsx', 'state', 'props'];
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = 'please select tab';
if(selectedTopic) {
  tabContent = (<div id='dynamic-content'>
  <h3>{EXAMPLES[selectedTopic].title}</h3>
  <p>{EXAMPLES[selectedTopic].description}</p>
  <pre>
    <code>{EXAMPLES[selectedTopic].code}</code>
  </pre>
</div>);
}

  function handleSelect(selectedTab) {
    setSelectedTopic(selectedTab);
}
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(core_concepts => <CoreConcept {...core_concepts} />)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
           {tabs.map(tabName => <TabButton isTabActive = {selectedTopic === tabName} onSelect={() => handleSelect(tabName)}>{tabName}</TabButton>)}
          </menu>
            {tabContent}
          <h3></h3>
        </section>
      </main>
    </div>
  );
}

export default App;