export const validationMessages = {
  required: 'This field is required',
  email: 'This field must be a valid email',
  minlength: (errors: any) =>
    `This field must be longer than ${errors.requiredLength} characters`,
  maxlength: (errors: any) =>
    `This field must be shorter than ${errors.requiredLength} characters`,
  min: (errors: any) => `This field must be greater than ${errors.min}`,
  max: (errors: any) => `This field must be less than ${errors.max}`,
  pattern: (errors: any) =>
    `This field must match the pattern ${errors.requiredPattern}`,
};
