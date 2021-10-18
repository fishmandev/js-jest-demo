const app = require('./../app');

test('adds 1 + 2 to equal 3', () => {
    expect(app.sum(1, 2)).toBe(3);
});

test('subs 9 - 7 to equal 2', () => {
    expect(app.sub(9, 7)).toBe(2);
});
