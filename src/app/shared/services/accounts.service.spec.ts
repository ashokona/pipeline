import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AccountsService } from './accounts.service';

describe('AccountsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule, HttpClientTestingModule ],
    providers: [ HttpClient ]
  }));

  it('should be created', () => {
    const service: AccountsService = TestBed.get(AccountsService);
    expect(service).toBeTruthy();
  });
});
