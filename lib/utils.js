import { Platform, Dimensions } from 'react-native';

export function isset (prop) {
  return typeof prop !== 'undefined'
}

export function merge (target, source) {
  Object.keys(source).forEach((key) => {
    if (Object.prototype.toString.call(source).slice(8, -1) === 'Object') {
      target[key] = merge(target[key] || {}, source[key])
    } else {
      target[key] = source[key]
    }
  })
  return target
}

const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get('window');

const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

export const isIPhoneX = (() => {
  if (Platform.OS === 'web') return false;

  return (
    (Platform.OS === 'ios'
      && ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH)
        || (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT)))
    || ((D_HEIGHT === XSMAX_HEIGHT && D_WIDTH === XSMAX_WIDTH)
      || (D_HEIGHT === XSMAX_WIDTH && D_WIDTH === XSMAX_HEIGHT))
  );
})();