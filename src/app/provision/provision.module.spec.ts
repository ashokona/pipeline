import { ProvisionModule } from './provision.module';

describe('ProvisionModule', () => {
  let provisionModule: ProvisionModule;

  beforeEach(() => {
    provisionModule = new ProvisionModule();
  });

  it('should create an instance', () => {
    expect(provisionModule).toBeTruthy();
  });
});
