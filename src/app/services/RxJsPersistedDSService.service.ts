import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { randomStr } from '../util/Random';
import { loadNCache } from 'load-n-cache-rxjs';

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
                persistence: 'localStorage',
                persistenceKey: 'example-message-rxjs'
            }));
}
