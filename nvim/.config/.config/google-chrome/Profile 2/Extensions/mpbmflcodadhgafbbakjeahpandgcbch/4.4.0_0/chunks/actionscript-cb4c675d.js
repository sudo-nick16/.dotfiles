import { c as requireActionscript$1 } from '../pages/index.js';

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

var actionscriptExports = requireActionscript$1();

var actionscript = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	'default': actionscriptExports
}, [actionscriptExports]);

export { actionscript as a };
