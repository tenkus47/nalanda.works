import { signal } from "@preact/signals";
import { data } from "./pandetaInfo";
function createAppState() {
  const pendetaDetail = signal(data);

  const lengthOfPendeta = pendetaDetail.value.length;

  return { pendetaDetail, lengthOfPendeta };
}

export default createAppState();
