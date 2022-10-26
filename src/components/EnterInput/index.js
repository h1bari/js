import {useState} from "react";
import { GithubPicker } from 'react-color';
import "./index.scss"

const EnterInput = ({add}) => {
    const [text, setText] = useState('')
    const [color, setColor] = useState("transparent")

    const sendTask = () => {
        add(text,color)
        setText('')
        setColor('#000')
    }
    // const changeColor = (e) => {
    //     console.log(e.hex)
    //     setColor(e.hex)
    // }
    return(
        <div>
            <input className="enter-input" type="text" value={text}  onChange={(e) => setText(e.target.value)}/>
            {/*<input className="color-pick" value={color}  type="color" onChange={(e) => setColor(e.target.value)}/>*/}
            {/*<input className="color-pick" value={color}  type="color" onChange={(e) => changeColor(e)}/>*/}
            <GithubPicker onChange={(e) => setColor(e.hex)}/>
            <button className="enter-btn" onClick={sendTask}>Add</button>
        </div>
    );
}
export default EnterInput;
