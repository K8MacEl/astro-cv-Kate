/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_CAOiRXV7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>● Efficiently managed the transition to new leadership, demonstrating adaptability and leadership skills\n● Developed a risk mitigation plan and fostered strong stakeholder relationships, emphasizing skills in identifying and managing potential project risks and maintaining effective communication with diverse groups\n● Set up and managed Access Database to manage all Fair Housing Testers(akin to Secret Shoppers)  used for  investigations\n● Developed web-based application to analyze Homeowners Mortgage Disclosure Act (HMDA) data sets to track and monitor lenders for potential redlining practices\n● Developed a project management system to strengthen enforcement efforts, showcasing proficiency in system design and implementation.</p>";

				const frontmatter = {"title":"Deputy Executive Director","date":"04/2014 - 06/2019","url":"https://www.dmfhc.org/","location":"Denver, CO","org":"Denver Metro Fair Housing Center (DMFHC)","tags":["Project Managment","Compliance","Grants Management","Cross-Departmental Management"]};
				const file = "/Users/trevormcelhaney/code/portfolio/astro-cv-Kate/src/pages/works/work4.md";
				const url = "/works/work4";
				function rawContent() {
					return "\n● Efficiently managed the transition to new leadership, demonstrating adaptability and leadership skills\n● Developed a risk mitigation plan and fostered strong stakeholder relationships, emphasizing skills in identifying and managing potential project risks and maintaining effective communication with diverse groups\n● Set up and managed Access Database to manage all Fair Housing Testers(akin to Secret Shoppers)  used for  investigations \n● Developed web-based application to analyze Homeowners Mortgage Disclosure Act (HMDA) data sets to track and monitor lenders for potential redlining practices \n● Developed a project management system to strengthen enforcement efforts, showcasing proficiency in system design and implementation.";
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
