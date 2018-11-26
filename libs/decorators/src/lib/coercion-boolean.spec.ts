import { BooleanProperty } from './coercion';

class BooleanPropertyTester {
  @BooleanProperty() property: any;
}

describe('BooleanProperty', () => {
  let instance: BooleanPropertyTester;

  beforeEach(() => {
    instance = new BooleanPropertyTester();
  });

  it('should coerce undefined to false', () => {
    instance.property = undefined;
    expect(instance.property).toBe(false);
  });

  it('should coerce null to false', () => {
    instance.property = null;
    expect(instance.property).toBe(false);
  });

  it('should coerce the empty string to true', () => {
    instance.property = '';
    expect(instance.property).toBe(true);
  });

  it('should coerce zero to true', () => {
    instance.property = 0;
    expect(instance.property).toBe(true);
  });

  it('should coerce the string "false" to false', () => {
    instance.property = 'false';
    expect(instance.property).toBe(false);
  });

  it('should coerce the boolean false to false', () => {
    instance.property = false;
    expect(instance.property).toBe(false);
  });

  it('should coerce the boolean true to true', () => {
    instance.property = true;
    expect(instance.property).toBe(true);
  });

  it('should coerce the string "true" to true', () => {
    instance.property = 'true';
    expect(instance.property).toBe(true);
  });

  it('should coerce an arbitrary string to true', () => {
    instance.property = 'pink';
    expect(instance.property).toBe(true);
  });

  it('should coerce an object to true', () => {
    instance.property = {};
    expect(instance.property).toBe(true);
  });

  it('should coerce an array to true', () => {
    instance.property = [];
    expect(instance.property).toBe(true);
  });
});
