import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './switch.scss'
import Rive, { useRive, useStateMachineInput } from "rive-react";
function App() {
  const [count, setCount] = useState(0)
  const [isOn, setIsOn] = useState(false);

  const {rive, RiveComponent} = useRive(
    {
      src: "timer.riv",
      stateMachines: "State Machine 1",
      autoplay: true
    }
  )

  const onClickInput = useStateMachineInput(
    rive,
    "State Machine 1",
    "break"
  )

  if (rive) {
    console.log(rive.contents);
  }

  return (
    <div className="main" data-darkmode={isOn}>
      <div className="left">
        <div
            className="container"
            data-darkmode={isOn}
            onClick={() => {
              setIsOn(!isOn)
              onClickInput.value = !isOn
            }}
            style={{ justifyContent: isOn ? "flex-end" : "flex-start" }}
        >
            <motion.div layout className="handle">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.i
                        className={`icon far fa-${isOn ? "moon" : "sun"}`}
                        key={isOn ? "moon" : "sun"}
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 30, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                </AnimatePresence>
            </motion.div>
        </div>
        </div>
        <div className="right">
        <RiveComponent className="anim"></RiveComponent>
        </div>
    </div>

    
  )
}

export default App
