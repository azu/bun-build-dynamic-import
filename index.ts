import "rambda";
export const loadDynamicModuleHard = async () => {
  const { head } = await import("rambda")
  console.log(head("XLL"));
}
export const loadDynamicModule = async (packageName: string) => {
  const { head } = await import(packageName)
  console.log(head("XLL"));
}

export const importMetaResolve = async (packageName: string) => {
  console.log(import.meta.resolve(packageName));
}
