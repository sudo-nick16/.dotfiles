import { aY as requireN1ql$1 } from '../pages/index.js';

function _mergeNamespaces(n, m) {
	m.forEach(function (e) {
		e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
			if (k !== 'default' && !(k in n)) {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	});
	return Object.freeze(n);
}

var n1qlExports = requireN1ql$1();

var n1ql = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	'default': n1qlExports
}, [n1qlExports]);

export { n1ql as n };
