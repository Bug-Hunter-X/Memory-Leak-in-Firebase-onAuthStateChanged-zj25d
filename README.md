# Firebase onAuthStateChanged Memory Leak

This repository demonstrates a common error involving Firebase's `onAuthStateChanged` listener and how to prevent memory leaks.  The `onAuthStateChanged` listener remains active until explicitly unsubscribed, which can lead to significant resource consumption over time if not handled correctly.  This example shows the incorrect usage leading to a memory leak and the correct usage with unsubscribe to avoid the leak.

## How to Reproduce

1. Clone this repository.
2.  Run `npm install` to install necessary packages.  (You will need to set up a Firebase project and configure the necessary credentials). 
3. Run the code with `node onAuthStateChangedBug.js`. Observe that the listener continuously runs. 
4. Run the code with `node onAuthStateChangedSolution.js`.  Observe that the listener is properly unsubscribed and no longer active after use.