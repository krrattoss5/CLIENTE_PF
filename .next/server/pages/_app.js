(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1430:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6004);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CarCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_features_carStackSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2886);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);




function CarCard(props) {
    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: props.name,
        image: props.image,
        price: props.price,
        description: props.description,
        quantity: 1,
        currency: "ARS"
    });
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const handlerDelete = ()=>{
        dispatch((0,_redux_features_carStackSlice__WEBPACK_IMPORTED_MODULE_2__/* .removeCarProduct */ .Od)(props.id));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch((0,_redux_features_carStackSlice__WEBPACK_IMPORTED_MODULE_2__/* .updateQuantity */ .$R)(count));
    }, [
        count
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: " w-[370px] shadow-[1px_1px_20px_rgba(0,0,0,0.2)] rounded-md relative p-[10px] justify-start items-center mb-[5px] flex",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>handlerDelete(),
                className: " border-sky-500 absolute right-1 top-1 w-[25px] bg-[#ff0000] text-white text-bold rounded-[1px_5px]",
                children: "x"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: "w-[70px] rounded-full mr-[20px]",
                src: props.image,
                alt: props.name
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-bold w-full font-bold",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: props.name
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: props.price
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex justify-between w-[25%]",
                                children: [
                                    count.quantity > 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "w-[20px] shadow-[1px_1px_5px_rgba(0,0,0,0.5)]",
                                        onClick: ()=>{
                                            setCount({
                                                ...count,
                                                quantity: count.quantity - 1
                                            });
                                        },
                                        children: "-"
                                    }) : null,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: count.quantity
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "w-[20px] shadow-[1px_1px_5px_rgba(0,0,0,0.5)]",
                                        onClick: ()=>{
                                            setCount({
                                                ...count,
                                                quantity: count.quantity + 1
                                            });
                                        },
                                        children: "+"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: count.quantity * props.price
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 2447:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Car)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _carCard_CarCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2723);
/* harmony import */ var _mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7248);
/* harmony import */ var _mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_features_carStackSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2886);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9648);
/* harmony import */ var _redux_features_orderItemsSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5349);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_7__]);
axios__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function Car() {
    const [orderItems, setOrderItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        userId: "",
        items: [],
        total: 0
    });
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)();
    const items = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((s)=>s.stack.value);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [aux, setAux] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const stock = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((s)=>s.stack.value);
    const totalS = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((s)=>s.stack.total);
    const inSession = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((s)=>s.user.value);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const item = localStorage.getItem("car");
        const stocks = JSON.parse(item);
        if (stocks) {
            dispatch((0,_redux_features_carStackSlice__WEBPACK_IMPORTED_MODULE_4__/* .addStorageProducts */ .YW)(stocks));
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        localStorage.setItem("car", JSON.stringify(stock));
        dispatch((0,_redux_features_carStackSlice__WEBPACK_IMPORTED_MODULE_4__/* .updateTotal */ .jR)(0));
        let aux = 0;
        stock.forEach((p)=>{
            aux = aux + p.price * p.quantity;
        });
        dispatch((0,_redux_features_carStackSlice__WEBPACK_IMPORTED_MODULE_4__/* .updateTotal */ .jR)(aux));
    }, [
        stock
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let aux2 = [];
        items.forEach((p)=>{
            aux2.push(p);
            setAux(aux + p.price * p.quantity);
        });
        setOrderItems({
            ...orderItems,
            items: items,
            total: totalS,
            userId: inSession.id
        });
    }, [
        items
    ]);
    const handlerShow = ()=>{
        if (!show) setShow(true);
        if (show) setShow(false);
    };
    const checkout = async ()=>{
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_7__["default"].post("https://api-mundo-gym.onrender.com/app/create-order", {
                items,
                inSession
            });
            const data = await response.data;
            console.log(data);
            window.location.href = data;
            if (response.ok) {
                window.location.href = data;
            } else {
                console.log(data);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    const handlerCheckout = async ()=>{
        setOrderItems({
            userId: inSession && inSession.id,
            items: items && items,
            total: totalS && totalS
        });
        if (session && session.user.name || inSession?.name) {
            localStorage.setItem("orderItems", JSON.stringify(orderItems));
            const item = localStorage.getItem("orderItems");
            const user = JSON.parse(item);
            if (user) {
                dispatch((0,_redux_features_orderItemsSlice__WEBPACK_IMPORTED_MODULE_8__/* .getOrderItem */ .Zv)(user));
            }
            dispatch((0,_redux_features_carStackSlice__WEBPACK_IMPORTED_MODULE_4__/* .cleanStack */ .vH)());
            checkout();
            console.log("no llega aqui");
        } else {
            alert("Debes loguearte Primero!!");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: inSession.typeUser !== "admin" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "fixed right-[20px] bottom-[50px] p-[20px]",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    onClick: ()=>handlerShow(),
                    className: "relative shadow-[1px_1px_10px_rgba(0,0,0)] font-bold text-blue-950 bg-white p-[10px] rounded-full hover:text-base hover:p-[11px] hover:shadow-[1px_1px_15px_rgba(0,0,0)]",
                    children: [
                        !stock.length ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-white text-base p-[12px] w-[3px] h-[2px] bg-[#ff0000] flex justify-center items-center rounded-full absolute top-[-0.5rem] right-[-0.5rem] shadow-[1px_1px_15px_rgba(255,0,0)]",
                            children: stock.length < 10 ? stock.length : "9+"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_3___default()), {})
                    ]
                }),
                !show || !stock.length ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-white text-base p-[10px] w-[50px] h-[50px] bg-[#ffffff] flex justify-center items-center absolute bottom-[4.3rem] right-[1.9rem] rounded-[0_10px] rotate-45"
                }),
                !show || !stock.length ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "overflow-y-scroll overflow-hiden px-[5px] pt-[10px] h-[400px] w-[400px] bg-[#ffffff] flex-col justify-start items-center rounded-[15px_0_15px_15px] absolute top-[-25rem] right-[-1rem]  w-[20   px] fixed right-[20px] bottom-[50px]",
                    children: [
                        stock.map((p)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_carCard_CarCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                name: p.name,
                                price: p.price,
                                image: p.image,
                                id: p.id,
                                description: p.description
                            }, p.id)),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            className: "w-[95%] mt-[10px]"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: `Total: ${totalS}`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>handlerCheckout(),
                            className: "bg-[rgba(000,225,00)] mt-[10px] text-[#fff] font-bold p-[5px] w-[95%] rounded-[15px] shadow-[4px_4px_5px_rgba(000,225,000,0.5)]",
                            children: "COMPRAR AHORA!"
                        })
                    ]
                })
            ]
        }) : null
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6004:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8278);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1598);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9310);
/* harmony import */ var _components_car_Car__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2447);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_car_Car__WEBPACK_IMPORTED_MODULE_6__]);
_components_car_Car__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function MyApp({ Component , pageProps  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const inLogin = router.pathname.slice(0, 5);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {
        session: pageProps.session,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_redux_providers__WEBPACK_IMPORTED_MODULE_5__/* .Providers */ .C, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.CssBaseline, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    }),
                    inLogin !== "/logi" && inLogin !== "/succ" && inLogin !== "/team" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_car_Car__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}) : null
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ni": () => (/* binding */ removeFavorite),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "a3": () => (/* binding */ addFavorite)
/* harmony export */ });
/* unused harmony export favoriteSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const favoriteSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "favorites",
    initialState: {
        value: []
    },
    reducers: {
        addFavorite: (state, action)=>{
            return {
                ...state,
                value: [
                    ...state.value,
                    action.payload
                ]
            };
        },
        removeFavorite: (state, action)=>{
            const removed = state.value.filter((f)=>f.id !== action.payload);
            return {
                ...state,
                value: [
                    ...removed
                ]
            };
        }
    }
});
const { addFavorite , removeFavorite  } = favoriteSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (favoriteSlice.reducer);


/***/ }),

/***/ 5349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Zv": () => (/* binding */ getOrderItem),
/* harmony export */   "s1": () => (/* binding */ getHistory)
/* harmony export */ });
/* unused harmony exports orderItemsSlice, postOrderItems */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const orderItemsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "orderItems",
    initialState: {
        value: {},
        history: []
    },
    reducers: {
        getOrderItem: (state, action)=>{
            state.value = action.payload;
        },
        postOrderItems: (state, action)=>{
            return {
                userId: "",
                items: [],
                total: 0
            };
        },
        getHistory: (state, action)=>{
            state.history = action.payload;
        }
    }
});
const { getOrderItem , postOrderItems , getHistory  } = orderItemsSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (orderItemsSlice.reducer);


/***/ }),

/***/ 1583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "lp": () => (/* binding */ next),
/* harmony export */   "op": () => (/* binding */ back),
/* harmony export */   "to": () => (/* binding */ forceCurrent)
/* harmony export */ });
/* unused harmony export paginateSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const paginateSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "numPaginate",
    initialState: {
        value: 1
    },
    reducers: {
        next: (state, action)=>{
            state.value = state.value + 1;
        },
        back: (state, action)=>{
            state.value = state.value - 1;
        },
        forceCurrent: (state, action)=>{
            state.value = action.payload;
        }
    }
});
const { next , back , forceCurrent  } = paginateSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (paginateSlice.reducer);


/***/ }),

/***/ 6849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports saveImageFile, addImageFile */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const saveImageFile = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "imageFile",
    initialState: {
        value: ""
    },
    reducers: {
        addImageFile: (state, action)=>{
            returnm = {
                ...state,
                value: action.payload.secretURL
            };
        }
    }
});
const { addImageFile  } = saveImageFile.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveImageFile.reducer);


/***/ }),

/***/ 9310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* binding */ Providers)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./redux/features/favoriteSlice.js
var favoriteSlice = __webpack_require__(7225);
// EXTERNAL MODULE: ./redux/features/productsSlice.js
var productsSlice = __webpack_require__(8906);
// EXTERNAL MODULE: ./redux/features/productsByCategorySlice.js
var productsByCategorySlice = __webpack_require__(6714);
// EXTERNAL MODULE: ./redux/features/categorySlice.js
var categorySlice = __webpack_require__(5342);
// EXTERNAL MODULE: ./redux/features/subCategorySlice.js
var subCategorySlice = __webpack_require__(5427);
// EXTERNAL MODULE: ./redux/features/userSlice.js
var userSlice = __webpack_require__(7771);
// EXTERNAL MODULE: ./redux/features/carStackSlice.js
var carStackSlice = __webpack_require__(2886);
// EXTERNAL MODULE: ./redux/features/paginateSlice.js
var paginateSlice = __webpack_require__(1583);
// EXTERNAL MODULE: ./redux/features/saveImageSlice.js
var saveImageSlice = __webpack_require__(6849);
// EXTERNAL MODULE: ./redux/features/orderItemsSlice.js
var orderItemsSlice = __webpack_require__(5349);
;// CONCATENATED MODULE: ./redux/store.js











const store = (0,toolkit_.configureStore)({
    reducer: {
        favorites: favoriteSlice/* default */.ZP,
        products: productsSlice/* default */.ZP,
        categories: categorySlice/* default */.ZP,
        subCategories: subCategorySlice/* default */.ZP,
        user: userSlice/* default */.ZP,
        stack: carStackSlice/* default */.ZP,
        productsByCategory: productsByCategorySlice/* default */.ZP,
        numPaginate: paginateSlice/* default */.ZP,
        imageFile: saveImageSlice/* default */.ZP,
        orderItems: orderItemsSlice/* default */.ZP
    }
});

;// CONCATENATED MODULE: ./redux/providers.js



function Providers({ children  }) {
    return /*#__PURE__*/ jsx_runtime.jsx(external_react_redux_.Provider, {
        store: store,
        children: children
    });
}


/***/ }),

/***/ 1598:
/***/ (() => {



/***/ }),

/***/ 8278:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 7248:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ShoppingCart");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,429,115,886], () => (__webpack_exec__(1430)));
module.exports = __webpack_exports__;

})();