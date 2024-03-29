/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_CAOiRXV7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Software Engineer","org":"General Assembly","tags":["JavaScript","Python","Mongodb","Express","React","NodeJs","PostgreSQL"],"date":"01/2024 - 04/2024"};
				const file = "/Users/trevormcelhaney/code/portfolio/astro-cv-Kate/src/pages/certificates/sei.md";
				const url = "/certificates/sei";
				function rawContent() {
					return "\n\n";
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

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
