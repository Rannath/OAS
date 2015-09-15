function OAS0Strings(s) {
    s.ME_ID = "me";
    s.ME_ALIAS = "Me";
    s.ME_DESC = "That's me, I love me!";

    return s;
}
var defStrs = OAS0Strings(defStrs || {});

function OAS0(o, s) {
    o.thing = function(id, alias, description) {
        return {
            get id() {
                return id;
            },
            alias: alias,
            description: description
        }
    }

    o.player = o.thing(s.ME_ID, s.ME_ALIAS, s.ME_DESC);
    o.rooms = [];
    o.roomIdx = 0;

    return o;
}
var o = OAS0(o || {}, defStrs);