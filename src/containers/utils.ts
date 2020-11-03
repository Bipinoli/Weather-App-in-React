export const conditionalRenderer = ({
  condition,
  successContent,
  failurePlaceholder,
}: {
  condition: boolean;
  successContent: () => JSX.Element;
  failurePlaceholder: () => JSX.Element;
}) => {
  if (condition) return successContent();
  return failurePlaceholder();
};
