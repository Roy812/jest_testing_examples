import NotACreativeColor from "./NotACreativeColor";

const { add, returnObject, toMatchObject, toThrowError, lessThan10Truthy } = require('./functions');

test('Add two numbers', () => {
    const num1 = 5;
    const num2 = 5;

    const result = add(num1, num2);

    expect(result).toBe(10);
});

test('Compare object properties, NOT deep equality', () => {
    // ARRANGE
    const index = 0;
    const list = [
        {
            id: 1
        }, {
            id: 2
        }
    ]

    // ACT
    const result = returnObject(list, index);

    // ASSERT
    //toEqual does not test deep equality.
    expect(result).toEqual({id: 1});
    //toStrictEqual tests if the values are same structure AND type.
    expect(result).toStrictEqual({id: 1});
});


test('grapefruits are a fruit', () => {
        expect('grapefruits').toMatch('fruit');
    });

test('toMatchObject', () => {
    // ARRANGE
    const test = {
        sky: 'clear',
        temperature: 'hot',
        wind: 'strong'
    }

    // ACT
    const compare = toMatchObject();

    // ASSERT
    expect(compare).toMatchObject(test);
});

test('Throw error if the color is green', () => {
     // ARRANGE
    const color = 'green';

    // ACT & ASSERT
    expect(() => {
        toThrowError(color);
    }).toThrowError(NotACreativeColor());
});

test('Less than 10 truthy test', async () => {
    // ARRANGE
    const a = 5;
    const b = 4;

    await expect(() => {
        lessThan10Truthy(a, b);
    }).toBeTruthy();
});

