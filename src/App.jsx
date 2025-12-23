import React,{useState} from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import {CORE_CONCEPTS,EXAMPLES} from "./data.js";
import CoreConcept from "./components/CoreConcept.jsx";

function App() {
  const [exampleData,setExpData] = useState('components');
  function handelSelect(selectBtn) {
      setExpData(selectBtn);
  }

  let tabContent = <p>Please select a topic.</p>
  if(exampleData) {
    tabContent = (<div id="tab-content">
            <h3>{EXAMPLES[exampleData].title}</h3>
            <p>{EXAMPLES[exampleData].description}</p>
            <pre>
              <code>
                  {EXAMPLES[exampleData].code}
              </code>
            </pre>
          </div>)
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {
              CORE_CONCEPTS.map((item,index)=> {
                return <CoreConcept key={index} {...item} />
              })
            }
            
          </ul>

        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={exampleData === 'components'} label="Components" onSelect={()=>handelSelect('components')} />
            <TabButton isSelected={exampleData === 'jsx'} label="Jsx" onSelect={()=>handelSelect('jsx')} />
            <TabButton isSelected={exampleData === 'props'} label="Props" onSelect={()=>handelSelect('props')} />
            <TabButton isSelected={exampleData === 'state'} label="State" onSelect={()=>handelSelect('state')} />
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
