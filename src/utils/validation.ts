export const hasEmptyField = (fields: any, dialogFields: any) => {
  let hasEmpty = false;
  for (const field of fields) {
    if (!dialogFields[field.key]) {
        hasEmpty = true;
      break;
    }
  }
  return hasEmpty;
};
