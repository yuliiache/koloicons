export const getFormFieldError = (meta) => {
  return (meta.error && meta.modified) || (meta.error && meta.touched) ? meta.error : '';
};
