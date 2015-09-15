///<reference path="~/oas.js"/>
describe("make sure the OAS0 produces the world model correctly", function () {
    it("o.player is of type {} & produces correctly", function () {
        var o = OAS0({});

        expect(typeof o.player).toBe("object");
        expect(o.player.id).toBe(defStrs.ME_ID);
        expect(o.player.alias).toBe(defStrs.ME_ALIAS);
        expect(o.player.description).toBe(defStrs.ME_DESC);
    });

    it("can't change o.player id", function () {
        var o = OAS0({});

        expect(o.player.id).toBe(defStrs.ME_ID);
        o.player.id = "you";
        expect(o.player.id).toBe(defStrs.ME_ID);
    });

    it("can change player alias & description", function () {
        var o = OAS0({});

        expect(o.player.alias).toBe(defStrs.ME_ALIAS);
        o.player.alias = "You";
        expect(o.player.alias).toBe("You");

        expect(o.player.description).toBe(defStrs.ME_DESC);
        o.player.description = "Not me.";
        expect(o.player.description).toBe("Not me.");
    });

    it("o.rooms is of type []", function () {
        var o = OAS0({});

        expect(Array.isArray(o.rooms)).toBe(true);
    });

    it("o.roomIdx == 0", function () {
        var o = OAS0({});

        expect(typeof o.roomIdx).toBe("number");
        expect(o.roomIdx).toBe(0);
    });
});

describe("make sure Room produces a room properly", function () {
    it("room contains alias", function () {
        var o = OAS0({});

        expect(typeof o.player).toBe("object");
    });
});