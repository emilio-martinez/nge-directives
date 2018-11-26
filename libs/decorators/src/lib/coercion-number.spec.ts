import { NumberProperty } from './coercion';

class NumberPropertyTester {
  @NumberProperty() property: any;

  @NumberProperty(111)
  propertyWithFallback: any;
}

describe('NumberProperty', () => {
  let instance: NumberPropertyTester;

  beforeEach(() => {
    instance = new NumberPropertyTester();
  });

  it('should coerce undefined to 0 or default', () => {
    instance.property = undefined;
    expect(instance.property).toBe(0);
    instance.propertyWithFallback = undefined;
    expect(instance.propertyWithFallback).toBe(111);
  });

  it('should coerce null to 0 or default', () => {
    instance.property = null;
    expect(instance.property).toBe(0);
    instance.propertyWithFallback = null;
    expect(instance.propertyWithFallback).toBe(111);
  });

  it('should coerce true to 0 or default', () => {
    instance.property = true;
    expect(instance.property).toBe(0);
    instance.propertyWithFallback = true;
    expect(instance.propertyWithFallback).toBe(111);
  });

  it('should coerce false to 0 or default', () => {
    instance.property = false;
    expect(instance.property).toBe(0);
    instance.propertyWithFallback = false;
    expect(instance.propertyWithFallback).toBe(111);
  });

  it('should coerce the empty string to 0 or default', () => {
    instance.property = '';
    expect(instance.property).toBe(0);
    instance.propertyWithFallback = '';
    expect(instance.propertyWithFallback).toBe(111);
  });

  it('should coerce the string "1" to 1', () => {
    instance.property = '1';
    expect(instance.property).toBe(1);
    instance.propertyWithFallback = '1';
    expect(instance.propertyWithFallback).toBe(1);
  });

  it('should coerce the string "123.456" to 123.456', () => {
    instance.property = '123.456';
    expect(instance.property).toBe(123.456);
    instance.propertyWithFallback = '123.456';
    expect(instance.propertyWithFallback).toBe(123.456);
  });

  it('should coerce the string "-123.456" to -123.456', () => {
    instance.property = '-123.456';
    expect(instance.property).toBe(-123.456);
    instance.propertyWithFallback = '-123.456';
    expect(instance.propertyWithFallback).toBe(-123.456);
  });

  it('should coerce an arbitrary string to 0 or default', () => {
    instance.property = 'pink';
    expect(instance.property).toBe(0);
    instance.propertyWithFallback = 'pink';
    expect(instance.propertyWithFallback).toBe(111);
  });

  it('should coerce an arbitrary string prefixed with a number to 0 or default', () => {
    instance.property = '123pink';
    expect(instance.property).toBe(0);
    instance.propertyWithFallback = '123pink';
    expect(instance.propertyWithFallback).toBe(111);
  });

  it('should coerce the number 1 to 1', () => {
    instance.property = 1;
    expect(instance.property).toBe(1);
    instance.propertyWithFallback = 1;
    expect(instance.propertyWithFallback).toBe(1);
  });

  it('should coerce the number 123.456 to 123.456', () => {
    instance.property = 123.456;
    expect(instance.property).toBe(123.456);
    instance.propertyWithFallback = 123.456;
    expect(instance.propertyWithFallback).toBe(123.456);
  });

  it('should coerce the number -123.456 to -123.456', () => {
    instance.property = -123.456;
    expect(instance.property).toBe(-123.456);
    instance.propertyWithFallback = -123.456;
    expect(instance.propertyWithFallback).toBe(-123.456);
  });

  it('should coerce an object to 0 or default', () => {
    instance.property = {};
    expect(instance.property).toBe(0);
    instance.propertyWithFallback = {};
    expect(instance.propertyWithFallback).toBe(111);
  });

  it('should coerce an array to 0 or default', () => {
    instance.property = [];
    expect(instance.property).toBe(0);
    instance.propertyWithFallback = [];
    expect(instance.propertyWithFallback).toBe(111);
  });
});
