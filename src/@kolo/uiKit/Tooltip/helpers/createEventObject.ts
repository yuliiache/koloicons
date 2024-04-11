export const createEventObject = (trigger: string): Record<string, boolean> => {
  return {[trigger]: true};
};
