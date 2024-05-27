import { useState } from 'react';
import './Accordion.css';
import data from './FAQData.jsx';

export default function Accordion() {
    const [selected, setSelected] = useState("");

    const handleClick = (getId) => {
        setSelected(selected === getId ? null : getId);
    }

    return (
        <div className="accordion container1">
            <h2>Frequently Asked Questions</h2>
            <div className="acc">
                {data.map((dataItem) => (
                    <div key={dataItem.id}>
                        <div className="acc-ques" id={dataItem.id}>
                            <button onClick={() => handleClick(dataItem.id)} id='btn'>
                                <span>{dataItem.question}</span>
                                <i className={`fa-solid ${selected == dataItem.id ? "fa-xmark" : "fa-plus"}`}></i>
                            </button>
                        </div>
                        {selected === dataItem.id ? (
                            <div className="ans">
                                <p>{dataItem.ans}</p>
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    )
}
