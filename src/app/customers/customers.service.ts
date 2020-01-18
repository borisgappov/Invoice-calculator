import { Injectable } from '@angular/core';
import {
    EntityCollectionServiceBase,
    EntityCollectionServiceElementsFactory
} from 'ngrx-data';
import { Customer } from '../core/model/customer';

@Injectable({ providedIn: 'root' })
export class CustomerService extends EntityCollectionServiceBase<Customer> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Customer', serviceElementsFactory);
    }
}