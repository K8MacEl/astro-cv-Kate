/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_CAOiRXV7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>● Planning and developing full stack software engineering projects for small business owners and nonprofits\n● Develops thoughtful and efficient web based applications for small budget clients with MERN stacks</p>";

				const frontmatter = {"title":"Software Engineer","date":"01/2024 - Present","url":"https://www.linkedin.com/in/kate-mcelhaney/","location":"Remote","org":"Freelance","tags":["Programming","Coding","Project Management","Full Stack","Web Development"]};
				const file = "/Users/trevormcelhaney/code/portfolio/astro-cv-Kate/src/pages/works/work1.md";
				const url = "/works/work1";
				function rawContent() {
					return "\n● Planning and developing full stack software engineering projects for small business owners and nonprofits\n● Develops thoughtful and efficient web based applications for small budget clients with MERN stacks\n";
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
