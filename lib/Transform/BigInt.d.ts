/**
 * Serialize a `bigint` to a string
 */
declare const _default: {
    type: string;
    shouldTransform(_type: any, obj: any): obj is bigint;
    toSerializable(value: bigint): string;
    fromSerializable(data: string): bigint;
};
export default _default;
