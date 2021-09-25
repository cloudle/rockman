import { sum } from 'commands/run';

test('adds 1 + 2 to equal 3 (from integration tests)', () => {
  expect(sum(1, 2)).toBe(3);
});
