import { NTType, NTRawType } from "./NTType";

export class NTBoolean implements NTType<boolean> {

    private _rawValue: Uint8Array;

    constructor(value: boolean | Uint8Array = false) {
        this._rawValue = new Uint8Array(1);

        if (typeof value === 'boolean') {
            this.value = value;
        } else {
            this.rawValue = value;
        }
    }

    get value(): boolean {
        if (this._rawValue[0] === 0x00) {
            return false;
        }
        return true;
    }

    set value(val: boolean) {
        if (val) {
            this._rawValue[0] = 0x01;
        } else {
            this._rawValue[0] = 0x00;
        }
    }

    get rawValue(): Uint8Array {
        const retArray = new Uint8Array(this._rawValue.length);
        retArray[0] = this._rawValue[0];
        return retArray;
    }

    set rawValue(value: Uint8Array) {
        if (value.length > 1) {
            throw Error("rawValue for NTBoolean cannot be larger than 1 byte");
        }

        switch (value[0])
        {
            case 0x00:
                this._rawValue[0] = 0x00;
                break;
            case 0x01:
                this._rawValue[0] = 0x01;
                break;
            default:
                throw new Error("rawValue for NTBoolean must be 0 or 1");
        }
    }

    get rawSize(): number {
        return this._rawValue.length;
    }

    get rawType(): NTRawType {
        return NTRawType.Boolean;
    }

}