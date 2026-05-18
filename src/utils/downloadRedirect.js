export const APP_STORE_URL = 'https://apps.apple.com/in/app/koshax/id6761248820';
export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.koshax.ai&hl=en_IN';

export function detectPlatform() {
  if (typeof navigator === 'undefined') return 'other';
  const ua = navigator.userAgent || '';
  const isIpadOS = /Macintosh/.test(ua) && navigator.maxTouchPoints > 1;
  if (/iPhone|iPad|iPod/.test(ua) || isIpadOS) return 'ios';
  if (/Android/i.test(ua)) return 'android';
  return 'other';
}

export function handleDownloadClick(navigate) {
  const platform = detectPlatform();
  if (platform === 'ios') {
    window.location.href = APP_STORE_URL;
  } else if (platform === 'android') {
    window.location.href = PLAY_STORE_URL;
  } else {
    navigate('/download');
  }
}
