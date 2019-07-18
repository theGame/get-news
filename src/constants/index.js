export const SIZES = Object.freeze({
	MINI:"mini",
	TINY:"tiny",
	SMALL:"small",
	MEDIUM:"medium",
	LARGE:"large",
	BIG:"big",
	HUGE:"huge",
	MASSIVE:"massive" 
});

export const COLORS = Object.freeze({
    RED: "red",
    BLUE: "blue",
	GREEN: "green",
	YELLOW: "yellow",
	TEAL: "teal",

	CUSTOM_TEAL: "#4ca5a157",
});

export const ROUTES = Object.freeze({
	HOME: "/",
	LIST: "/list",
	LOGIN: "/login",
});

export const API = Object.freeze({
	TEST_URL: "/api/test/url",
	ADD_URL: "/api/add/url",
	GET_LIST: "/api/urls",
});

export const PROTOCOL_TYPE = Object.freeze({
	HTTP: "HTTP",
	HTTPS: "HTTPS",
});

export const REG_EXPS = {
	URL: "^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$",
};