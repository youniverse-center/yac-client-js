export default function urlEncodeB64(input: string) {
  const b64Chars = { '+': '-', '/': '_', '=': '' } as Record<string, string>;
  return input.replace(/[+/=]/g, (m) => b64Chars[m]);
}