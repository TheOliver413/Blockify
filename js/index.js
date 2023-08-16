'use strict';

let workspace = null;

function start() {
  // Create main workspace.
  workspace = Blockly.inject('blocklyDiv',
    {
      toolbox: document.getElementById('toolbox-categories'),
      grid:
      {
        spacing: 20,
        length: 3,
        colour: '#ccc',
        snap: true
      },
      move:
      {
        scrollbars: {
          horizontal: true,
          vertical: true
        },
        drag: true,
        wheel: false
      },
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
        pinch: true
      },
      trashcan: true
    });

}