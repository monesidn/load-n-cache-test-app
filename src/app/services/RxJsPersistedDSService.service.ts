import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { randomStr } from '../util/Random';
import { loadNCache } from 'load-n-cache-rxjs';;

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

@Injectable({
    providedIn: 'root'
})
export class RxJsPersistedDSService {

    public flush$ = new Subject<void>();

    public randStr$ = new Observable<string>((sub) => {
                sub.next(randomStr());
                sub.complete();
            })
            .pipe(loadNCache({
                flushOn: () => this.flush$,
                persistance: 'localStorage',
                persistanceKey: 'example-message-rxjs'
            }));
}
