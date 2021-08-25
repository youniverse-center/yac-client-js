# Javascript YAC client

This is javascript library to handle Youniverse Authorization Center.

## Getting started

### Creating client instance

```javascript
import YacClient, { storages } from '@youniverse-center/yac-client'

const client = new YacClient({
  clientId: 'myclientid',
  authorizationServer: 'https://yac.youniverse.center',
  scopes: ['email'], // optional
  redirectUri: `${window.location.origin}/auth`, // optional
}, new storages.SimpleStorage())
```

### Checking if user is logged in in the YAC

```javascript
client.login(false);
```
This will redirect to the YAC to check if the user is logged in.
The argument indicates if YAC should show prompt if user is not logged in.
By passing `false` we will be redirected to the `redirectUri` of the client.
In that place we should handle the login check with:

```javascript
await client.handleLoginCheck();
```

### Logging in user

```javascript
client.login();
```
This will redirect to the YAC to check if the user is logged in.
If user is not logged in then user can login to the YAC. If this is first logging in by the user in the client he will also be asked to confirm the scopes of the client.
After allowing the client to access scopes user will be redirected to the `redirectUri` of the client where should exchange auth2 code for the auth token.
To do this we can call the

```javascript
await Yac.client.handleCodeCallback();
```

### Getting auth token

SimpleStore stores the token in cookies. We can easily get the token from client instance.

```javascript
const token = await client.getAccessToken();
```

If the token expired and the refresh token is still valid it will automatically refresh the access token. This is why the promise is returned by the `getAccessToken()`.

### Profile

To get user profile just call

```javascript
const profile = await client.getProfile();
```

## VueRouter 4 example

```javascript
// yacClient.js
import YacClient, { storages } from '@youniverse-center/yac-client';

export default new YacClient({
  clientId: 'myclientid',
  authorizationServer: 'https://yac.youniverse.center',
  scopes: ['email'],
  redirectUri: `${window.location.origin}/auth`,
}, new storages.SimpleStorage())
```

```javascript
// vue router config
import yacClient from './yacClient.js'

const routes = {
  // ... other routes
  {
    path: '/auth',
    component: {},
    async beforeEnter() {
      await yacClient.handleCheckLogin();
      await yacClient.handleCodeCallback();

      return '/';
    },
  }
}
```

## Composable example with reactive token

When creating the client pass instance of custom store to handle saving the token.

```typescript
// yacClient.js
import { ref, watch } from 'vue';
import YacClient, { AccessToken, ClientConfig, YacProfile } from '@youniverse-center/yac-client';
import { Ref } from 'vue';

class Vue3YacStore extends storages.SimpleStorage {
  constructor(token) {
    super('yac');
    this.token = token;
    this.token.value = this.getAccessToken();
  }

  saveAccessToken(accessToken): void {
    super.saveAccessToken.call(this, accessToken);
    this.token.value = accessToken;
  }
}

const token = ref(AccessToken.Invalid());
const profile = ref();

export const yacClient = new YacClient({
  clientId: 'myclientid',
  authorizationServer: 'https://yac.youniverse.center',
  scopes: ['email'],
  redirectUri: `${window.location.origin}/auth`,
}, new Vue3YacStore(token))

watch(token, async () => {
  if (token.value && !profile.value) {
    profile.value = await yacClient.getProfile();
  } else if (!token.value && profile.value) {
    profile.value = undefined;
  }
});

export default function useYacClient() {
  (async () => {
    const t = await yacClient.getAccessToken();
    if (t.isValid()) {
      profile.value = await yacClient.getProfile();
    }
  })();

  return {
    token,
    profile,
    yacClient,
  };
}
```

Then for example in login button component we can use the composable.

```javascript
import useYac from './yacClient.js'

export default {
  setup() {
    const { yacClient, token } = useYac();
    
    return {
      token,
      yacClient,
      async logIn() {
        await yacClient.login();
      }
    }
  }
}
```