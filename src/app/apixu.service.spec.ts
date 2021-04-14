import { TestBed } from '@angular/core/testing';

import { ApixuService } from './apixu.service';
import { Injectable } from '@angular/core';


describe('ApixuService', () => {
  let service: ApixuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApixuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

