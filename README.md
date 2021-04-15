# Password validator

Function must return data as an Object with the below format:

```javascript
{
code: Number,
description: String,
}
```

- Minimum 8 signs (if less returns code: 1 + description)

- At least one special sign (if less returns code: 2 + description):

- At least one number (if less returns code: 3 + description)

- At least one capital letter (if less returns code: 4 + description)

- If password is correct returns code: 0 without description
