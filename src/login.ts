import { bufferToBase64UrlEncoded, randomString, sha256 } from './utils'

interface LoginParams {
  client_id: string,
  response_type: 'code',
  scope: string,
  code_challenge: string,
  code_challenge_method: 'S256',
  state: string,
  prompt?: string,
  redirect_uri?: string
}

export interface LoginOptions {
  prompt?: boolean,
  scopes?: string[],
  redirectUri?: string
}

interface LoginEndpoint {
  url: string,
  verifier: string,
  state: string
}

export default async function loginEndpoint(
  yacDomain: string,
  clientId: string,
  options: LoginOptions
): Promise<LoginEndpoint> {
  const state = randomString(32);
  const verifier = randomString(128);
  const challenge = await sha256(verifier).then(bufferToBase64UrlEncoded);

  const loginParams: LoginParams = {
    client_id: clientId,
    response_type: 'code',
    scope: (options.scopes || []).join(' '),
    code_challenge: challenge,
    code_challenge_method: 'S256',
    state,
  }

  if (Object.prototype.hasOwnProperty.call(options, 'prompt') && options.prompt === false) {
    loginParams.prompt = 'none';
  }

  if (options.redirectUri) {
    loginParams.redirect_uri = options.redirectUri;
  }

  const params: Record<string, string> = Object.fromEntries(Object.entries(loginParams));

  const url = new URL(`${yacDomain}/auth`);
  url.search = new URLSearchParams(params).toString();

  return {
    url: url.toString(),
    verifier,
    state
  };
}