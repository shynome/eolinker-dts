import { PropertyDeclaration } from "dts-dom";
import { ResultRule, ResultParam } from "./result.type";
import { RequestParam } from "./params.type";

type ResultParamAll = ResultParam & ResultRule

type CommonParams = (ResultParamAll | RequestParam) & {
  paramLimit?: string
}

export interface MakeDealObjectType {
  (options: {
    rules_keys: string[]
    result_rules: CommonParams[]
    result_params: CommonParams[]
    tmp_obj: { [k: string]: boolean }
  }): DealObjectType
}

export interface DealObjectType {
  (rule: CommonParams, parentPrefixLength?: number): PropertyDeclaration
}
