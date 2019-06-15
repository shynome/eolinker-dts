
export interface ResultParamValue {
  value           : string
  valueDescription: string
}

export interface ResultParam {
  paramID         : number
  paramName       : string
  paramKey        : string
  paramNotNull    : number
  paramOptionValue: ResultParamValue[]
  apiID           : number
}

export interface ResultParam {
  toJSON():Omit<ResultParam,'toJSON'>
}

export interface ResultRule {
  $index    : number;
  paramKey  : string;
  paramType : string;
  paramValue: string;
  type      : string;
}
