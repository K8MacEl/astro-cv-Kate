/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_CAOiRXV7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>● Improved Housing Rehabilitation program’s client-facing services through  the development of launching a secured and encrypted digital application process, demonstrating an ability to understand and meet user needs\n● Spearheaded the development, testing, and  implementation of a new CRM system, Neighborly, to facilitate remote work and enhance pipeline tracking and allowed for better user interface\n● Successfully reduced delinquent loan portfolio by 60%\n● Created a time audit analysis and client pipeline tool to minimize client turnover, and reduced the time from client intake to loan closing by 30%, which was a departmental KPI\n● Collaborated with marketing consultants to boost program visibility, developed marketing analytics using Google analytics</p>";

				const frontmatter = {"title":"Grants/Loans Project Manager","date":"06/2019 - 10/2021","url":"https://renewdenver.org/","location":"Denver, CO","org":"Denver Urban Renewal Authority (DURA)","tags":["Project Managment","CRM Development","Marketing","Compliance","Grants Management","Cross-Departmental Management"]};
				const file = "/Users/trevormcelhaney/code/portfolio/astro-cv-Kate/src/pages/works/work3.md";
				const url = "/works/work3";
				function rawContent() {
					return "\n● Improved Housing Rehabilitation program's client-facing services through  the development of launching a secured and encrypted digital application process, demonstrating an ability to understand and meet user needs\n● Spearheaded the development, testing, and  implementation of a new CRM system, Neighborly, to facilitate remote work and enhance pipeline tracking and allowed for better user interface\n● Successfully reduced delinquent loan portfolio by 60%\n● Created a time audit analysis and client pipeline tool to minimize client turnover, and reduced the time from client intake to loan closing by 30%, which was a departmental KPI\n● Collaborated with marketing consultants to boost program visibility, developed marketing analytics using Google analytics";
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
