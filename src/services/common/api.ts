export function toEnum(values: Record<string, any>[], value = "id", label = "chnName") {
  return values?.map(e => ({ value: e[value], label: e[label] }))
}
