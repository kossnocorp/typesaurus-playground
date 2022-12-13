import { notEqual, Request, rule, secure } from "@typesaurus/security";

function isAuthenticatedRequest(request: Request<any>) {
  return notEqual(request.auth.uid, null);
}

import { db } from ".";

const rules = [
  secure(db.todos, [
    rule(["read", "create", "update"], ({ request }) => [
      isAuthenticatedRequest(request),
      notEqual(request.resource.data.text, ""),
    ]),
  ]),
];
export default rules;
