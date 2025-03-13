(function(g){"object"==typeof exports&&"object"==typeof module?g(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],g):g(CodeMirror)})(function(g){function m(f){return new RegExp("^(("+f.join(")|(")+"))\\b")}function f(f){return f.scopes[f.scopes.length-1]}var w=m(["and","or","not","is"]),r="as assert break class continue def del elif else except finally for from global if import lambda pass raise return try while with yield in".split(" "),s="abs all any bin bool bytearray callable chr classmethod compile complex delattr dict dir divmod enumerate eval filter float format frozenset getattr globals hasattr hash help hex id input int isinstance issubclass iter len list locals map max memoryview min next object oct open ord pow property range repr reversed round set setattr slice sorted staticmethod str sum super tuple type vars zip __import__ NotImplemented Ellipsis __debug__".split(" "),
x="apply basestring buffer cmp coerce execfile file intern long raw_input reduce reload unichr unicode xrange False True None".split(" "),y=["exec","print"],z=["ascii","bytes","exec","print"],A=["nonlocal","False","True","None"];g.registerHelper("hintWords","python",r.concat(s));g.defineMode("python",function(q,e){function l(a,b){if(a.sol()&&"py"==f(b).type){var c=f(b).offset;if(a.eatSpace()){var d=a.indentation();d>c?n(a,b,"py"):d<c&&t(a,b)&&(b.errorToken=!0);return null}d=u(a,b);0<c&&t(a,b)&&(d+=
" error");return d}return u(a,b)}function u(a,b){if(a.eatSpace())return null;if("#"==a.peek())return a.skipToEnd(),"comment";if(a.match(/^[0-9\.]/,!1)){var c=!1;a.match(/^\d*\.\d+(e[\+\-]?\d+)?/i)&&(c=!0);a.match(/^\d+\.\d*/)&&(c=!0);a.match(/^\.\d+/)&&(c=!0);if(c)return a.eat(/J/i),"number";c=!1;a.match(/^0x[0-9a-f]+/i)&&(c=!0);a.match(/^0b[01]+/i)&&(c=!0);a.match(/^0o[0-7]+/i)&&(c=!0);a.match(/^[1-9]\d*(e[\+\-]?\d+)?/)&&(a.eat(/J/i),c=!0);a.match(/^0(?![\dx])/i)&&(c=!0);if(c)return a.eat(/L/i),
"number"}if(a.match(v))return b.tokenize=B(a.current()),b.tokenize(a,b);if(a.match(C)||a.match(D))return null;if(a.match(E)||a.match(F)||a.match(w))return"operator";if(a.match(G))return null;if(a.match(H))return"keyword";if(a.match(I))return"builtin";if(a.match(/^(self|cls)\b/))return"variable-2";if(a.match(p))return"def"==b.lastToken||"class"==b.lastToken?"def":"variable";a.next();return"error"}function B(a){function b(b,f){for(;!b.eol();)if(b.eatWhile(/[^'"\\]/),b.eat("\\")){if(b.next(),c&&b.eol())return"string"}else{if(b.match(a))return f.tokenize=
l,"string";b.eat(/['"]/)}if(c){if(e.singleLineStringErrors)return"error";f.tokenize=l}return"string"}for(;0<="rub".indexOf(a.charAt(0).toLowerCase());)a=a.substr(1);var c=1==a.length;b.isString=!0;return b}function n(a,b,c){var d=0,e=null;if("py"==c)for(;"py"!=f(b).type;)b.scopes.pop();d=f(b).offset+("py"==c?q.indentUnit:J);"py"==c||a.match(/^(\s|#.*)*$/,!1)||(e=a.column()+1);b.scopes.push({offset:d,type:c,align:e})}function t(a,b){for(var c=a.indentation();f(b).offset>c;){if("py"!=f(b).type)return!0;
b.scopes.pop()}return f(b).offset!=c}function K(a,b){var c=b.tokenize(a,b),d=a.current();if("."==d)return c=a.match(p,!1)?null:"error",null==c&&"meta"==b.lastStyle&&(c="meta"),c;if("@"==d)return a.match(p,!1)?"meta":"error";"variable"!=c&&"builtin"!=c||"meta"!=b.lastStyle||(c="meta");if("pass"==d||"return"==d)b.dedent+=1;"lambda"==d&&(b.lambda=!0);":"!=d||b.lambda||"py"!=f(b).type||n(a,b,"py");var e=1==d.length?"[({".indexOf(d):-1;-1!=e&&n(a,b,"])}".slice(e,e+1));e="])}".indexOf(d);if(-1!=e)if(f(b).type==
d)b.scopes.pop();else return"error";0<b.dedent&&a.eol()&&"py"==f(b).type&&(1<b.scopes.length&&b.scopes.pop(),b.dedent-=1);return c}var F=e.singleOperators||/^[\+\-\*/%&|\^~<>!]/,G=e.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.]/,E=e.doubleOperators||/^((==)|(!=)|(<=)|(>=)|(<>)|(<<)|(>>)|(\/\/)|(\*\*))/,D=e.doubleDelimiters||/^((\+=)|(\-=)|(\*=)|(%=)|(\/=)|(&=)|(\|=)|(\^=))/,C=e.tripleDelimiters||/^((\/\/=)|(>>=)|(<<=)|(\*\*=))/,p=e.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/,J=e.hangingIndent||q.indentUnit,
h=r,k=s;void 0!=e.extra_keywords&&(h=h.concat(e.extra_keywords));void 0!=e.extra_builtins&&(k=k.concat(e.extra_builtins));if(e.version&&3==parseInt(e.version,10))var h=h.concat(A),k=k.concat(z),v=/^(([rb]|(br))?('{3}|"{3}|['"]))/i;else h=h.concat(y),k=k.concat(x),v=/^(([rub]|(ur)|(br))?('{3}|"{3}|['"]))/i;var H=m(h),I=m(k);return{startState:function(a){return{tokenize:l,scopes:[{offset:a||0,type:"py",align:null}],lastStyle:null,lastToken:null,lambda:!1,dedent:0}},token:function(a,b){var c=b.errorToken;
c&&(b.errorToken=!1);var d=K(a,b);b.lastStyle=d;var e=a.current();e&&d&&(b.lastToken=e);a.eol()&&b.lambda&&(b.lambda=!1);return c?d+" error":d},indent:function(a,b){if(a.tokenize!=l)return a.tokenize.isString?g.Pass:0;var c=f(a),d=b&&b.charAt(0)==c.type;return null!=c.align?c.align-(d?1:0):d&&1<a.scopes.length?a.scopes[a.scopes.length-2].offset:c.offset},lineComment:"#",fold:"indent"}});g.defineMIME("text/x-python","python");g.defineMIME("text/x-cython",{name:"python",extra_keywords:"by cdef cimport cpdef ctypedef enum exceptextern gil include nogil property publicreadonly struct union DEF IF ELIF ELSE".split(" ")})});