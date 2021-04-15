export const verifyPassword = password => {
const specialCharsRegExp = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const numbersRegExp = /[0-9]/;
const capitalLetterRegExp = /[A-Z]/;

 if (password.length < 8) {
   return {
     code:1,
     description: 'Password is too short',
   }
 }

  if(!specialCharsRegExp.test(password)) {
    return {
      code: 2,
      description: 'Password doesn\'t meet a condition of at least one special character',
    }
  }

  if(!numbersRegExp.test(password)) {
    return {
      code: 3,
      description: 'Password doesn\'t meet a condition of at least one number',
    }
  }

  if(!capitalLetterRegExp.test(password)) {
    return {
      code: 4,
      description: 'Password doesn\'t meet a condition of at least one capittal letter',
    }
  }

  return { code: 0 }
}