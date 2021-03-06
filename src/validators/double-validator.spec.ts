import { FormControl } from '@angular/forms';
import { DoubleValidator } from './double-validator';

describe('Validator: Double Validator', () => {

  it('should have no error on valid floating number', () => {
    expect(DoubleValidator.isValid(new FormControl('1.1'))).toBeUndefined();
  });

  it('should have no error on valid integer', () => {
    expect(DoubleValidator.isValid(new FormControl('1'))).toBeUndefined();
  });

  it('should have no error on valid negative floating number', () => {
    expect(DoubleValidator.isValid(new FormControl('-1.1'))).toBeUndefined();
  });

  it('should have no error on valid negative integer', () => {
    expect(DoubleValidator.isValid(new FormControl('-1'))).toBeUndefined();
  });

  it('should have no error on zero', () => {
    expect(DoubleValidator.isValid(new FormControl('0'))).toBeUndefined();
  });

  it('should have an error on alphanumeric character', () => {
    const validationError = { 'not a number': { name: 'a' } };
    expect(DoubleValidator.isValid(new FormControl('a'))).toEqual(validationError);
  });
});
