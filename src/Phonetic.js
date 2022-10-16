import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import "./Phonetic.css";

export default function Phonetic(props){
    
    if (props.phonetic.audio){
        return(
        <div className="Phonetic">
            <span className="text">
            {props.phonetic.text}
            </span>
            <span className="PhoneticAudio">
            <ReactAudioPlayer
            src={props.phonetic.audio}
             autoPlay={false}
             controls={true}
            />
            </span>
         </div>
    )}
    else {return null;};}
    