import { verifyPassword } from '..'

describe('Veryfing if provided password is correct', () => {
  test('If password is to short returns code: 1 and description', () => {
    expect(verifyPassword('pass')).toEqual({
      code: 1,
      description: 'Password is too short',
    })
  })

  test('If password does not include at least one special character returns code: 2 and description', () => {
    expect(verifyPassword('password')).toEqual({
      code: 2,
      description: 'Password doesn\'t meet a condition of at least one special character',
    })
  })

  test('If password does not include at least one number returns code: 3 and description', () => {
    expect(verifyPassword('!password')).toEqual({
      code: 3,
      description: 'Password doesn\'t meet a condition of at least one number',
    })
  })

  test('If password does not include at least one capital letter returns code: 4 and description', () => {
    expect(verifyPassword('!password1')).toEqual({
      code: 4,
      description: 'Password doesn\'t meet a condition of at least one capittal letter',
    })
  })

  test('If password is correct returns code: 0 without description', () => {
    expect(verifyPassword('@p4sSword')).toEqual({
      code: 0,
    })
  })
})