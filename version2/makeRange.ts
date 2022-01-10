interface Iterator<T> {
    next(value?: any): IteratorResult<T>;
    return?(value?: any): IteratorResult<T>;
    throw?(e?: any): IteratorResult<T>;
}
interface IteratorResult<T> {
    done: boolean;
    value: T;
}
// rangeResult.ts

export class RangeResult implements IteratorResult<number> {
   
    done: boolean;
    value: number;

    constructor(value, done) {
     this.value = value;
     this.done = done;
    }

   }
   export class RangeIterator implements Iterator<number> {

    private _first: number;
    private _last: number
   
    constructor(first, last) {
     this._first = first;
     this._last = last;
    }


    next(value?: any): IteratorResult<number> {
        if (this._first < this._last) {
            return new RangeResult(this._first++, false)
        } else {
            return new RangeResult(undefined, true)
        }
    }

   }
   class MakeRange implements Iterable<number> {
    private _first: number;
    private _last: number
   
    constructor(first, last) {
     this._first = first;
     this._last = last;
    }

    [Symbol.iterator](): Iterator<number> {
        return new RangeIterator(this._first, this._last);
    }

   }

for (let item of new MakeRange(0,10)) {
    console.log(item)
}
