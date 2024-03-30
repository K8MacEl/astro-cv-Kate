/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_CAOiRXV7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>● Oversaw a new Salesforce mapping for the Nonprofit Starter Pack for the housing counseling department\n● Administered over $10M in federal grants, increasing company income by over 25%\n● Oversaw Web Development for current DNN site, an interactive CRM site, and the design and plan of new site launch\n● Developed out KPI tracking system for all departments through Monday.com\n● Conducted IT Security Analysis to identify risks with handling client’s Personal Identifiable Information (PII)\n● Developed out CRM tool for grant tracking with a focus on user interface\n● Increased organizational revenue by 25% through strategic partnerships and the launch of a new program\n● Responsible for extensive grant and budget management system with a complex array of Excel files</p>";

				const frontmatter = {"title":"Chief Program Officer","date":"10/2021 - 01/2024","url":"https://crhdc.org/","location":"Westminster, CO","org":"Community Resources and Housing Development Corporation","tags":["Project Managment","CRM Development","Web Development","Compliance","Grants Managmenet","Cross-Departmental Management"]};
				const file = "/Users/trevormcelhaney/code/portfolio/astro-cv-Kate/src/pages/works/work2.md";
				const url = "/works/work2";
				function rawContent() {
					return "\n● Oversaw a new Salesforce mapping for the Nonprofit Starter Pack for the housing counseling department \n● Administered over $10M in federal grants, increasing company income by over 25%\n● Oversaw Web Development for current DNN site, an interactive CRM site, and the design and plan of new site launch\n● Developed out KPI tracking system for all departments through Monday.com\n● Conducted IT Security Analysis to identify risks with handling client’s Personal Identifiable Information (PII)\n● Developed out CRM tool for grant tracking with a focus on user interface\n● Increased organizational revenue by 25% through strategic partnerships and the launch of a new program\n● Responsible for extensive grant and budget management system with a complex array of Excel files\n";
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
