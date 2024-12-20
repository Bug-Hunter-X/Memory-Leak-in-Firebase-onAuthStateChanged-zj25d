const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    const uid = user.uid;
    console.log(uid);
    // Perform actions based on user authentication state
  } else {
    // User is signed out
    // Perform actions based on user authentication state
  }
});

// ... Your application logic

// Unsubscribe from the listener when you're finished with it, for example,
in a component's `componentWillUnmount` lifecycle method or before the component is destroyed:
unsubscribe();