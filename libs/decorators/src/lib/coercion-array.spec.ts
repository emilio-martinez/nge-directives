import { ArrayProperty } from './coercion';

class ArrayPropertyTester {
  @ArrayProperty() property: any;
}

describe('ArrayProperty', () => {
  let instance: ArrayPropertyTester;

  beforeEach(() => {
    instance = new ArrayPropertyTester();
  });

  it('should wrap a string in an array', () => {
    const stringVal = (instance.property = 'just a string');
    expect(instance.property).toEqual([stringVal]);
  });

  it('should wrap a number in an array', () => {
    const numberVal = (instance.property = 42);
    expect(instance.property).toEqual([numberVal]);
  });

  it('should wrap an object in an array', () => {
    const objectVal = (instance.property = { something: 'clever' });
    expect(instance.property).toEqual([objectVal]);
  });

  it('should wrap a null vall in an array', () => {
    const nullVal = (instance.property = null);
    expect(instance.property).toEqual([nullVal]);
  });

  it('should wrap an undefined value in an array', () => {
    const undefinedVal = (instance.property = undefined);
    expect(instance.property).toEqual([undefinedVal]);
  });

  it('should not wrap an array in an array', () => {
    const arrayVal = (instance.property = [1, 2, 3]);
    expect(instance.property).toBe(arrayVal);
  });
});
