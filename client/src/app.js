import React, { useState } from "react"

function App() {

    const [numbers, setNumbers] = useState({
        total: "",
        calcs: "",

    })

    // let currentTotal = doMath(numbers.calcs)
    // console.log(currentTotal)

    //SET TOTAL DOESN"T WORK
    // function setTotal() {
    //     currentTotal ? setNumbers(prevNumbers => ({ ...prevNumbers, total: currentTotal })) : console.log("none")
    // }
    // console.log(currentTotal)

    // useEffect(() => {
    //     setTotal()
    // }, currentTotal)

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
            calcs: prevNumbers.calcs + e.target.value,

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
            calcs: String(doMath(prevNumbers.calcs))
            // calcs: String(prevNumbers.total)  //  PREVIOUS BUG PROBLEM
        }))
    }

    function erase() {
        setNumbers(prevNumbers => ({
            ...prevNumbers,
            calcs: ""
        }))
    }

    function negativeToggle() {
        // let lastOperatorIndex =
        //     numbers.calcs.lastIndexOf("+" || "-" || "*" || "/") won't work with OR statement. Sad.
        let operatorIndexArray = []
        operatorIndexArray.push(numbers.calcs.lastIndexOf("+"))
        operatorIndexArray.push(numbers.calcs.lastIndexOf("-"))
        operatorIndexArray.push(numbers.calcs.lastIndexOf("/"))
        operatorIndexArray.push(numbers.calcs.lastIndexOf("*"))
        let correctIndex = Math.max(...operatorIndexArray) // spread operator is necessary here
        // console.log(operatorIndexArray)
        // console.log(correctIndex)
        // console.log(numbers.calcs[numbers.calcs.length - 1])
        if (numbers.calcs[numbers.calcs.length - 1] === ")") {
            let lastParenth = numbers.calcs.lastIndexOf("(")
            setNumbers(prevNumbers => ({
                ...prevNumbers,
                calcs:
                    [prevNumbers.calcs.slice(0, lastParenth),
                    prevNumbers.calcs.slice(lastParenth + 2, prevNumbers.calcs.length - 1)]
                        .join("")
            }))
        } else if (numbers.calcs[numbers.calcs.length - 1] === "*" ||
            numbers.calcs[numbers.calcs.length - 1] === "/" ||
            numbers.calcs[numbers.calcs.length - 1] === "-" ||
            numbers.calcs[numbers.calcs.length - 1] === "+" ||
            numbers.calcs[numbers.calcs.length - 1] === "("
        ) {
            console.log("cant toggle")
        } else {
            setNumbers(prevNumbers => ({
                ...prevNumbers,
                calcs:
                    [prevNumbers.calcs.slice(0, correctIndex + 1),
                        "(-", prevNumbers.calcs.slice(correctIndex + 1), ")"]
                        .join('')
            }))
        }
    }

    function backspace() {
        const newCalc = numbers.calcs.slice(0, -1)
        setNumbers(prevNumbers => ({
            ...prevNumbers,
            calcs: newCalc
        }))
    }

    function round() {
        // equals() don't need because it runs the same task
        setNumbers(prevNumbers => ({
            ...prevNumbers,
            calcs: String(Math.round(doMath(prevNumbers.calcs))),
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
    // console.log(numbers.total)




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
                <div id="switch">
                    <button
                        // value="."
                        onClick={numbers.calcs.endsWith(".")
                            ? null :
                            negativeToggle}
                        style={{ width: "100%", height: "100%" }}>+/-
                        </button>
                </div>
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
                <div>
                    <button
                        onClick={() => doMath(numbers.calcs) ? round() : null}
                        style={{ width: "100%", height: "100%" }}>???
                        </button>
                </div>
                <div>
                    <button
                        value="("
                        onClick={!doMath(numbers.calcs) ? handleButton : null}
                        style={{ width: "100%", height: "100%" }}>(
                        </button>
                </div>
                <div>
                    <button
                        value=")"
                        onClick={!numbers.calcs || numbers.calcs.endsWith(".")
                            || numbers.calcs.endsWith("+") || numbers.calcs.endsWith("-")
                            || numbers.calcs.endsWith("/") || numbers.calcs.endsWith("*")
                            ? null :
                            handleButton}
                        style={{ width: "100%", height: "100%" }}>)
                        </button>
                </div>
                <div>
                    <button
                        onClick={() => doMath(numbers.calcs) ? round() : null}
                        style={{ width: "100%", height: "100%" }}>round
                        </button>
                </div>
            </div>
        </div>
    )
}

export default App