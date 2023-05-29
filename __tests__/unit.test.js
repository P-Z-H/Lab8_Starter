// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// isPhoneNumber
test('182 is not a phone number', () => {
    expect(functions.isPhoneNumber('182')).toBe(false);
});
test('1211231232 is not a phone number', () => {
    expect(functions.isPhoneNumber('1211231232')).toBe(false);
});
test('121-123-1232 is a phone number', () => {
    expect(functions.isPhoneNumber('121-123-1232')).toBe(true);
});
test('(121)123-1232 is a phone number', () => {
    expect(functions.isPhoneNumber('(121)123-1232' )).toBe(true);
});

// isEmail
test('182 is not an email', () => {
    expect(functions.isEmail('182')).toBe(false);
});
test('182@123.123 is not an email', () => {
    expect(functions.isEmail('182@123.123')).toBe(false);
});
test('182@qwe.com is an email', () => {
    expect(functions.isEmail('182@qwe.com')).toBe(true);
});
test('hi@hi.edu is an email', () => {
    expect(functions.isEmail('hi@hi.edu')).toBe(true);
});

// isStrongPassword
test('182 is not a strong password', () => {
    expect(functions.isStrongPassword('182')).toBe(false);
});
test('qwe is not a strong password', () => {
    expect(functions.isStrongPassword('qwe')).toBe(false);
});
test('qwe123 is a strong password', () => {
    expect(functions.isStrongPassword('qwe123')).toBe(true);
});
test('QWEqwe is a strong password', () => {
    expect(functions.isStrongPassword('QWEqwe')).toBe(true);
});

// isDate
test('182 is not a date', () => {
    expect(functions.isDate('182')).toBe(false);
});
test('2023/5/28 is not a date', () => {
    expect(functions.isDate('2023/5/28')).toBe(false);
});
test('5/28/2023 is a date', () => {
    expect(functions.isDate('5/28/2023')).toBe(true);
});
test('05/28/1000 is a date', () => {
    expect(functions.isDate('05/28/1000')).toBe(true);
});

// isHexColor
test('1821231 is not a hex color', () => {
    expect(functions.isHexColor('1821231')).toBe(false);
});
test('#aaaa is not a hex color', () => {
    expect(functions.isHexColor('#aaaa')).toBe(false);
});
test('#aaa is a hex color', () => {
    expect(functions.isHexColor('#aaa')).toBe(true);
});
test('#aaaaaa is a hex color', () => {
    expect(functions.isHexColor('#aaaaaa')).toBe(true);
});