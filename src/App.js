import React, { useState, useEffect, useRef } from 'react';
import room from './bg.png';
import './App.css';
import ImageMapper from "react-image-mapper"
import Popup from './Popup';
import Note from './Note';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TodoForm from "./TodoForm";
import AppBar from "material-ui/AppBar";
import Button from '@material-ui/core/Button';
import TodoList from './TodoList';

function App() {

  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
  
  const [isOpen, setIsOpen] = useState(false);
  const [popupContent, setPopupContent] = useState({name: '', content: ''});
  const [todos, setTodos] = useState([]);
  const [sinkBtn, setSinkBtn] = useState(false);
  const [degree1Btn, setDegree1Btn] = useState(false);
  const [degree2Btn, setDegree2Btn] = useState(false);
  const [dentureBtn, setDentureBtn] = useState(false);
  const [wheelieBtn, setWheelieBtn] = useState(false);
  const [redChairBtn, setRedChairBtn] = useState(false);
  const [dualCupboardsBtn, setDualCupboardsBtn] = useState(false);
  const [computerBtn, setComputerBtn] = useState(false);
  const [red_chair_gasBtn, setRedChairGasBtn] = useState(false);

  const handleListItemClicked = (todo) => {
    console.log(todo, 'handleListItemCLicked');
    let todosInState = todos;
    let todoIndex = todo.id - 1;
    console.log(todoIndex);

    if (todosInState.indexOf(todo) !== -1) {
      let todoState = todosInState[todoIndex];
      todoState.completed = !todo.completed;

      todosInState[todoIndex] = todoState;
      console.log(todosInState, 'hree');

      setTodos( todosInState );
    }
  }

  const clickHandler = (area) => {

    if (area.todoText)
    console.log('click handler');
    setIsOpen(!isOpen);
    setPopupContent({name: area.name, content: renderSwitch(area.title)});
    setIsComponentVisible(true);

    console.log(getClueFromObject(area.title), 'wut');
  }

  const addClueToList = (title) => {

    btnManager(title);

    const filtered = todos.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(title)));
    console.log(filtered, 'filteres');
   
    if(todos.length === 0) {

      //notes
      // setTodoText(getClueFromObject(title));
      if (title === 'degree_1') {
        const inputVal = {todoText: getClueFromObject(title), id: title, wordSpacing: '100vw'};
        setTodos([...todos, inputVal]);

      }else {
        const inputVal = {todoText: getClueFromObject(title), id: title, completed: false};
        setTodos([...todos, inputVal]);
      }

  
      console.log(todos, 'wut');
      // setTodoText('');
    } else if(filtered.length > 0) {
      console.log(todos[0].id, title, 'dfkjsdlfjk;');
       const someArray = todos.filter(todo => todo.id !== title);
       setTodos(someArray);
    }else {
      console.log('else');
      if (title === 'degree_1') {
        const inputVal = {todoText: getClueFromObject(title), id: title, wordSpacing: '100vw'};
        setTodos([...todos, inputVal]);

      }else {
        const inputVal = {todoText: getClueFromObject(title), id: title, completed: false};
        setTodos([...todos, inputVal]);
      }
    }
  }

  const enterArea = (area) => {
    console.log(area);
  }

  const leaveArea = (area) => {
    console.log(area);
  }

  const showClue = (name) => {
    console.log(name, 'showClue');
    // setTodoText(getClueFromObject(name));

    // const inputVal = {todoText: name, id: todos.length + 1, completed: false}
    // setTodos([...todos, inputVal]);

    // console.log(todos, 'wut');
    // setTodoText('');
  }

  const showImage = (name) => {
    console.log(name, 'showImage');
  }

  const getClueFromObject = (param) => {
    console.log(param, 'getClueFromObject')
    switch(param) {
      case 'sink':
        return "Towels - DEMILAC MEDICAL"
      case 'degree_1':
        return "DDS \n Riverwood \n Exelton \n Natura \n Awarded \n Michael \n Executed \n Lauren"
      case 'degree_2':
        return "Degree 2 - Eesgni lekesesnot erriuqse pusreivnois"
      case 'denture':
        return "Denture - Model 1 - Missing Tooth \n Model 2 - Crack Central Incisor \n  Model 3 - loose filling \n Model - 4 all of the above"
      case 'wheelie_chair':
        return "Chair Note - Door Emergency Release Look For Hot Spot"
      case 'red_chair':
        return "Computer Chair - Without even trying you can see three things wrong with it. First the wheels have fallen off, so it scrapes across the floor. Second, one of the armrests are shorter than the other. And third, the fabric on the back rest is two different colours - most of it is red but there's a shiny black patch near the bottom. It's as if who ever built this wasn't even trying."
      case 'dual_cupboards':
        return "Book - Often, only every third issue that comes up is relevant. In dentistry, a patient's third complaint will be the most important. In carpentry, the third mechanical oddity is the first that needs fixing"
      case 'computer':
        return "Patients - Ericson: Upper Central Incisor Crack \n Molvis: Upper Second Molar Root Canal \n Wussel: Lower Cuspid Crack"
      case 'red_chair_gas':
        return "FLBARLXNENAACACNZH"
      default: 
        return 'foo';
    }
  }

  const renderSwitch = (param) => {
    switch(param) {
      case 'xray':
        return "Sitting on the desk beside the computer is a single X-ray image of someone's mouth. Their teeth look fine to you, but what do you know? A small sticker has been fixed to the bottom of the image, with a series of numbers hand-written on it. There's a big 4, a big 5, and a little 0 on the first line; a big 9, big 0 and little 0 on the second line; then there's a big 1, a big 8, big 0, and little 0 on the third."
      case 'recliner':
        return "It's a normal reclining chair, as far as you can see. There's a lever on one side that controls how reclined it is; it can go all the way from completely upright to completely lying down."
      case 'red_chair':
        return "Everything else in this room feels quite new, but this chair... let's just say it must hold a lot of sentimental value for Doctor Stephens to keep it this long. Without even trying, you can see three things wrong with it. First, the wheels have fallen off, so it scrapes across the floor. Second, one of the armrests is lower than the other. And third, the fabric on the back rest is two completely different colours – most of it is green, but there's a random shiny, black patch near the bottom. It's as if whoever built this thing wasn't even trying."
      case 'computer':
        return "You move the mouse, and of course, the screen prompts you for a password. Luckily, there's a hint button. The hint is, “My nickname”."
      case 'medicine_cabinet':
        return "It doesn't open. There's no padlock attached, but there is an old-fashioned keyhole."
      case 'gas':
        return "These are smaller than you would have expected. Must be single-use or something. They're all oxygen or nitrous oxide, and they're attached to masks with scented filters on them so the gas smells nice. There's half a dozen of them, and you read flavours like licorice, raspberry, rose, and coffee. You press the little button on the top of one, trying to activate it, but it doesn't work. Next to the buttons on all of them are small grooves, like some sort of chip needs to be inserted before the buttons will work."
      case 'degree_1':
        return "One degree is a DDS (Doctor of Dental Surgery) from Riverwood Dental School, and the other is an Mdent (Master of Dentistry) from Demilac University."
      case 'degree_2':
        return "One degree is a DDS (Doctor of Dental Surgery) from Riverwood Dental School, and the other is an Mdent (Master of Dentistry) from Demilac University."
      case 'instruments':
        return "Most of these you recognise, even if they still make you shudder a bit. All of the scrape-y, scratch-y, pull-y devices are there, but there are also a few you've never seen before, and they look twice as scary"
      case 'mobile_sink':
        return "As you saw, there's a whole heap of blood in here. Just looking at it makes your skin crawl. But what you didn't notice before was that someone's gone to the effort of writing a word in the blood. The letters are blocky, like the way numbers appear on a calculator, but it says S-P-I-N-I-S."
      case 'denture':
        return "These are models of people's mouths, and they're alarmingly realistic. They must be what dental students practice on. There are five of them sitting here, each one with its own little problems that would need fixing: missing teeth, cracked teeth, loose fillings, a little bit of everything."
      case 'sink':
        return "Unlike the mobile sink, there's nothing in this one. There's all the normal stuff around it, like liquid soap and a hand towel, and a paper towel dispenser. The paper towels must have been special ordered, because they're emblazoned with the name of a university. Each towel says ​ DEMILAC MEDICAL i ​ n big letters."
      case 'cupboards':
        return "The one under the sink opens easily, but reveals nothing except some small, slightly shoddy pipes."
      case 'wheelie_chair':
        return "It's small and quite light. Its wheels move almost soundlessly along the floor and its seat is on a swivel, so it can spin in both directions."
      case 'xray_machine':
        return "All the really complicated electronic parts are up on the ceiling, but within your reach is the actual camera that would take X-ray photographs of patients' teeth. But of course, this is such sensitive medical equipment that you can't just turn it on – there's a password."
      case 'bookshelf':
        return "You can't make heads or tails of the books. There are heaps of them, some brand new, some falling apart, some library books, and all of them way too technical for your understanding. If there's anything helpful here, only a dentist could possibly find it."
      case 'dual_cupboards':
        return "The under-cupboard with the double doors, the one underneath the books, is locked up tight with a padlock"
      case 'door':
        return "It's locked. And not just with a normal lock, but a small letter keypad, as well as a place to swipe an ID card."
      default:
        return 'foo';
    }
  }

  const btnManager = (param) => {
    switch(param) {
      case 'sink':
        return setSinkBtn(!sinkBtn)
      case 'degree_1':
        return setDegree1Btn(!degree1Btn)
      case 'degree_2':
        return setDegree2Btn(!degree2Btn)
      case 'denture':
        return setDentureBtn(!dentureBtn)
      case 'wheelie_chair':
        return setWheelieBtn(!wheelieBtn)
      case 'red_chair':
        return setRedChairBtn(!redChairBtn)
      case 'dual_cupboards':
        return setDualCupboardsBtn(!dualCupboardsBtn)
      case 'computer':
        return setComputerBtn(!computerBtn)
      case 'red_chair_gas':
        return setRedChairGasBtn(!red_chair_gasBtn)
      default: 
        return 'foo';
    }
  }


  const useComponentVisible = (initialIsVisible) => {
    const [isComponentVisible, setIsComponentVisible] = useState(
      initialIsVisible
    );
    const ref = useRef(null);
    const handleClickOutside = () => {
        setIsOpen(false);
    };
  
    useEffect(() => {
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
    });
  
    return { ref, isComponentVisible, setIsComponentVisible };
  }


  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(true);

  const map = {
    name: "dentist",
    areas: [
      { name: "X-ray", title: "xray", shape: "poly", coords: [113,87,122,126,170,114,161,72], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Recliner", title: "recliner", shape: "poly", coords: [404,358,446,353,446,196,423,186,422,154,360,154,361,241,341,241,343,331,365,331,366,350], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Red Chair", title: "red_chair", shape: "poly", coords: [173,136,244,148,236,199,236,226,194,226,154,213,164,186], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Computer", title: "computer", shape: "poly", coords: [111,26,308,26,285,70,139,70], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Medicine Cabinet", title: "medicine_cabinet", shape: "poly", coords: [26,348,73,349,89,354,89,438,73,442,28,444], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Gas", title: "gas", shape: "poly", coords: [272,529,261,437,92,443,55,529,167,538], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "1st Degree", title: "degree_1", shape: "poly", coords: [314,15,392,15,384,45,323,45], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "2nd Degree", title: "degree_2", shape: "poly", coords: [395,16,474,16,464,45,405,45], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Instruments", title: "instruments", shape: "poly", coords: [456,192,552,191,551,257,456,258], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Mobile Sink", title: "mobile_sink", shape: "poly", coords: [458,273,553,270,553,340,457,341], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Denture", title: "denture", shape: "poly", coords: [801,51,845,62,841,100,811,113,790,100,786,74], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Sink", title: "sink", shape: "poly", coords: [790,145,839,145,839,245,790,245], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Sink Cupboards", title: "cupboards", shape: "poly", coords: [765,213,782,253,781,142,765,171], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Wheelie Chair", title: "wheelie_chair", shape: "circle", coords: [601,283,34], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "X-ray Machine", title: "xray_machine", shape: "poly", coords: [425,62,478,62,479,86,495,104,558,104,559,131,535,131,535,152,507,151,506,139,471,139,472,184,430,186,428,141,408,140,407,87,425,86], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Bookshelf", title: "bookshelf", shape: "poly", coords: [646,42,777,43,777,70,645,68], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Dual Cupboards", title: "dual_cupboards", shape: "poly", coords: [647,125,665,140,695,140,712,124,777,127,759,140,728,140,713,125], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Door", title: "door", shape: "poly", coords: [619,533,819,534,818,563,620,567], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
    ]
  }

  return (
    <div className="App">
      <div className="title">THE DENTIST</div>
        <div className="container">
          <div className="col">
            <MuiThemeProvider>
              <div style={styles}>
                <TodoList
                    todos={todos ? todos : null}
                    onListItemClicked={handleListItemClicked}
                  />
              </div>
            </MuiThemeProvider>
          </div>
          <div className="col">
            <ImageMapper 
              onClick={area => clickHandler(area)}
              onMouseEnter={area => enterArea(area)}
              onMouseLeave={area => leaveArea(area)} 
              src={room} 
              map={map}
              lineWidth={0.1}
              fillColor="rgba(0,0,0,0.001)"
            />
            <div className="container">
               <div className="col pbtn"><Button padding="5px" variant="contained" color={sinkBtn ? 'primary' : 'secondary'} onClick={() => addClueToList('sink')}>Sink Towels</Button></div>
               <div className="col pbtn"><Button variant="contained" color={degree1Btn ? 'primary' : 'secondary'} onClick={() => addClueToList('degree_1')}>Degree 1</Button></div>
               <div className="col pbtn"><Button variant="contained" color={degree2Btn ? 'primary' : 'secondary'} onClick={() => addClueToList('degree_2')}>Degree 2</Button></div>
               <div className="col pbtn"><Button variant="contained" color={dentureBtn ? 'primary' : 'secondary'} onClick={() => addClueToList('denture')}>Denture Model</Button></div>
               <div className="col pbtn"><Button variant="contained" color={wheelieBtn ? 'primary' : 'secondary'} onClick={() => addClueToList('wheelie_chair')}>Wheelie Chair</Button></div>
               <div className="col pbtn"><Button variant="contained" color={redChairBtn ? 'primary' : 'secondary'} onClick={() => addClueToList('red_chair')}>Red Chair</Button></div>
               <div className="col pbtn"><Button variant="contained" color={dualCupboardsBtn ? 'primary' : 'secondary'} onClick={() => addClueToList('dual_cupboards')}>Under Cupboards</Button></div>
               <div className="col pbtn"><Button variant="contained" color={computerBtn ? 'primary' : 'secondary'} onClick={() => addClueToList('computer')}>Computer Patients</Button></div>
               <div className="col pbtn"><Button variant="contained" color={red_chair_gasBtn ? 'primary' : 'secondary'} onClick={() => addClueToList('red_chair_gas')}>Black Spot</Button></div>
            </div>
          </div>
          <div className="col" ref={ref}>
            {isOpen && isComponentVisible &&
            <Popup
              content={
              <>
                <b>{popupContent.name}</b>
                <p>{popupContent.content}</p>
                
              </>
            }
              handleClose={clickHandler}
            />
            }
          </div>
      </div>
    </div>
  );
}

export default App;
