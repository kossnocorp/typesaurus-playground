import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { addTodo } from "../db/index";

admin.initializeApp();

const seed = [
  "Try Typesaurus",
  "Try Typesaurus Preact",
  "Try Typesaurus Security",
];

export default functions.https.onRequest(async (request, response) => {
  await Promise.all(seed.map(addTodo));
  response.send("<script>window.close();</script>");
});
