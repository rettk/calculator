import React, { useState } from "react"

function App() {

    const [numbers, setNumbers] = useState({
        total: 0,
        calcs: "",
        calcsStringComplex: "3+2-(1*2)+.3",
        calcsArrayComplex: [3, "+", 2, "-", `(`, 1, `*`, 2, `)`, "+", .3],  // should return 3.3, not 8.3
        calcsArraySimple: [3, "+", 4, "+", 8, "-", 5] // should return 10
    })

    // function doMath(array) {
    //     let condensedProblem = array.join("")
    //     let condensedAnswer = eval(condensedProblem)
    //     return console.log(condensedAnswer)
    // }

    function handleChange(e) {
        const { name, value } = e.target
        setNumbers(prevNumbers => ({
            ...prevNumbers,
            [name]: value,
        }))
    }

    // function buttonPress(e) {
    //     const { name, value } =e.target

    // }

    // Don't need this parentheses search function because of eval()

    // function parenthesesSearch(array) {
    //     let firstEnd = array.indexOf(")")
    //     let closestStart = array.lastIndexOf("(", firstEnd)
    //     let parenthLocations = [closestStart, firstEnd]
    //     return console.log(parenthLocations)
    // }


    //Function Tests
    // doMath(numbers.calcsArrayComplex)  WORKS
    // console.log(eval(numbers.calcsStringComplex))  WORKS
    // console.log(numbers.calcs)
    // console.log(eval("5+5"))

    return (
        <div id="box">
            <div id="calculator">

                <div id="screen">
                    <div id="calcs">
                        <input type="text"
                            name="calcs"
                            value={numbers.calcs}
                            onChange={handleChange}
                        >
                        </input>
                    </div>
                    <div id="answer-row">{eval(numbers.calcs) ? eval(numbers.calcs)
                        : "..."}</div>
                </div>

                <div id="erase"></div>
                <div id="back"></div>
                <div id="divide"></div>
                <div id="7"
                ></div>
                <div id="8"></div>
                <div id="9"></div>
                <div id="multiply"></div>
                <div id="4"></div>
                <div id="5"></div>
                <div id="6"></div>
                <div id="subtract"></div>
                <div id="1"></div>
                <div id="2"></div>
                <div id="3"></div>
                <div id="add"></div>
                <div id="0"></div>
                <div id="switch"></div>
                <div id="dot"></div>
                <div id="equals"></div>
            </div>

        </div>
    )
}

export default App