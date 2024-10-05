import "rambda";
import { importMetaResolve, loadDynamicModule } from "./index.ts";
try {
  await loadDynamicModule("rambda");
} catch (error) {
  console.error("loadDynamicModule failed", error);
}
try {
  await importMetaResolve("rambda");
} catch (error) {
  console.error("importMetaResolve failed", error);
}
