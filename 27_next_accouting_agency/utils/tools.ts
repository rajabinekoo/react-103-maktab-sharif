export function classNames(...classes: string[]) {
  return classes.filter((el) => Boolean(el)).join(" ");
}
