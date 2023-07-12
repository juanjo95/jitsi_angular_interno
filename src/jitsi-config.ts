export function initializeJitsi(apiConfig: any, roomName: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const iframe = document.createElement('iframe');
    iframe.src = `https://meet.jit.si/${roomName}`;
    iframe.width = '100%';
    iframe.height = '900px';
    iframe.style.border = '0';
    iframe.allow = 'camera; microphone; display-capture';
    iframe.onload = () => {
      resolve(iframe);
    };
    iframe.onerror = reject;
    document.getElementById('jitsi-container')?.appendChild(iframe);
  });
}
