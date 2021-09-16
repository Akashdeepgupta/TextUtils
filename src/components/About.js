import React from 'react'

export default function About(props) {
    // const [myStyle,setMyStyle]=useState({
    //     color:'white',
    //     backgroundColor:'black'
    // })

    let myStyle = {
        color : props.mode === 'dark' ? 'white':'#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)':'white',
    }

// const [btntext,setBtntext]=useState('Enable light Mode');

    // const toggleStyle = () => {
    //     if(myStyle.color==="white"){
    //         setMyStyle({
    //             color:"black",
    //             backgroundColor:"white"
    //         })
    //         setBtntext("Enable Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:"white",
    //             backgroundColor:"black"
    //         })
    //         setBtntext("Enable light Mode")
    //     }
    // }

    return (
        <div className="container">
            <h1 className="my-3" style={myStyle}>About us</h1>
                    <div className="accordion" id="accordionExample">
            <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your Text</strong>
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                TextUtil gives you a way to analyzeyour text quickly and efficiently, be it woed count or characters count
                </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
                </button> 
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body"style={myStyle}>
                    TextUtil is a free character counter tool that provides instant character count and word count statistics for a given text
                </div>
            </div>
            </div>
            <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body"style={myStyle}>
                    This word counter software can in any browser such as chrome,firefox,Internet Explorer,safari and opers
                </div>
            </div>
            </div>
            </div>
            <div className="container my-3">
            {/* <button type="button" className="btn btn-dark"  >{btntext}</button> */}
            </div>
        </div>
    )
}
