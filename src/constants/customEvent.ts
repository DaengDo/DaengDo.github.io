// new CustomEvent(type, callback) 코드의 type 부분
// window.addEventListener(type, callback)의 type 부분에 CUSTOM_EVENT의 value값 추가됨 -> globalThis.d.ts 참고
const CUSTOM_EVENT = {
  DIALOG_PHOTO: "dialog:photo",
} as const;

export { CUSTOM_EVENT };
