import rules from "../src/db/security";
import { stringifyDatabaseRules } from "@typesaurus/security";

console.log(stringifyDatabaseRules(rules));
