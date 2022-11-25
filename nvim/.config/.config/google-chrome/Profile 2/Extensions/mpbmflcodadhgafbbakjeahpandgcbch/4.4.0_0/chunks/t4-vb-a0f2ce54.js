import { fT as requireT4Vb } from '../pages/index.js';

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

var t4VbExports = requireT4Vb();

var t4Vb = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	'default': t4VbExports
}, [t4VbExports]);

export { t4Vb as t };
