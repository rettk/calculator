import React, { useState, useEffect } from "react"

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

    function handleButton(e) {
        const { value } = e.target.value
        setNumbers(prevNumbers => ({
            ...prevNumbers,
            calcs: prevNumbers.calcs + e.target.value
        }))
        document.getElementById("field").focus()
    }

    function doMath(string) {
        try {
            let answer = eval(string)
            return answer
        }
        catch { console.log("error thrown") }
    }

    function equals() {
        setNumbers(prevNumbers => ({
            ...prevNumbers,
            calcs: doMath(prevNumbers.calcs)
        }))
    }

    function erase() {
        setNumbers(prevNumbers => ({
            ...prevNumbers,
            calcs: ""
        }))
    }

    function backspace() {
        const newCalc = numbers.calcs.slice(0, -1)
        setNumbers(prevNumbers => ({
            ...prevNumbers,
            calcs: newCalc
        }))
    }

    // Don't need this parentheses search function because of eval()

    // function parenthesesSearch(array) {
    //     let firstEnd = array.indexOf(")")
    //     let closestStart = array.lastIndexOf("(", firstEnd)
    //     let parenthLocations = [closestStart, firstEnd]
    //     return console.log(parenthLocations)
    // }


    //FUNCTION TESTS console logs
    // doMath(numbers.calcsArrayComplex)  WORKS
    // console.log(eval(numbers.calcsStringComplex))  WORKS
    // console.log(numbers.calcs)
    // console.log(eval("5+5"))
    console.log(numbers.total)


    return (
        <div id="box">
            <div id="calculator">

                <div id="screen">
                    <div id="calcs">
                        <input type="text"
                            name="calcs"
                            id="field"
                            value={numbers.calcs}
                            onChange={handleChange}
                            style={{ textAlign: "right", height: "100%", width: "96%" }}
                        >
                        </input>
                    </div>
                    <div id="answer-row">{doMath(numbers.calcs) ? doMath(numbers.calcs)
                        : "..."}</div>
                </div>

                <div id="erase">
                    <button
                        onClick={erase}
                        style={{ width: "100%", height: "100%" }}>C
                        </button>
                </div>
                <div id="back">
                    <button
                        onClick={backspace}
                        style={{ width: "100%", height: "100%" }}>backspace
                        </button>
                </div>
                <div id="divide">
                    <button
                        value="/"
                        onClick={!numbers.calcs || numbers.calcs.endsWith(".")
                            || numbers.calcs.endsWith("+") || numbers.calcs.endsWith("-")
                            || numbers.calcs.endsWith("/") || numbers.calcs.endsWith("*")
                            ? null :
                            handleButton}
                        style={{ width: "100%", height: "100%" }}>/
                        </button>
                </div>
                <div id="7">
                    <button
                        value="7"
                        onClick={handleButton}
                        style={{ width: "100%", height: "100%" }}>7
                        </button>
                </div>
                <div id="8">
                    <button
                        value="8"
                        onClick={handleButton}
                        style={{ width: "100%", height: "100%" }}>8
                        </button>
                </div>
                <div id="9">
                    <button
                        value="9"
                        onClick={handleButton}
                        style={{ width: "100%", height: "100%" }}>9
                        </button>
                </div>
                <div id="multiply">
                    <button
                        value="*"
                        onClick={!numbers.calcs || numbers.calcs.endsWith(".")
                            || numbers.calcs.endsWith("+") || numbers.calcs.endsWith("-")
                            || numbers.calcs.endsWith("/") || numbers.calcs.endsWith("*")
                            ? null :
                            handleButton}
                        style={{ width: "100%", height: "100%" }}>*
                        </button>
                </div>
                <div id="4">
                    <button
                        value="4"
                        onClick={handleButton}
                        style={{ width: "100%", height: "100%" }}>4
                        </button>
                </div>
                <div id="5">
                    <button
                        value="5"
                        onClick={handleButton}
                        style={{ width: "100%", height: "100%" }}>5
                        </button>
                </div>
                <div id="6">
                    <button
                        value="6"
                        onClick={handleButton}
                        style={{ width: "100%", height: "100%" }}>6
                        </button>
                </div>
                <div id="subtract">
                    <button
                        value="-"
                        onClick={numbers.calcs.endsWith(".")
                            || numbers.calcs.endsWith("+") || numbers.calcs.endsWith("-")
                            || numbers.calcs.endsWith("/") || numbers.calcs.endsWith("*")
                            ? null :
                            handleButton}
                        style={{ width: "100%", height: "100%" }}>-
                        </button>
                </div>
                <div id="1">
                    <button
                        value="1"
                        onClick={handleButton}
                        style={{ width: "100%", height: "100%" }}>1
                        </button>
                </div>
                <div id="2">
                    <button
                        value="2"
                        onClick={handleButton}
                        style={{ width: "100%", height: "100%" }}>2
                        </button>
                </div>
                <div id="3">
                    <button
                        value="3"
                        onClick={handleButton}
                        style={{ width: "100%", height: "100%" }}>3
                        </button>
                </div>
                <div id="add">
                    <button
                        value="+"
                        onClick={!numbers.calcs || numbers.calcs.endsWith(".")
                            || numbers.calcs.endsWith("+") || numbers.calcs.endsWith("-")
                            || numbers.calcs.endsWith("/") || numbers.calcs.endsWith("*")
                            ? null :
                            handleButton}
                        style={{ width: "100%", height: "100%" }}>+
                        </button>
                </div>
                <div id="0">
                    <button
                        value="0"
                        onClick={!numbers.calcs
                            || numbers.calcs.endsWith("+") || numbers.calcs.endsWith("-")
                            || numbers.calcs.endsWith("/") || numbers.calcs.endsWith("*")
                            ? null :
                            handleButton}
                        style={{ width: "100%", height: "100%" }}>0
                        </button>
                </div>
                <div id="switch"></div>
                <div id="dot">
                    <button
                        value="."
                        onClick={numbers.calcs.endsWith(".")
                            ? null :
                            handleButton}
                        style={{ width: "100%", height: "100%" }}>.
                        </button>
                </div>
                <div id="equals">
                    <button
                        onClick={() => doMath(numbers.calcs) ? equals() : null}
                        style={{ width: "100%", height: "100%" }}>=
                        </button>
                </div>
            </div>
        </div>
    )
}

export default App