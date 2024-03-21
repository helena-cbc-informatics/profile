This page has the purpose of presenting myself and my portfolio.
The application has been developed with React and materiallize CSS.

I have been following several web pages such as technologies documentation and [w3schools](https://www.w3schools.com/react/react_getstarted.asp) 

# How did I created
- In order to create the React project structure, I used the following command:
```
npm create-react-app <project_name>
```

- There is a challenge to use Materialize CSS with React.
It looks like it is not that straight forward. In order to use it, check the example on Contacts.js file.
There has been 2 necessary imports and 2 lines of code:
```
import React, { useEffect } from 'react';
import M from 'materialize-css';

useEffect(() => {
}, []);
```