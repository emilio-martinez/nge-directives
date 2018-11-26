import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';

function generatePrivateKey(propertyKey: PropertyKey) {
  return typeof propertyKey === 'symbol' ? Symbol() : `__${propertyKey}`;
}

export function BooleanProperty(): PropertyDecorator {
  return function(target: Object, propertyKey: PropertyKey) {
    if (target.hasOwnProperty(propertyKey)) {
      return;
    }

    const privateKey = generatePrivateKey(propertyKey);

    Object.defineProperty(target, propertyKey, {
      get() {
        return this[privateKey];
      },
      set(value: any) {
        this[privateKey] = coerceBooleanProperty(value);
      },
      configurable: true,
      enumerable: true
    });
  };
}

export function NumberProperty<D>(fallback?: D): PropertyDecorator {
  return function(target: Object, propertyKey: PropertyKey) {
    if (target.hasOwnProperty(propertyKey)) {
      return;
    }

    const privateKey = generatePrivateKey(propertyKey);

    Object.defineProperty(target, propertyKey, {
      get() {
        return this[privateKey];
      },
      set(value: any) {
        this[privateKey] = coerceNumberProperty(value, fallback);
      },
      configurable: true,
      enumerable: true
    });
  };
}
