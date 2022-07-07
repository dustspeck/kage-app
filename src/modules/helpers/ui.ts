export const parseMargins = (
  margins: string | undefined,
): {isMarginsValid: boolean; marginsArr: number[]} => {
  var isValid = false;
  var array: number[] = [];
  try {
    if (margins) {
      array = margins.split(' ').map(p => parseInt(p));
      isValid = true;
    }
  } catch (error) {
    console.log(error);
  } finally {
    return {isMarginsValid: isValid, marginsArr: array};
  }
};

export const parsePaddings = (
  paddings: string | undefined,
): {isPaddingsValid: boolean; paddingsArr: number[]} => {
  var isValid = false;
  var array: number[] = [];
  try {
    if (paddings) {
      array = paddings.split(' ').map(p => parseInt(p));
      isValid = true;
    }
  } catch (error) {
    console.log(error);
  } finally {
    return {isPaddingsValid: isValid, paddingsArr: array};
  }
};
