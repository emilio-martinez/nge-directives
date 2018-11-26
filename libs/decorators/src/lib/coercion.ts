import { coerceArray, coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';

function defineCoercionPropertyDecorator<T>(coercionFn: (value: any) => T): PropertyDecorator {
  return function(target: Object, propertyKey: PropertyKey) {
    if (target.hasOwnProperty(propertyKey)) {
      return;
    }

    const privateKey = typeof propertyKey === 'symbol' ? Symbol() : `__${propertyKey}`;

    Object.defineProperty(target, propertyKey, {
      get() {
        return this[privateKey];
      },
      set(value: any) {
        this[privateKey] = coercionFn(value);
      },
      configurable: true,
      enumerable: true
    });
  };
}

export function ArrayProperty<T>(): PropertyDecorator {
  return defineCoercionPropertyDecorator(value => coerceArray<T>(value));
}

export function BooleanProperty(): PropertyDecorator {
  return defineCoercionPropertyDecorator(value => coerceBooleanProperty(value));
}

export function NumberProperty<D>(fallback?: D): PropertyDecorator {
  return defineCoercionPropertyDecorator(value => coerceNumberProperty(value, fallback));
}
