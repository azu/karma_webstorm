/**
 * Created by azu on 2013/05/31.
 */
describe("greet test", function () {
    it("returns Hello,taro", function () {
        expect('Hello,taro').toEqual("Hello,taro");
    });
    it("挨拶しな, taro", function () {
        expect('Hello, taro').toEqual("Hello, taro");
    });

});