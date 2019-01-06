import { bar, x } from "@projects/project_2/src/bar";
import * as AWS from "aws-sdk";

const fn = (a: number) => a;

fn(x);

bar();
console.log(x);
