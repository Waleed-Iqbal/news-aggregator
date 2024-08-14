// helper functions and utilities
export const debounce = (func: any, waitTime: number = 300) => {
  let timeout: any = null;
  return (...args: any[]) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...args);
      timeout = null;
    }, waitTime);
  };
};

export const isScrollbarPresent = () => {
  return document.body.clientHeight > window.innerHeight;
};
