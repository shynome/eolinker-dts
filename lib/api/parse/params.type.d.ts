
export interface RequestParamValue {
  value: string
  valueDescription: string
}

export interface RequestParam {
  paramName: string
  paramKey: string
  paramValue: string
  paramType: string
  paramLimit: string
  paramNotNull: number
  paramOptionValue: RequestParamValue[]
}
