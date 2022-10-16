import React from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetic(props){
    console.log(props.phonetic);
    if (props.phonetic.audio){
        return(
        <div className="Phonetic">
            <h5>
            {props.phonetic.text}
            </h5>
            <div className="PhoneticAudio">
            <ReactAudioPlayer
            src={props.phonetic.audio}
             autoPlay={false}
             controls={true}
            />
            </div>
         </div>
    )}
    else {return null;};}
    