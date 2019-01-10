export type FunctorType<T> = {
  map: <R>(fn: (value: T) => FunctorType<R>) => FunctorType<T>;
  valueOf: () => T;
};

export interface IFunctor<T> {
  value: T
  map: <R>(fn: (value: T) => R) => IFunctor<R>
}

export class Functor<T> implements IFunctor<T> {
  public value: T
  constructor(v: T) {
    this.value = v;
  }

  map<R>(fn: (value: T) => R) {
    return new Functor(fn(this.value));
  }
}

export const createFunctor = <T>(value: T): FunctorType<T> => ({
  map: <R>(fn: Function) => createFunctor<R>(fn(value)),
  valueOf() {
    return value;
  }
});

export default createFunctor;
