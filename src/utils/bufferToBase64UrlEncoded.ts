import urlEncodeB64 from './urlEncodeB64';

export default function bufferToBase64UrlEncoded(input: ArrayBuffer) {
  const bytes = new Uint8Array(input);
  
  return urlEncodeB64(window.btoa(String.fromCharCode(...bytes)));
}