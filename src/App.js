import React from 'react';
import backgroundImage from './bg.png';
import './App.css';
import ImageMapper from "react-image-mapper"
import Component from "@reach/component-component";
// import Popup from "./Popup";
// import { Button } from 'reactstrap';

function App() {

  const PopupClickContext = React.createContext(null);

  const [showPrimary, setShowPrimary] = React.useState(false);
  const [hover, setHover] = React.useState(true);

  const clickHandler = (area) => {
    console.log(area);
    setShowPrimary(!showPrimary);
  }

  const enterArea = (area) => {
    console.log(area);
  }

  const leaveArea = (area) => {
    console.log(area);
  }

  const image = backgroundImage;

  const map = {
    name: "dentist",
    areas: [
      { name: "X-ray", title: "xray", shape: "rect", coords: [159,105,234,169], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Recliner", title: "recliner", shape: "rect", coords: [492,258,625,487], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Red Chair", title: "red_chair", shape: "rect", coords: [221,193,331,314], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Computer", title: "computer", shape: "rect", coords: [168,37,420,86], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Medicine Cabinet", title: "medicine_cabinet", shape: "rect", coords: [39,482,121,610], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Gas", title: "gas", shape: "rect", coords: [91,614,374,746], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "1st Degree", title: "degree_1", shape: "rect", coords: [459,24,524,55], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "2nd Degree", title: "degree_2", shape: "rect", coords: [574,25,637,59], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Instruments", title: "instruments", shape: "rect", coords: [633,278,780,326], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Mobile Sink", title: "mobile_sink", shape: "rect", coords: [632,374,773,483], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Denture", title: "denture", shape: "rect", coords: [1096,75,1173,148], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Sink", title: "sink", shape: "rect", coords: [1094,197,1171,343], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Sink Cupboards", title: "cupboards", shape: "rect", coords: [1085,225,1067,305], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Wheelie Chair", title: "wheelie_chair", shape: "circle", coords: [835,392,40], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "X-ray Machine", title: "xray_machine", shape: "rect", coords: [570,89,685,190], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Bookshelf", title: "bookshelf", shape: "rect", coords: [897,55,1082,98], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Dual Cupboards", title: "dual_cupboards", shape: "rect", coords: [904,173,1081,187], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Door", title: "door", shape: "rect", coords: [870,735,1138,776], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
    ]
  }

  const PopupCloser = ({ children }) => {
    return (
      <Component
        didMount={({ setState }) => {
          document.addEventListener("click", e => {
            const el = e.target;
            setState({ clickedElement: el }, () =>
              setState({ clickedElement: null })
            );
          });
        }}
        willUnMount={({ setState }) => {
          document.removeEventListener("click", e => {
            const el = e.target;
            setState({ clickedElement: el }, () =>
              setState({ clickedElement: null })
            );
          });
        }}
        initialState={{ clickedElement: null }}
      >
        {({ state }) => {
          return (
            <PopupClickContext.Provider value={state.clickedElement}>
              {children}
            </PopupClickContext.Provider>
          );
        }}
      </Component>
    );
  };

  const Popup = ({ children, contents }) => {
    return (
      <PopupClickContext.Consumer>
        {clickedElement => {
          return (
            <Component
              initialState={{ open: false, pos: [0, 0] }}
              refs={{ bound: React.createRef(), popup: React.createRef() }}
              didUpdate={({ setState, refs }) => {
                if (!refs.popup.current) return;
                if (!clickedElement) return;
                if (clickedElement === refs.bound) return;
                if (!refs.popup.current.contains(clickedElement)) {
                  setState({ open: false });
                }
              }}
            >
              {({ refs, state, setState }) => {
                const el = () => (
                  <div
                    ref={refs.popup}
                    style={{
                      position: "absolute",
                      top: state.pos[0] + "px",
                      left: state.pos[1] + "px"
                    }}
                  >
                    {contents}
                  </div>
                );
                const setRef = externalRef => (refs.bound = externalRef);
                const open = () => {
                  //const meas = measureDomNode(refs.popup)
                  //console.log(meas)
                  const rect = refs.bound.getBoundingClientRect();
                  setState({
                    open: true,
                    pos: [
                      window.scrollY + rect.top + rect.height,
                      window.scrollX + rect.left + rect.width / 2
                    ]
                  });
                };
                const close = () => {
                  setState({ open: false });
                };
                const toggle = () => (state.open ? close() : open());
                return (
                  <React.Fragment>
                    {state.open ? el() : null}
                    {children({ open, close, toggle, setRef })}
                  </React.Fragment>
                );
              }}
            </Component>
          );
        }}
      </PopupClickContext.Consumer>
    );
  };

  const APopup = ({ color, children }) => {
    return (
      <div
        style={{
          minHeight: "100px",
          minWidth: "100px",
          backgroundColor: color || "green",
          margin: 0,
          padding: "10px"
        }}
      >
        {children}
      </div>
    );
  };

  return (
    <div className="App">
       <div className="container">
        <ImageMapper 
          onClick={area => clickHandler(area)}
          onMouseEnter={area => enterArea(area)}
          onMouseLeave={area => leaveArea(area)} 
          src={image} 
          map={map}
          imgWidth={800} 
          lineWidth={0.1}
          fillColor="rgba(0,0,0,0.001)"/>
      </div>
      <PopupCloser>
        <div>
          <Popup
            contents={
              <APopup color="grey">
                <h2>yep</h2>
              </APopup>
            }
          >
            {({ setRef, open, close, toggle }) => (
              <h1 onMouseOut={close} onMouseOver={open} ref={n => setRef(n)}>
                Hover me please
              </h1>
            )}
          </Popup>
        </div>
      </PopupCloser>

      {/* <Popup show={showPrimary}>
        <Popup.Text type="primary">
          Closing this file will not save any changes!
        </Popup.Text>
        <Popup.ConfirmText>Are you sure?</Popup.ConfirmText>
        <Popup.Actions>
            <Button
              color="#101010"
              onClick={() => setShowPrimary(!showPrimary)}
            >
              Close
            </Button>
        </Popup.Actions>
      </Popup> */}
    </div>
  );
}

export default App;
