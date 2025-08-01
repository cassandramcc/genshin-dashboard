import { useState } from "react"
import StatText from "./StatText";

export default function ({text, currentStat, targetStat}) {

  const red    = [204, 50, 50]
  const yellow = [231, 180, 22]
  const green  = [78, 197, 49]
  const blue   = [62, 205, 233]

  const max_percentage = 1.5

  const [currentStatText, setCurrentStatText] = useState(currentStat)
  const [targetStatText, setTargetStatText] = useState(targetStat)

  function calculatePercentage(x, y) {
    if (y == 0) {
        // if the y is 0, return 1.5 = 150%
        return max_percentage
    }

    return Math.min(x / y, max_percentage)
  }

  function chooseColour(current, target)  {
    let percentage = calculatePercentage(current, target)

    if (percentage <= 0.9) {
      let result = interpolate(red, yellow, percentage)
      return `rgb(${result[0]}, ${result[1]}, ${result[2]})`
    } else if (percentage <= 1) {
      let result = interpolate(yellow, green, percentage)
      return `rgb(${result[0]}, ${result[1]}, ${result[2]})`
    } else {
      let result = interpolate(green, blue, percentage)
      return `rgb(${result[0]}, ${result[1]}, ${result[2]})`
    }
  }

  function interpolate(colour1, colour2, percentage) {
    let difference  = []
    for (let i = 0 ; i < colour1.length; i++) {
      difference[i] = colour2[i] - colour1[i]
    }
    
    let scaled = []
    for (let i = 0 ; i < difference.length; i++) {
      scaled[i] = percentage*difference[i]
    }

    let output = []
    for (let i = 0 ; i < colour1.length; i++) {
      output[i] = colour1[i] + scaled[i]
    }
    return output
  }

  return (
    <div className="stat-item" style={{backgroundColor: chooseColour(currentStatText, targetStatText)}}>
      <span className="stat-label">{text}</span>
      <div className="stat-values">
        <StatText text={currentStatText} setText={setCurrentStatText}/>
        <StatText text={targetStatText} setText={setTargetStatText}/>
      </div>
    </div>
  )
}