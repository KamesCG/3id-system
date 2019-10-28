# 3ID System
### 3Box React State/Interface Management


### Lerna
Install: `yarn`
Setup Everything: `yarn $`
Watch Directories: `yarn watch`


### Examples

#### Box Provider

```js
import React from 'react'
import { BoxProvider } from '3ID-system'
export default props =>
<BoxProvider>
  {props.children}
</BoxProvider>
```


#### Enable Ethereum

```js
import React from 'react'
import { EnableEtheruem } from '3ID-system'
export default props =>(
  <EnableEtheruem
    componentIsDisconnected={CustomComponent}
    componentIsLoading={CustomComponent}
    componentIsConnected={CustomComponent}
  />
)
```


#### Login
```js
import React from 'react'
import { 
  Login,
  LoginButton,
  LoginModal,
} from '3ID-system'
export default props => (
  <Login variants={['tag']} />
  <LoginButton 
    componentIsLoggedOut={CustomComponent}
    componentIsLoading={CustomComponent}
    componentIsLoggedIn={CustomComponent}
  />
)
```