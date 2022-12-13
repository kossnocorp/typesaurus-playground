import firebase from "firebase/app";
import "firebase/firestore";
import { render } from "preact";
import { App } from "./app";

firebase.initializeApp({
  apiKey: "AIzaSyAq9UsH4ED3mxuhYqQkz5eFJFJTFL4dxeQ",
  projectId: "typesaurus-playground",
});

firebase.firestore().useEmulator("localhost", 8080);

render(<App />, document.getElementById("app")!);
