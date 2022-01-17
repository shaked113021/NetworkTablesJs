export enum NTRawType {
    Boolean = 0x00,
    Double = 0x01,
    String = 0x02,
    RawData = 0x03,
    BooleanArray = 0x10,
    DoubleArray = 0x11,
    StringArray = 0x12,
    RTCDefenition = 0x20
}

export interface NTType<T> {
    get value(): T;
    set value(val: T);
    get rawValue(): Uint8Array;
    set rawValue(value: Uint8Array);
    get rawSize(): number;
    get rawType(): NTRawType
}