(this["webpackJsonpbank-finder-react"] =
  this["webpackJsonpbank-finder-react"] || []).push([
  [0],
  {
    137: function (e, t, a) {},
    138: function (e, t, a) {},
    147: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(5),
        c = a(0),
        r = a.n(c),
        s = a(49),
        i = a.n(s),
        l = (a(137), a(30)),
        o = a(48),
        j = (a(138), a(164)),
        u = a(75),
        d = a(160),
        b = function (e) {
          var t = e.data,
            a = e.status,
            c = e.activePage,
            r = e.setActivePage,
            s = e.PAGESIZE;
          return Object(n.jsx)(d.a, {
            disabled: "fetching" === a,
            inverted: !0,
            onPageChange: function (e, t) {
              return r(t.activePage);
            },
            activePage: c,
            ellipsisItem: {
              content: Object(n.jsx)(u.a, { name: "ellipsis horizontal" }),
              icon: !0,
            },
            firstItem: {
              content: Object(n.jsx)(u.a, { name: "angle double left" }),
              icon: !0,
            },
            lastItem: {
              content: Object(n.jsx)(u.a, { name: "angle double right" }),
              icon: !0,
            },
            prevItem: {
              content: Object(n.jsx)(u.a, { name: "angle left" }),
              icon: !0,
            },
            nextItem: {
              content: Object(n.jsx)(u.a, { name: "angle right" }),
              icon: !0,
            },
            totalPages: t.count ? Math.ceil(t.count / s) : 1,
          });
        },
        h = a(162),
        x = a(166),
        O = function (e) {
          var t = e.handleFavorites,
            a = e.list,
            c = e.status,
            r = e.favorites,
            s = { filter: "fetching" === c ? "blur(8px)" : null };
          return Object(n.jsxs)(h.a, {
            celled: !0,
            inverted: !0,
            selectable: !0,
            children: [
              Object(n.jsx)(h.a.Header, {
                children: Object(n.jsxs)(h.a.Row, {
                  children: [
                    Object(n.jsx)(h.a.HeaderCell, { children: "IFSC" }),
                    Object(n.jsx)(h.a.HeaderCell, { children: "Bank ID" }),
                    Object(n.jsx)(h.a.HeaderCell, { children: "Bank" }),
                    Object(n.jsx)(h.a.HeaderCell, { children: "Branch" }),
                    Object(n.jsx)(h.a.HeaderCell, { children: "Address" }),
                    Object(n.jsx)(h.a.HeaderCell, { children: "District" }),
                    Object(n.jsx)(h.a.HeaderCell, { children: "City" }),
                    Object(n.jsx)(h.a.HeaderCell, { children: "State" }),
                    Object(n.jsx)(h.a.HeaderCell, { children: "Favorite" }),
                  ],
                }),
              }),
              Object(n.jsx)(h.a.Body, {
                children:
                  a &&
                  a.map(function (e, a) {
                    return Object(n.jsxs)(
                      h.a.Row,
                      {
                        children: [
                          Object(n.jsx)(h.a.Cell, {
                            style: s,
                            children: e.ifsc,
                          }),
                          Object(n.jsx)(h.a.Cell, {
                            style: s,
                            children: e.bank_id,
                          }),
                          Object(n.jsx)(h.a.Cell, {
                            style: s,
                            children: e.bank_name,
                          }),
                          Object(n.jsx)(h.a.Cell, {
                            style: s,
                            children: Object(n.jsx)("div", {
                              style: { maxWidth: "200px" },
                              children: e.branch,
                            }),
                          }),
                          Object(n.jsx)(h.a.Cell, {
                            style: s,
                            children: Object(n.jsx)("div", {
                              style: { maxWidth: "300px" },
                              children: e.address,
                            }),
                          }),
                          Object(n.jsx)(h.a.Cell, {
                            style: s,
                            children: e.district,
                          }),
                          Object(n.jsx)(h.a.Cell, {
                            style: s,
                            children: e.city,
                          }),
                          Object(n.jsx)(h.a.Cell, {
                            style: s,
                            children: e.state,
                          }),
                          Object(n.jsx)(h.a.Cell, {
                            style: s,
                            textAlign: "center",
                            children: Object(n.jsx)(x.a, {
                              icon: "star",
                              rating: r[e.ifsc] ? 1 : 0,
                              maxRating: 1,
                              onRate: function (a, n) {
                                return t(e.ifsc, n.rating, e);
                              },
                            }),
                          }),
                        ],
                      },
                      a
                    );
                  }),
              }),
            ],
          });
        },
        f = a(108),
        v = a.n(f),
        g = a(118),
        p = a(167),
        m = function (e) {
          var t = e.data,
            a = e.setShowFavorites,
            c = e.showFavorites;
          return Object(n.jsxs)("div", {
            style: {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "30px",
            },
            children: [
              Object(n.jsxs)("div", {
                style: {
                  fontSize: "16px",
                  marginRight: "50px",
                  fontStyle: "italic",
                  fontWeight: "700",
                },
                children: ["Results: ", t.count],
              }),
              Object(n.jsx)("div", {
                style: {
                  fontSize: "16px",
                  marginRight: "10px",
                  fontStyle: "italic",
                  fontWeight: "700",
                },
                children: "Favorites",
              }),
              Object(n.jsx)(p.a, {
                slider: !0,
                value: c,
                onChange: function (e, t) {
                  a(t.checked);
                },
              }),
            ],
          });
        },
        y = a(159);
      function C(e) {
        var t = e.value,
          a = e.onChange;
        return Object(n.jsx)(y.a, {
          className: "select",
          placeholder: "Select a city",
          options: [
            { key: "bg", value: "Banglore", text: "Banglore" },
            { key: "hd", value: "Hyderabad", text: "Hyderabad" },
            { key: "cn", value: "Chennai", text: "Chennai" },
            { key: "kc", value: "Kochi", text: "Kochi" },
            { key: "mb", value: "Mumbai", text: "Mumbai" },
            { key: "bg", value: " ", text: "All" },
          ],
          value: t,
          onChange: a,
        });
      }
      var S = a(163);
      function k(e) {
        var t = e.value,
          a = e.onChange,
          c = e.status;
        return Object(n.jsx)(S.a, {
          value: t,
          onChange: a,
          className: "search",
          loading: "fetching" === c,
          icon: "search",
          placeholder: "Search...",
        });
      }
      var F = function () {
          var e = Object(c.useState)(""),
            t = Object(o.a)(e, 2),
            a = t[0],
            r = t[1],
            s = Object(c.useState)(""),
            i = Object(o.a)(s, 2),
            d = i[0],
            h = i[1],
            x = Object(c.useState)(1),
            f = Object(o.a)(x, 2),
            p = f[0],
            y = f[1],
            S = Object(c.useState)({}),
            F = Object(o.a)(S, 2),
            E = F[0],
            H = F[1],
            I = Object(c.useState)(!1),
            R = Object(o.a)(I, 2),
            N = R[0],
            w = R[1],
            P = (function (e) {
              var t = Object(c.useRef)({}),
                a = { status: "idle", error: null, data: [] },
                n = Object(c.useReducer)(function (e, t) {
                  switch (t.type) {
                    case "FETCHING":
                      return Object(l.a)(
                        Object(l.a)({}, e),
                        {},
                        { status: "fetching" }
                      );
                    case "FETCHED":
                      return Object(l.a)(
                        Object(l.a)({}, a),
                        {},
                        { status: "fetched", data: t.payload }
                      );
                    case "FETCH_ERROR":
                      return Object(l.a)(
                        Object(l.a)({}, a),
                        {},
                        { status: "error", error: t.payload }
                      );
                    default:
                      return e;
                  }
                }, a),
                r = Object(o.a)(n, 2),
                s = r[0],
                i = r[1];
              return (
                Object(c.useEffect)(
                  function () {
                    var a = !1;
                    if (e)
                      return (
                        (function () {
                          var n = Object(g.a)(
                            v.a.mark(function n() {
                              var c, r, s;
                              return v.a.wrap(
                                function (n) {
                                  for (;;)
                                    switch ((n.prev = n.next)) {
                                      case 0:
                                        if (
                                          (i({ type: "FETCHING" }),
                                          !t.current[e])
                                        ) {
                                          n.next = 6;
                                          break;
                                        }
                                        (c = t.current[e]),
                                          i({ type: "FETCHED", payload: c }),
                                          (n.next = 24);
                                        break;
                                      case 6:
                                        return (
                                          (n.prev = 6), (n.next = 9), fetch(e)
                                        );
                                      case 9:
                                        return (
                                          (r = n.sent), (n.next = 12), r.json()
                                        );
                                      case 12:
                                        if (
                                          ((s = n.sent), (t.current[e] = s), !a)
                                        ) {
                                          n.next = 16;
                                          break;
                                        }
                                        return n.abrupt("return");
                                      case 16:
                                        i({ type: "FETCHED", payload: s }),
                                          (n.next = 24);
                                        break;
                                      case 19:
                                        if (
                                          ((n.prev = 19),
                                          (n.t0 = n.catch(6)),
                                          !a)
                                        ) {
                                          n.next = 23;
                                          break;
                                        }
                                        return n.abrupt("return");
                                      case 23:
                                        i({
                                          type: "FETCH_ERROR",
                                          payload: n.t0.message,
                                        });
                                      case 24:
                                      case "end":
                                        return n.stop();
                                    }
                                },
                                n,
                                null,
                                [[6, 19]]
                              );
                            })
                          );
                          return function () {
                            return n.apply(this, arguments);
                          };
                        })()(),
                        function () {
                          a = !0;
                        }
                      );
                  },
                  [e]
                ),
                s
              );
            })(
              (a || d) &&
                "/api/branches?q="
                  .concat(d, " ")
                  .concat(a, "&limit=")
                  .concat(10, "&offset=")
                  .concat(10 * (p - 1))
            ),
            B = P.status,
            T = P.data,
            A = P.error;
          return (
            Object(c.useEffect)(function () {
              var e = localStorage.getItem("favorites");
              e && H(JSON.parse(e));
            }, []),
            Object(n.jsxs)("div", {
              className: "App",
              children: [
                Object(n.jsx)("div", {
                  className: "navbar",
                  children: Object(n.jsx)("div", {
                    className: "header",
                    children: "Bank Finder",
                  }),
                }),
                Object(n.jsxs)("div", {
                  className: "inputcontainer",
                  children: [
                    Object(n.jsx)(C, {
                      value: d,
                      onChange: function (e, t) {
                        h(t.value), y(1);
                      },
                    }),
                    Object(n.jsx)(k, {
                      value: a,
                      onChange: function (e, t) {
                        r(e.target.value), y(1);
                      },
                      status: B,
                    }),
                    A &&
                      Object(n.jsxs)(j.a, {
                        className: "alertmessage",
                        attached: "bottom",
                        warning: !0,
                        children: [
                          Object(n.jsx)(u.a, { name: "exclamation" }),
                          "Error occured. Please try again",
                        ],
                      }),
                  ],
                }),
                Object(n.jsxs)("div", {
                  className: "tablecontainer",
                  children: [
                    Object(n.jsx)(m, {
                      showFavorites: N,
                      setShowFavorites: w,
                      data: T,
                    }),
                    Object(n.jsx)(b, {
                      status: B,
                      activePage: p,
                      setActivePage: y,
                      data: T,
                      PAGESIZE: 10,
                    }),
                    Object(n.jsx)(O, {
                      handleFavorites: function (e, t, a) {
                        if (t) {
                          var n = Object(l.a)({}, E);
                          (n[e] = a),
                            H(n),
                            localStorage.setItem(
                              "favorites",
                              JSON.stringify(n)
                            );
                        } else {
                          var c = Object(l.a)({}, E);
                          delete c[e],
                            H(c),
                            localStorage.setItem(
                              "favorites",
                              JSON.stringify(c)
                            );
                        }
                      },
                      list: N
                        ? Object.keys(E).map(function (e, t) {
                            return E[e];
                          })
                        : T.results,
                      status: B,
                      favorites: E,
                    }),
                  ],
                }),
                Object(n.jsx)("div", { className: "footer" }),
              ],
            })
          );
        },
        E = function (e) {
          e &&
            e instanceof Function &&
            a
              .e(3)
              .then(a.bind(null, 168))
              .then(function (t) {
                var a = t.getCLS,
                  n = t.getFID,
                  c = t.getFCP,
                  r = t.getLCP,
                  s = t.getTTFB;
                a(e), n(e), c(e), r(e), s(e);
              });
        };
      a(146);
      i.a.render(
        Object(n.jsx)(r.a.StrictMode, { children: Object(n.jsx)(F, {}) }),
        document.getElementById("root")
      ),
        E();
    },
  },
  [[147, 1, 2]],
]);
//# sourceMappingURL=main.1cc8a279.chunk.js.map
