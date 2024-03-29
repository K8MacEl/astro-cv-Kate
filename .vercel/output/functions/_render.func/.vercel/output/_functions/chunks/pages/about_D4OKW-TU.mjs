/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_CAOiRXV7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>I spent over a decade managing projects in the nonprofit and government sectors, constantly running into the same issue: processes were a disoragnized and overly complicated without the right tech tools. So, I decided to do something about it. I first started by finding the best CRMs out there then I quickly realized building my own solutions was the way to go. That’s when I fell for programming.</p>\n<p>I jumped into a software engineering course to meld my project management know-how with solid coding skills. Now, I’m all about using JavaScript and Python to make web apps that tackle business challenges and make life easier for my clients. From setting up routes in Express to whipping up databases, I love making tech that actually helps.</p>";

				const frontmatter = {"title":"about","name":"Kate McElhaney","designation":"Full Stack Engineer","location":"Aurora, Colorado","pronouns":"she/her"};
				const file = "/Users/trevormcelhaney/code/portfolio/astro-cv-Kate/src/pages/about/about.md";
				const url = "/about/about";
				function rawContent() {
					return "\nI spent over a decade managing projects in the nonprofit and government sectors, constantly running into the same issue: processes were a disoragnized and overly complicated without the right tech tools. So, I decided to do something about it. I first started by finding the best CRMs out there then I quickly realized building my own solutions was the way to go. That’s when I fell for programming.\n\nI jumped into a software engineering course to meld my project management know-how with solid coding skills. Now, I’m all about using JavaScript and Python to make web apps that tackle business challenges and make life easier for my clients. From setting up routes in Express to whipping up databases, I love making tech that actually helps.\n";
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
