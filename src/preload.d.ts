declare global {
  interface Window {
    myPreload: {
      listenChannelMessage: (callback: (...arg: any[]) => void) => void;
      sendMessage: (message: string) => void;
    };
  }
}
