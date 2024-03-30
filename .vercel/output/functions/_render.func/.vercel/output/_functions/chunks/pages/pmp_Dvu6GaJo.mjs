/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_CAOiRXV7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Project Management Professional (PMP)","org":"Project Management Institute","tags":["Agile","Waterfall","Scrum"],"date":"03/2023 - 03/2026 (expires)"};
				const file = "/Users/trevormcelhaney/code/portfolio/astro-cv-Kate/src/pages/certificates/pmp.md";
				const url = "/certificates/pmp";
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
