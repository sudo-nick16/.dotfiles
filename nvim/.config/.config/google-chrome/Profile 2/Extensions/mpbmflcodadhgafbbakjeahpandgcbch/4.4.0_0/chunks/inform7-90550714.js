import { dS as requireInform7 } from '../pages/index.js';

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

var inform7Exports = requireInform7();

var inform7 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	'default': inform7Exports
}, [inform7Exports]);

export { inform7 as i };
