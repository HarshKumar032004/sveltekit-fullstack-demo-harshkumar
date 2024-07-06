import {
    SmartContract,
    assert,
    method,
    prop,
} from 'scrypt-ts'

export class Multiplication extends SmartContract {
    @prop()
    x: bigint;
    @prop()
    y: bigint;

    constructor(x: bigint, y: bigint) {
        super(...arguments)
        this.x = x;
        this.y = y;
    }

    @method()
    public unlock(multiplcation : bigint) {
        assert(multiplcation == this.x * this.y, 'incorrect multiplication')
    }
}
