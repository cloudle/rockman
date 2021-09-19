import { sum } from 'commands/default'

test('adds 1 + 2 to equal 3 (from integration tests)', () => {
  expect(sum(1, 2)).toBe(3)
})
