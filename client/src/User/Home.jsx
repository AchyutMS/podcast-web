import './style.css'
import { ReactComponent as Play } from "../resource/play.svg";
import { ReactComponent as Pause } from "../resource/pause.svg";
import { ReactComponent as Next } from "../resource/next.svg";
import { ReactComponent as Previous } from "../resource/previous.svg";
import { ReactComponent as Speed } from "../resource/speed.svg";
import { ReactComponent as Volume } from "../resource/volume.svg";
import { ReactComponent as Loop } from "../resource/loop.svg";
import { ReactComponent as LoopR } from "../resource/loopR.svg";
import { ReactComponent as Favorite } from "../resource/favorite.svg";
import { ReactComponent as FavoriteR } from "../resource/favoriteR.svg";
import Entertainment from '../image/entertainment.jpg';
import Stay from '../image/stay.mp3';
import Alone from '../image/alone.mp3';
import HeatWaves from '../image/HeatWaves.mp3';
import noLie from '../image/noLie.mp3';
import Unstoppable from '../image/Unstoppable.mp3';
import placeHolder from '../image/placeHolder.jpeg';

import { useState, useRef } from 'react'

export default function Home() {


  const data = [
    {
        audio: Alone,
        img: 'image/alone.jpg',
        song: 'Alone by Alan Walker'
    },
    {
        audio: HeatWaves,
        img: 'image/HeatWaves.jpg',
        song: 'Heat Waves by Glass Animals'
    },
    {
        audio: noLie,
        img: 'image/noLie.jpg',
        song: 'No Lie by Sean Paul'
    },
    {
        audio: Stay,
        img: 'image/stay.jpg',
        song: 'Stay by Justin Bieber'

    },
    {
        audio: Unstoppable,
        img: 'image/Unstoppable.jpg',
        song: 'Unstoppable by Sia'
    },
]

  const [isPause, setIsPause] = useState(false)
  const audioRef = useRef();
  const [volume, setVolume] = useState(1);
  const [speed, setSpeed] = useState(1);
  const [loop, setLoop] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volumeVal, setVolumeVal] = useState(1);
  const [speedVal, setSpeedVal ] = useState(1);
  const [favorite, setFavorite ] = useState(false);

  const handleFavorite = () => {
    setFavorite(!favorite)
  }

  const handlePlayPause = () => {
    console.log(isPause)
    if (isPause) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPause(!isPause)
  };

  const handleVolumeChange = (e) => {
    var newVolume
    if(e == undefined) {
      newVolume =  volumeVal
    } else {
      setVolumeVal(e.target.value)
      newVolume = parseFloat(e.target.value);
    }
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const handleSpeedChange = (e) => {
    var newSpeed
    if(e == undefined) {
      newSpeed =  speedVal
    } else {
      setSpeedVal(e.target.value)
      newSpeed = parseFloat(e.target.value);
    }
    audioRef.current.playbackRate = newSpeed;
    setSpeed(newSpeed);
  };

  const handleLoopChange = () => {
    const newLoop = !loop;
    audioRef.current.loop = newLoop;
    setLoop(newLoop);
  };

  const timeUpdateHandler = (e) => {
    setCurrentTime(e.target.currentTime);
  };

  const songEndHandler = () => {
    if (loop) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      setIsPause(true);
      setCurrentSongIndex(currentSongIndex === data.length - 1 ? 0 : currentSongIndex + 1);
    }
  };

  const handleNextPrevClick = (direction) => {
    if (direction === "next") {
      setCurrentSongIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    } else if (direction === "prev") {
      setCurrentSongIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    }

    handleSpeedChange()
    handleVolumeChange()
  };
  
  const handleTimeChange = (event) => {
    const time = event.target.value;
    setCurrentTime(time);
    audioRef.current.currentTime = time;
  };
  

  return (
    <div style={{display:'flex',flexDirection:'column', width:'100%', height:'100%'}}>
      <div className='topBar'>
        <input placeholder='Type here....' type="text" style={{ color:'white', fontSize:'18px',fontWeight:'700', backgroundColor:'#3e3e3e', width:'400px', height:'40px' , padding:'0 20px', borderRadius:'10px', border:'none', outline:'none'}}  />
      </div>
      <div className='mainBar'>
        <div><div>Entertainement</div>
          <div style={{margin:'10px', display: 'flex', overflowX:'auto'}}>
            <div style={{padding:'5px', marginRight:'10px', backgroundColor:'#272727', display:'flex', width:'400px'}}>
              <img style={{width:'150px', height:'150px'}} src={Entertainment} />
              <div style={{padding:'10px'}}>
                <div>
                  Heading Here
                  <div style={{height:'2px', width:'100px', backgroundColor:'#c50000'}}></div>
                </div>
                <div style={{fontSize:'12px', marginTop:'10px'}}>
                  Descrption Here Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta vero accusantium facilis est quo id unde voluptatem? Ducimus, mollitia quasi.
                </div>
              </div>
            </div>
            <div style={{padding:'5px', marginRight:'10px', backgroundColor:'#272727', display:'flex', width:'400px'}}>
              <img style={{width:'150px', height:'150px'}} src={Entertainment} />
              <div style={{padding:'10px'}}>
                <div>
                  Heading Here
                  <div style={{height:'2px', width:'100px', backgroundColor:'#c50000'}}></div>
                </div>
                <div style={{fontSize:'12px', marginTop:'10px'}}>
                  Descrption Here Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta vero accusantium facilis est quo id unde voluptatem? Ducimus, mollitia quasi.
                </div>
              </div>
            </div>
            {/* <div style={{padding:'5px', marginRight:'10px', backgroundColor:'#272727', display:'flex', width:'400px'}}>
              <img style={{width:'150px', height:'150px'}} src={Entertainment} />
              <div style={{padding:'10px'}}>
                <div>
                  Heading Here
                  <div style={{height:'2px', width:'100px', backgroundColor:'#c50000'}}></div>
                </div>
                <div style={{fontSize:'12px', marginTop:'10px'}}>
                  Descrption Here Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta vero accusantium facilis est quo id unde voluptatem? Ducimus, mollitia quasi.
                </div>
              </div>
            </div> */}
            {/* <div style={{padding:'5px', marginRight:'10px', backgroundColor:'#272727', display:'flex', width:'400px'}}>
              <img style={{width:'150px', height:'150px'}} src={Entertainment} />
              <div style={{padding:'10px'}}>
                <div>
                  Heading Here
                  <div style={{height:'2px', width:'100px', backgroundColor:'#c50000'}}></div>
                </div>
                <div style={{fontSize:'12px', marginTop:'10px'}}>
                  Descrption Here Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta vero accusantium facilis est quo id unde voluptatem? Ducimus, mollitia quasi.
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div><div>Infotainment</div>
          <div style={{margin:'10px', display: 'flex', overflowX:'auto'}}>
            <div style={{padding:'5px', marginRight:'10px', backgroundColor:'#272727', display:'flex', width:'400px'}}>
              <img style={{width:'150px', height:'150px'}} src={Entertainment} />
              <div style={{padding:'10px'}}>
                <div>
                  Heading Here
                  <div style={{height:'2px', width:'100px', backgroundColor:'#c50000'}}></div>
                </div>
                <div style={{fontSize:'12px', marginTop:'10px'}}>
                  Descrption Here Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta vero accusantium facilis est quo id unde voluptatem? Ducimus, mollitia quasi.
                </div>
              </div>
            </div>
            <div style={{padding:'5px', marginRight:'10px', backgroundColor:'#272727', display:'flex', width:'400px'}}>
              <img style={{width:'150px', height:'150px'}} src={Entertainment} />
              <div style={{padding:'10px'}}>
                <div>
                  Heading Here
                  <div style={{height:'2px', width:'100px', backgroundColor:'#c50000'}}></div>
                </div>
                <div style={{fontSize:'12px', marginTop:'10px'}}>
                  Descrption Here Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta vero accusantium facilis est quo id unde voluptatem? Ducimus, mollitia quasi.
                </div>
              </div>
            </div>
            {/* <div style={{padding:'5px', marginRight:'10px', backgroundColor:'#272727', display:'flex', width:'400px'}}>
              <img style={{width:'150px', height:'150px'}} src={Entertainment} />
              <div style={{padding:'10px'}}>
                <div>
                  Heading Here
                  <div style={{height:'2px', width:'100px', backgroundColor:'#c50000'}}></div>
                </div>
                <div style={{fontSize:'12px', marginTop:'10px'}}>
                  Descrption Here Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta vero accusantium facilis est quo id unde voluptatem? Ducimus, mollitia quasi.
                </div>
              </div>
            </div> */}
            {/* <div style={{padding:'5px', marginRight:'10px', backgroundColor:'#272727', display:'flex', width:'400px'}}>
              <img style={{width:'150px', height:'150px'}} src={Entertainment} />
              <div style={{padding:'10px'}}>
                <div>
                  Heading Here
                  <div style={{height:'2px', width:'100px', backgroundColor:'#c50000'}}></div>
                </div>
                <div style={{fontSize:'12px', marginTop:'10px'}}>
                  Descrption Here Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta vero accusantium facilis est quo id unde voluptatem? Ducimus, mollitia quasi.
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div><div>Sports</div>
          <div style={{margin:'10px', display: 'flex', overflowX:'auto'}}>
            <div style={{padding:'5px', marginRight:'10px', backgroundColor:'#272727', display:'flex', width:'400px'}}>
              <img style={{width:'150px', height:'150px'}} src={Entertainment} />
              <div style={{padding:'10px'}}>
                <div>
                  Heading Here
                  <div style={{height:'2px', width:'100px', backgroundColor:'#c50000'}}></div>
                </div>
                <div style={{fontSize:'12px', marginTop:'10px'}}>
                  Descrption Here Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta vero accusantium facilis est quo id unde voluptatem? Ducimus, mollitia quasi.
                </div>
              </div>
            </div>
            <div style={{padding:'5px', marginRight:'10px', backgroundColor:'#272727', display:'flex', width:'400px'}}>
              <img style={{width:'150px', height:'150px'}} src={Entertainment} />
              <div style={{padding:'10px'}}>
                <div>
                  Heading Here
                  <div style={{height:'2px', width:'100px', backgroundColor:'#c50000'}}></div>
                </div>
                <div style={{fontSize:'12px', marginTop:'10px'}}>
                  Descrption Here Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta vero accusantium facilis est quo id unde voluptatem? Ducimus, mollitia quasi.
                </div>
              </div>
            </div>
            {/* <div style={{padding:'5px', marginRight:'10px', backgroundColor:'#272727', display:'flex', width:'400px'}}>
              <img style={{width:'150px', height:'150px'}} src={Entertainment} />
              <div style={{padding:'10px'}}>
                <div>
                  Heading Here
                  <div style={{height:'2px', width:'100px', backgroundColor:'#c50000'}}></div>
                </div>
                <div style={{fontSize:'12px', marginTop:'10px'}}>
                  Descrption Here Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta vero accusantium facilis est quo id unde voluptatem? Ducimus, mollitia quasi.
                </div>
              </div>
            </div> */}
            {/* <div style={{padding:'5px', marginRight:'10px', backgroundColor:'#272727', display:'flex', width:'400px'}}>
              <img style={{width:'150px', height:'150px'}} src={Entertainment} />
              <div style={{padding:'10px'}}>
                <div>
                  Heading Here
                  <div style={{height:'2px', width:'100px', backgroundColor:'#c50000'}}></div>
                </div>
                <div style={{fontSize:'12px', marginTop:'10px'}}>
                  Descrption Here Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta vero accusantium facilis est quo id unde voluptatem? Ducimus, mollitia quasi.
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className='musicBar'>
      <audio
          src={data[currentSongIndex].audio}
          ref={audioRef}
          autoPlay
          onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
          onEnded={() => handleNextPrevClick("next")}
        />
        <div style={{display:'flex', flexDirection:'column',padding:'5px 50px 0 50px', width:'100%', height:'100%', alignItems:'center',justifyContent:'space-evenly'}}>
            <div>
            <input
        type="range"
        min={0}
        style={{width:'300px'}}
        className='timeStamp'
        max={data[currentSongIndex].audio.duration}
        value={currentTime}
        onChange={handleTimeChange}
      />
            </div>
            <div style={{display:'flex', margin:'0px 10px', alignItems:'center',justifyContent:'space-between', width:'100%'}}>
            <div>
              <div style={{display:'flex', alignItems:'center'}}>
                <img style={{width:'30px', height:'30px'}} src={Entertainment} />
                <div style={{color:'white',marginLeft:'5px'}}>
                  {
                  'Heading here'.length > 12
                  ? 'Heading here'.substring(0, 12) + "..." :
                  'Heading here'
                  }
                </div>
              </div>
            </div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            {favorite ? <div onClick={handleFavorite} style={{marginRight:'20px'}}><FavoriteR /></div> : <div onClick={handleFavorite} style={{marginRight:'20px'}}><Favorite /></div>}
            <div onClick={() => handleNextPrevClick('prev')} style={{marginRight:'20px'}}><Previous /></div>
            {
              !isPause ? 
                <div onClick={() => (setIsPause(true), handlePlayPause())}><Play /></div> : 
                <div onClick={() => (setIsPause(false), handlePlayPause())}><Pause /></div>
            }
            <div onClick={() => handleNextPrevClick('next')} style={{marginLeft:'20px'}}><Next /></div>
            {!loop ? <div checked={loop} onClick={handleLoopChange} style={{marginLeft:'20px'}}><Loop /></div>
            : <div checked={loop} onClick={handleLoopChange} style={{marginLeft:'20px'}}><LoopR /></div> }
            </div>
            <div style={{display:'flex', height:'100%', alignItems:'space-between', flexDirection:'column'}}>
              <div style={{display:'flex', alignItems:'center'}}>
                <Speed /><input
          type="range"
          min="0.5"
          max="2"
          style={{width:'100px'}}
          step="0.01"
          value={speed}
          onChange={handleSpeedChange}
        />
              </div>
              <div style={{display:'flex',marginLeft:'4px', marginTop:'5px', alignItems:'center'}}>
                <Volume /><input
          type="range"
          min="0"
          max="1"
          style={{width:'100px'}}
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}
