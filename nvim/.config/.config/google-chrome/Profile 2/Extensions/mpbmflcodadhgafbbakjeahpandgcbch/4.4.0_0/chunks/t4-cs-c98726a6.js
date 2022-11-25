import { fR as requireT4Cs } from '../pages/index.js';

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

var t4CsExports = requireT4Cs();

var t4Cs = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	'default': t4CsExports
}, [t4CsExports]);

export { t4Cs as t };
