import React from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetic(props){
    console.log(props.phonetic);
    if (props.phonetic.audio){
        return(
        <div className="Phonetic">
            <h4>
            {props.phonetic.text}
            </h4>
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
    