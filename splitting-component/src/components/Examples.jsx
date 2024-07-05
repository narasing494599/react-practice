import  TabButton  from './TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from '../assets/data.js'
export default function Examples() {
    let tabs = ['components', 'jsx', 'state', 'props'];
    const [selectedTopic, setSelectedTopic] = useState();

    let tabContent = 'please select tab';
    if (selectedTopic) {
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
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                {tabs.map(tabName => <TabButton isTabActive={selectedTopic === tabName} onSelect={() => handleSelect(tabName)}>{tabName}</TabButton>)}
            </menu>
            {tabContent}
            <h3></h3>
        </section>
    )
}