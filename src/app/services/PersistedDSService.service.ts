import { Injectable } from '@angular/core';
import { LoadNCache } from '@monesidn/load-n-cache';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

@Injectable({
    providedIn: 'root'
})
export class PersistedDSService {

    private _loremIpsum = new LoadNCache({
        loader: () => this.generateDataPromise(),
        persistence: 'localStorage',
        persistenceKey: 'example-message'
    });

    public generated = 0;

    private generateDataPromise(): Promise<string> {
        return new Promise((resolve) => {
            this.generated++;
            setTimeout(() => resolve(`Message generated ${this.generated} time(s). ` + loremIpsum), 500);
        });
    }

    public loremIpsum() {
        return this._loremIpsum.get();
    }
    public flush() {
        return this._loremIpsum.flush();
    }
}
