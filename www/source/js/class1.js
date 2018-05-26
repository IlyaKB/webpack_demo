'use strict';

export default class Class1 {
    constructor() {
        this.var1 = 10;
    }

    method1(a, b) {
        return a * this.var1 - b*2;
    }
}