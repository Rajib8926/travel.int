export function textShot(text: string, textCount: number) {
  if (text.length >= textCount) {
    const cutText = text.slice(0, textCount);
    return `${cutText}...`;
  }else{
    return text
  }
}
