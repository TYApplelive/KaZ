import { sum } from '../sum'
import { describe, expect, test } from 'vitest'

describe('Math Module', () => {
  test('1+2', () => {
    const number = sum(1, 2)
    expect(number).toBe(3)
  })

  test('2+2', () => {
    const number = sum(2, 2)
    expect(number).toBe(4)
  })
})
