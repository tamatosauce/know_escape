import backgroundImage from './bg.png';
import './App.css';
import ImageMapper from "react-image-mapper"

function App() {

  const clickHandler = (area) => {
    console.log(area);
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
      { name: "Bookshelf", title: "door", shape: "rect", coords: [870,735,1138,776], preFillColor: "rgba(0,0,0,0.001)", fillColor: "rgba(0,0,0,0.2)" },
    ]
  }

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
    </div>
  );
}

export default App;
