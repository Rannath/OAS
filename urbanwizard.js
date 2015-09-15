var urban;
(function(urban) {
    var title = "Urban Wizard";
    var RoomViewer = (function() {
        function RoomViewer() {
        }

        RoomViewer.prototype.view = function(room) {
            return m("div", [
                m("header", room.alias),
                m("p", room.description),
                m("ul#items", room.items.map(function(val, idx) {
                    return m("li", [
                        val.alias,
                        m("ul", [
                            m("a", { onclick: o.showModal(o.MODAL_FLAGS.DEFAULT_BUTTON, m("h1", val.alias), m("p", val.description)) }, "Examine"),
                            m("a", { onclick: function() { o.world.take(room.remove(idx)); } }, "Take")
                        ])
                    ]);
                })),
                m("ul#nav", [
                    room.goto.map(function(val) { return m("li", [val]); })
                ])
            ]);
        };
        return RoomViewer;
    })();
    urban.RoomViewer = RoomViewer;
    var InvViewer = (function() {
        function InvViewer() {
        }

        InvViewer.prototype.view = function(inv) {
            return m("div#inv", [
                m("h2", "Inventory"),
                inv
            ]);
        };
        return InvViewer;
    })();
    urban.InvViewer = InvViewer;
    var layout = (function() {
        function layout() {
            var _this = this;
            this.view = function() {
                return m("html", [
                    m("head", [
                        m("title", title),
                        m("link[href='simple.css'][rel=stylesheet]")
                    ]),
                    m("body", [
                        m("main", [
                            _this.cView,
                            _this.iView,
                            _this.tView
                        ]),
                        _this.modal.view(_this.mView)
                    ])
                ]);
            };
            this.modal = new o.Modal;
        }

        layout.prototype.showRoom = function(room) {
            this.cView = layout.roomViewer.view(room);
        };
        layout.prototype.showInventory = function(inv) {
            this.iView = layout.invViewer.view(inv);
        };
        layout.prototype.showTemp = function(message) {
            this.tView = message;
        };
        layout.prototype.showModal = function(message) {
            this.mView = message;
            this.modal.visible(true);
        };
        layout.prototype.hideModal = function() {
            this.modal.visible(false);
        };
        return layout;
    })();
    urban.layout = layout;
})(urban || (urban = {}));
//# sourceMappingURL=urbanwizard.js.map