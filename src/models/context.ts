import type Character from './character';

export type AppContextValue = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export type CharactersContextValue = {
  characters: Character[] | undefined;
  setCharacters: (characters: Character[] | undefined) => void;
};

export type DeviceInfoContextValue = {
  platform?: 'Web' | 'Android native' | 'IOs native' | 'WebView Android' | 'WebView IOs';
  browser?: 'Safari' | 'Edge' | 'Chrome' | 'Firefox';
  system?: 'IOs' | 'Android' | 'Windows' | 'Mac' | 'Linux';
  screenSize: { width: number; height: number };
  isMobileByAgent: boolean;
  isTabletByAgent: boolean;
  isDesktopByAgent: boolean;
  isMobileByScreen: () => boolean;
  isTabletByScreen: () => boolean;
  isDesktopByScreen: () => boolean;
  isNative: boolean;
  isSafari: boolean;
  isEdge: boolean;
  isChrome: boolean;
  isFirefox: boolean;
  isIOs: boolean;
  isAndroid: boolean;
  isWindows: boolean;
  isMacOS: boolean;
  isLinux: boolean;
};
