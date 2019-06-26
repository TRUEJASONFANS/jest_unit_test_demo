export default class Collections {

    getSum(a: Array<number>) {
        let sum = 0;
        for (let o of a) {
            sum += o;
        }
        return sum;
    }
}