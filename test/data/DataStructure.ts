/**
 * Created by bob on 2016-10-14.
 */
import {expect} from 'chai';
import {HashTable} from '../../src/data/DataStructure';

describe('DataStructure', ()=>{

    describe('HashTable', ()=>{
        const obj = {one:1, two:2, three:3, "I'm no 4": 4};
        let h = new HashTable(obj);

        it('should return proper length', ()=>{
           expect(h.length).to.be.equal(4);
       }) ;

        it('should be 1 of key one', ()=>{
            expect(h.getItem('one')).to.be.equal(1);
        });

        it('should not have key "foo"',()=>{
            expect(h.hasItem('foo')).to.be.equal(false);
        });

        it('should be undefined of previous value of key "foo"', ()=>{
           expect(h.setItem('foo', 'bar')).to.be.equal(undefined);
        });

        it('should return proper length after setItem', ()=>{
            expect(h.length).to.be.equal(5);
        }) ;
        it('should be value of key "foo"', ()=>{
            expect(h.getItem('foo')).to.be.equal('bar');
        }) ;
        it('should be value of key "I\'m no 4"', ()=>{
            expect(h.getItem("I'm no 4")).to.be.equal(4);
        }) ;
        it('should return 0 of length', ()=>{
            h.clear();
            expect(h.length).to.be.equal(0);
        }) ;
    });
});