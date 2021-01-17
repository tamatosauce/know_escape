import React, { useState, useEffect, useRef } from 'react';
import room from './bg.png';
import './App.css';
import ImageMapper from "react-image-mapper"
import Popup from './Popup';

function App() {
  
  const [isOpen, setIsOpen] = useState(false);
  const [popupContent, setPopupContent] = useState({name: '', content: ''});

  const clickHandler = (area) => {
    console.log(area);
    setIsOpen(!isOpen);
    setPopupContent({name: area.name, content: renderSwitch(area.title)});
    setIsComponentVisible(true);

  }

  const enterArea = (area) => {
    console.log(area);

  }

  const leaveArea = (area) => {
    console.log(area);
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
      { name: "X-ray", title: "xray", shape: "rect", coords: [159,105,234,169], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Recliner", title: "recliner", shape: "rect", coords: [492,258,625,487], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Red Chair", title: "red_chair", shape: "rect", coords: [221,193,331,314], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Computer", title: "computer", shape: "rect", coords: [168,37,420,86], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Medicine Cabinet", title: "medicine_cabinet", shape: "rect", coords: [39,482,121,610], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Gas", title: "gas", shape: "rect", coords: [91,614,374,746], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "1st Degree", title: "degree_1", shape: "rect", coords: [459,24,524,55], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "2nd Degree", title: "degree_2", shape: "rect", coords: [574,25,637,59], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
      { name: "Instruments", title: "instruments", shape: "rect", coords: [630,258,780,366], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
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

  return (
    <div className="App">
      <div className="title">THE DENTIST</div>
        <div className="container">
          <div className="popup" ref={ref}>
            {isOpen && isComponentVisible &&
            <Popup
              content={
              <>
                <b>{popupContent.name}</b>
                <p>{popupContent.content}</p>
              </>
            }
              handleClose={clickHandler}
            />}
          </div>
          <ImageMapper 
            className="mapper"
            data-tip data-for="registerTip"
            onClick={area => clickHandler(area)}
            onMouseEnter={area => enterArea(area)}
            onMouseLeave={area => leaveArea(area)} 
            src={room} 
            map={map}
            imgWidth={800} 
            lineWidth={0.1}
            fillColor="rgba(0,0,0,0.001)"
          />
      </div>
    </div>
  );
}

export default App;
