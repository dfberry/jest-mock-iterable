class MakeRange { // no need to explicitly implement the interface
    private _first: number;
    private _last: number
   
    constructor(first, last) {
     this._first = first;
     this._last = last;
    }

// no need to explicitly have IterableIterator<number> as return type
    [Symbol.iterator]() {
        return this;
    }

// no need to explicitly have IteratorResult<number> as return type.
    next() {
        if (this._first < this._last) {
            return {value: this._first++, done: false}
        } else {
            return {value: undefined, done: true}
        }

   }
}

for (let item of new MakeRange(0,10)) {
    console.log(item)
}