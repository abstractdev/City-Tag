export function clickOutside(
  contentState: boolean,
  contentSetter: (contentState: boolean) => void,
  contentRef: any,
  navigate: (delta: number) => void
) {
  const handleClickOutside = (event: any) => {
    if (
      contentState &&
      contentRef.current &&
      !contentRef.current.contains(event.target)
    ) {
      contentSetter(false);
      navigate(-1);
      setTimeout(() => {
        navigate(0);
      }, 200);
    }
  };
  document.addEventListener("click", handleClickOutside);
  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}