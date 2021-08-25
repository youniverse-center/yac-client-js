export default function hashSha256(message: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);

  return window.crypto.subtle.digest('SHA-256', data);
}