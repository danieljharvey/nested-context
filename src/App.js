import React from "react";
import "./App.css";

const ColourContext = React.createContext("black");

const ColouredBox = ({ children }) => (
  <ColourContext.Consumer>
    {colour => (
      <div style={{ backgroundColor: colour, padding: "40px" }}>
        <>
          {`We are getting the background colour from the closest context provider up the
          tree which is ${colour}`}
          {children}
        </>
      </div>
    )}
  </ColourContext.Consumer>
);

function App() {
  return (
    <div className="App">
      <ColourContext.Provider value="red">
        <ColouredBox>
          <ColourContext.Provider value="yellow">
            <ColouredBox>
              <ColourContext.Provider value="green">
                <ColouredBox>
                  <ColourContext.Provider value="blue">
                    <ColouredBox>
                      <ColourContext.Provider value="pink">
                        <ColouredBox></ColouredBox>
                      </ColourContext.Provider>
                    </ColouredBox>
                  </ColourContext.Provider>
                </ColouredBox>
              </ColourContext.Provider>
            </ColouredBox>
          </ColourContext.Provider>
        </ColouredBox>
      </ColourContext.Provider>
    </div>
  );
}

export default App;
