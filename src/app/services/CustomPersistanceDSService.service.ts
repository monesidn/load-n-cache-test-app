import { Injectable } from '@angular/core';
import { LoadNCache, PersistanceManager, TimestampedValue } from 'load-n-cache';
import { randomStr } from '../util/Random';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

/**
 * A custom class that we wish to persist.
 */
export class CustomObject {

    public readonly len;

    constructor(
        public readonly str: string
    ) {
        this.len = str.length;
    }
}

/**
 * Store a plain string in place of the object serialization
 */
class CustomPersister implements PersistanceManager<CustomObject> {

    constructor(public lsKey = 'test-custom-persister') {
    }

    async loadValue(): Promise<void | TimestampedValue<CustomObject>> {
        const lsVal = localStorage.getItem(this.lsKey);
        if (!lsVal) {
            return;
        }
        const result = JSON.parse(lsVal) as TimestampedValue<string>;
        if (result.value) {
            return Object.assign(result, {value: new CustomObject(result.value)});
        }
    }

    async saveValue(value: TimestampedValue<CustomObject>): Promise<any> {
        const toWrite = Object.assign({}, value, {value: value.value.str});
        localStorage.setItem(this.lsKey, JSON.stringify(toWrite));
    }

    clear() {
        localStorage.removeItem(this.lsKey);
    }


}

@Injectable({
    providedIn: 'root'
})
export class CustomPersistanceDSService {

    private _value = new LoadNCache({
        loader: () => this.generateValue(),
        persistance: new CustomPersister()
    });


    private generateValue(): Promise<CustomObject> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(new CustomObject(randomStr()));
            }, 500);
        });
    }

    public customObject() {
        return this._value.get();
    }
    public flush() {
        return this._value.flush();
    }
}
