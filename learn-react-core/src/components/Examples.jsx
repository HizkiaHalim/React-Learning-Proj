import { useState } from 'react';

import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';

export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState();

    function handleClick(selectedButton){
        setSelectedTopic(selectedButton);
        console.log(selectedButton);
    }

    let tabContent = <p>please select something</p>;

    if (selectedTopic) 
    {
        tabContent = (
        <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
            <code>
                {EXAMPLES[selectedTopic].code}
            </code>
            </pre>
        </div>
        )
    }

    return (
      <main>
        <Section id='examples' title='Examples'>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleClick("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleClick("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleClick("state")}>State</TabButton>
          </menu>
          {tabContent}
        </Section>
      </main>
    );
}