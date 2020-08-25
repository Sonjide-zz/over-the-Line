import { categoryColorsObject } from "../constant/";

export const classNamePicker = (object) => {
  if (object.toString() === categoryColorsObject.writing) {
    return categoryColorsObject.blue;
  } else if (object.toString() === categoryColorsObject.acting) {
    return categoryColorsObject.orange;
  } else {
    return categoryColorsObject.yellow;
  }
};
