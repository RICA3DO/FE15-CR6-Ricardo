import { TestBed } from '@angular/core/testing';

import { order } from './order';

describe('order', () => {
  let service: order;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(order);
  });

  it('It`s being made', () => {
    expect(service).toBeTruthy();
  });
});