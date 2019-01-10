import typeCheck from '../src/index.js';
describe('测试 init() 方法', function() {
    test('类型检测', () => {
        expect(typeCheck.init('hello world')).toBe('string');
        expect(typeCheck.init(true)).toBe('boolean');
        expect(typeCheck.init(1234)).toBe('number');
        expect(typeCheck.init([1, 3, 4])).toBe('array');
        expect(typeCheck.init({a: '12', b: '12'})).toBe('object');

        expect(typeCheck.init('hello world', 'string')).toBe(true);
        expect(typeCheck.init(true, 'boolean')).toBe(true);
        expect(typeCheck.init(1234, 'number')).toBe(true);

        expect(typeCheck.init([1, 2, 3], 'array', true)).toBe(true);
        expect(typeCheck.init([], 'array', true)).toBe(false);

        expect(typeCheck.init({a: '12', b: '12'}, 'object', true)).toBe(true);
        expect(typeCheck.init({}, 'object', true)).toBe(false);
    });
});
