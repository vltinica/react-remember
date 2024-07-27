import React from "react";
import { useState } from "react";
import TabButton from "../TabButton";
import Section from "./Section";
import { EXAMPLES } from "../../data";
import Tabs from "./Tabs";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Section title="Examples" id="examples">
        <Tabs
          buttonsContainer="menu"
          buttons={
            <div>
              <menu>
                <TabButton
                  isSelected={selectedTopic === "components"}
                  onClick={() => handleSelect("components")}
                >
                  Components
                </TabButton>
                <TabButton
                  isSelected={selectedTopic === "jsx"}
                  onClick={() => handleSelect("jsx")}
                >
                  JSX
                </TabButton>
                <TabButton
                  isSelected={selectedTopic === "props"}
                  onClick={() => handleSelect("props")}
                >
                  Props
                </TabButton>
                <TabButton
                  isSelected={selectedTopic === "state"}
                  onClick={() => handleSelect("state")}
                >
                  State
                </TabButton>
              </menu>
            </div>
          }
        >
          {tabContent}
        </Tabs>
      </Section>
    </div>
  );
};

export default Examples;
