import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

function Dialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open dialog</button>

      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="dialog"
        unmountOnExit
        onExited={() => setIsOpen(false)}
      >
        <div className="dialog">
          <h2>Hi there</h2>
          <p>Welcom to the jungel</p>
          <button onClick={() => setIsOpen(false)}>Close dialog</button>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Dialog;