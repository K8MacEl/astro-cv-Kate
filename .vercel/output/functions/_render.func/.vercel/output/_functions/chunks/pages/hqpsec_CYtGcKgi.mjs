/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_CAOiRXV7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>● Developed Web based application designed for an affordable housing consultant to improve the process of requesting Health Quality Standard (HSQ) Inspections for Housing Choice Voucher Properties\n● Developed software application with a strong focus on UI for the client’s usability\n● Used React, Express, Node.js, Semantic UI-React, and MongoDB and implemented Amazon Web Tokens for logged in access</p>";

				const frontmatter = {"title":"HQSpec","url":"https://github.com/K8MacEl/HQS.git","tags":["React","javaScript","Semantic UI","NodeJS","Express","MongoDB","AWS API","CSS"],"date":"2024-"};
				const file = "/Users/trevormcelhaney/code/portfolio/astro-cv-Kate/src/pages/projects/hqpsec.md";
				const url = "/projects/hqpsec";
				function rawContent() {
					return "\n● Developed Web based application designed for an affordable housing consultant to improve the process of requesting Health Quality Standard (HSQ) Inspections for Housing Choice Voucher Properties\n● Developed software application with a strong focus on UI for the client’s usability\n● Used React, Express, Node.js, Semantic UI-React, and MongoDB and implemented Amazon Web Tokens for logged in access \n\n\n";
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
