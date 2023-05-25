describe('sbould check the intialvalue', () => {
    let initialValue: any;
    beforeEach(() => {
        initialValue = {};
    })
    it('should return if the variable outside', () => {
        // arrange
        initialValue.a = false;

        // act
        initialValue.a = true;

        // assert
        expect(initialValue.a).toBeTruthy();
    })
});