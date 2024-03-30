/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_CAOiRXV7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Fullstack engineering program  with 480 hours of expert-led live instruction with emphasis on hands-on, project-based learning using the industry’s most in-demand technologies: HTML, CSS, Python and JavaScript, React, Express, NodeJS, Django, and PostgreSQL.</p>";

				const frontmatter = {"title":"Software Engineering Immersive","location":"Remote","institute":"General Assembly","date":2024};
				const file = "/Users/trevormcelhaney/code/portfolio/astro-cv-Kate/src/pages/studies/gaSei.md";
				const url = "/studies/gaSei";
				function rawContent() {
					return "\nFullstack engineering program  with 480 hours of expert-led live instruction with emphasis on hands-on, project-based learning using the industry's most in-demand technologies: HTML, CSS, Python and JavaScript, React, Express, NodeJS, Django, and PostgreSQL.";
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
