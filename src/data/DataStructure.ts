/**
 * Created by bob on 2016-10-14.
 */

class HashTable {
    length: number = 0;
    private items = {};

    constructor(obj:Object) {
        for(let p in obj){
            if(obj.hasOwnProperty(p)){
                this.items[p] = obj[p];
                this.length++;
            }
        }
    }

    setItem(key:string, value:any):any {
        let previous = undefined;
        if(this.hasItem(key)) {
            previous = this.items[key];
        }
        else {
            this.length++;
        }
        this.items[key] = value;

        return previous;
    }

    getItem(key:string):any {
        return this.hasItem(key)?this.items[key]:undefined;
    }

    hasItem(key:string):boolean {
        return this.items.hasOwnProperty(key);
    }

    removeItem(key:string):any {
        if(this.hasItem(key)) {
            let previous = this.items[key];
            this.length--;
            delete this.items[key];
            return previous;
        }
        else {
            return undefined;
        }
    }

    keys() {
        let keys:string[] = [];
        for(let k in this.items){
            keys.push(k);
        }
        return keys;
    }

    values() {
        let values:any[] = [];
        for(let k in this.items){
           values.push(this.items[k]);
        }
        return values;
    }

    each(fn:Function) {
        for(let k in this.items){
            if(this.hasItem(k)){
                fn(k, this.items[k]);
            }
        }
    }

    clear() {
        this.items = {};
        this.length = 0;
    }

}

export {HashTable};