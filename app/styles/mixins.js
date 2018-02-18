export const clearfix = `
  &::after {
    content: "" !important;
    display: block !important;
    clear: both !important;
  }
`;

export const visuallyHidden = `
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: -1px !important;
  padding: 0 !important;
  border: 0 !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
`;
