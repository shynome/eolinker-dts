import { PropertyDeclaration } from "dts-dom";
import { ResultRule, ResultParam, ResultParamValue } from "./result.type";
import { RequestParam } from "./params.type";

type ResultParamAll = ResultParam & ResultRule;

type CommonParams = {
  paramType: string;
  paramKey: string;
  paramOptionValue: ResultParamValue[];
  paramNotNull: number;
  paramName: string;
  paramValue: string;
} & {
  paramLimit?: string;
};

export interface MakeDealObjectType {
  (options: { fields: CommonParams[] }): DealObjectType;
}

export interface DealObjectType {
  (rule: CommonParams, parentPrefixLength?: number): PropertyDeclaration;
}
