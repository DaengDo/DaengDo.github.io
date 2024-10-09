import { CUSTOM_EVENT } from "../constants/customEvent";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface WindowEventMap extends Record<(typeof CUSTOM_EVENT)[keyof typeof CUSTOM_EVENT], CustomEvent> {}
}
