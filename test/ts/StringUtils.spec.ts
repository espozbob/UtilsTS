/**
 * Created by bob on 2016-10-14.
 */
import { StringUtils } from '../../src/ts/StringUtils';
import { expect } from 'chai';

describe('StringUtils', ()=>{
   describe('isUnique()', () => {

       it('should return true : ASCII 0~32', ()=>{
           const isTrue:string = '1 2ab!@';
           expect(StringUtils.isUnique(isTrue)).to.be.eq(true);
       });
       it('should return false : ASCII 0~32', ()=>{
           const isFalse:string = '1 2 ab!@';
           expect(StringUtils.isUnique(isFalse)).to.be.eq(false);
       });
       it('should return true : ASCII 33~64', ()=>{
           const isTrue:string = '!@12 ab';
           expect(StringUtils.isUnique(isTrue)).to.be.eq(true);
       });
       it('should return false : ASCII 33~64', ()=>{
           const isFalse:string = '!@12 ab!@';
           expect(StringUtils.isUnique(isFalse)).to.be.eq(false);
       });
       it('should return true : ASCII 65~96', ()=>{
           const isTrue:string = '!@12 abA`';
           expect(StringUtils.isUnique(isTrue)).to.be.eq(true);
       });
       it('should return false : ASCII 65~96', ()=>{
           const isFalse:string = 'A`!@12 ab!@A`';
           expect(StringUtils.isUnique(isFalse)).to.be.eq(false);
       });
       it('should return true : ASCII 97~127', ()=>{
           const isTrue:string = '!@12 ab~A`';
           expect(StringUtils.isUnique(isTrue)).to.be.eq(true);
       });
       it('should return false : ASCII 97~127', ()=>{
           const isFalse:string = 'a~A`!@12 ab~!@A`';
           expect(StringUtils.isUnique(isFalse)).to.be.eq(false);
       });
   });
});
