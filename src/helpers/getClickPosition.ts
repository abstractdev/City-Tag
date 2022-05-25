export function getClickPosition(event: any) {
  const rect = event.target.getBoundingClientRect();
  const xItemClickPos = Math.round(
    (event.nativeEvent.offsetX / event.nativeEvent.target.offsetWidth) * 100
  );
  const yItemClickPos = Math.round(
    (event.nativeEvent.offsetY / event.nativeEvent.target.offsetHeight) * 100
  );
  const xTargetClickPos = event.nativeEvent.clientX - rect.left;
  const yTargetClickPos = event.nativeEvent.clientY - rect.top;

  return {
    xItemClickPos,
    yItemClickPos,
    xTargetClickPos,
    yTargetClickPos,
  };
}
