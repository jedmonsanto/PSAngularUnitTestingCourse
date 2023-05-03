import { StrengthPipe } from "./strength.pipe"

describe('StrengthPipe', () => {
    it('should display weak if the value is 5', () => {
        let strength = new StrengthPipe();

        expect(strength.transform(5)).toEqual('5 (weak)')
    });

    it('should display strong if the value is 10', () => {
        let strength = new StrengthPipe();

        expect(strength.transform(10)).toEqual('10 (strong)');
    });

    it('should display unbelievable if the value is 21', () => {
        let strength = new StrengthPipe();

        expect(strength.transform(21)).toEqual('21 (unbelievable)');
    });
})