"use strict";
/**
 * Created by bob on 2016-10-14.
 */
var StringUtils_1 = require('../../src/ts/StringUtils');
var chai_1 = require('chai');
describe('StringUtils', function () {
    describe('isUnique()', function () {
        it('should return true : ASCII 0~32', function () {
            var isTrue = '1 2ab!@';
            chai_1.expect(StringUtils_1.StringUtils.isUnique(isTrue)).to.be.eq(true);
        });
        it('should return false : ASCII 0~32', function () {
            var isFalse = '1 2 ab!@';
            chai_1.expect(StringUtils_1.StringUtils.isUnique(isFalse)).to.be.eq(false);
        });
        it('should return true : ASCII 33~64', function () {
            var isTrue = '!@12 ab';
            chai_1.expect(StringUtils_1.StringUtils.isUnique(isTrue)).to.be.eq(true);
        });
        it('should return false : ASCII 33~64', function () {
            var isFalse = '!@12 ab!@';
            chai_1.expect(StringUtils_1.StringUtils.isUnique(isFalse)).to.be.eq(false);
        });
        it('should return true : ASCII 65~96', function () {
            var isTrue = '!@12 abA`';
            chai_1.expect(StringUtils_1.StringUtils.isUnique(isTrue)).to.be.eq(true);
        });
        it('should return false : ASCII 65~96', function () {
            var isFalse = 'A`!@12 ab!@A`';
            chai_1.expect(StringUtils_1.StringUtils.isUnique(isFalse)).to.be.eq(false);
        });
        it('should return true : ASCII 97~127', function () {
            var isTrue = '!@12 ab~A`';
            chai_1.expect(StringUtils_1.StringUtils.isUnique(isTrue)).to.be.eq(true);
        });
        it('should return false : ASCII 97~127', function () {
            var isFalse = 'a~A`!@12 ab~!@A`';
            chai_1.expect(StringUtils_1.StringUtils.isUnique(isFalse)).to.be.eq(false);
        });
    });
});
