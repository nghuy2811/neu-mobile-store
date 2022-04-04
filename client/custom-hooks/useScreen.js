import useMedia from "./useMedia";

const DeviceSizes = {
  IPHONE_5: "(min-width: 320px)",
  MOBILE: "(min-width: 480px)",
  TABLET: "(min-width: 768px)",
  DESKTOP: "(min-width: 1024px)",
  LARGE_DESKTOP: "(min-width: 1366px)",
};

export const SCREENS = {
  DESKTOP: "desktop",
  TABLET: "tablet",
  MOBILE: "mobile",
};

export default function useScreen() {
  const screen = useMedia(
    [DeviceSizes.DESKTOP, DeviceSizes.TABLET, DeviceSizes.IPHONE_5],
    [SCREENS.DESKTOP, SCREENS.TABLET, SCREENS.MOBILE],
    ""
  );
  return {
    isDesktop: screen === SCREENS.DESKTOP || screen === null,
    isTablet: screen === SCREENS.TABLET,
    isMobile: screen === SCREENS.MOBILE,
  };
}
