import { e5 as requireJson5 } from '../pages/index.js';

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

var json5Exports = requireJson5();

var json5 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	'default': json5Exports
}, [json5Exports]);

export { json5 as j };
