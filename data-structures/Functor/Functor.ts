export type FunctorType<T> = {
  map: <R>(fn: (value: T) => FunctorType<R>) => FunctorType<T>;
  valueOf: () => T;
};

export const createFunctor = <T>(value: T): FunctorType<T> => ({
  map: <R>(fn: Function) => createFunctor<R>(fn(value)),
  valueOf() {
    return value;
  }
});

export default createFunctor;
