/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_CAOiRXV7.mjs';
import 'kleur/colors';
import 'clsx';

const html$1 = "";

				const frontmatter$1 = {"title":"Github","icon":"carbon:logo-github","url":"https://github.com/K8MacEl"};
				const file$1 = "/Users/trevormcelhaney/code/portfolio/astro-cv-Kate/src/pages/contact/github.md";
				const url$1 = "/contact/github";
				function rawContent$1() {
					return "";
				}
				function compiledContent$1() {
					return html$1;
				}
				function getHeadings$1() {
					return [];
				}

				const Content$1 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1;
					content.file = file$1;
					content.url = url$1;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1)}`;
				});

const github$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1,
	compiledContent: compiledContent$1,
	default: Content$1,
	file: file$1,
	frontmatter: frontmatter$1,
	getHeadings: getHeadings$1,
	rawContent: rawContent$1,
	url: url$1
}, Symbol.toStringTag, { value: 'Module' }));

const html = "";

				const frontmatter = {"title":"Github","icon":"carbon:logo-github","url":"https://github.com/K8MacEl"};
				const file = "/Users/trevormcelhaney/code/portfolio/astro-cv-Kate/src/pages/more/github.md";
				const url = "/more/github";
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

const github = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { github as a, github$1 as g };
