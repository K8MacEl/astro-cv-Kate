/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_CAOiRXV7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>● Web-based application designed to allow collaboration on programming and coding projects with implementing a Mongo Atlas Database.  Users may log in using their Google Account and then create a profile and projects to collaborate with others that either need help with creating an app or program or offer help to others.\n● Used Express, Node.js, and MongoDB and implemented Google Oauth for logged in access to create a web application</p>";

				const frontmatter = {"title":"TechMatch","url":"https://github.com/K8MacEl/TechMatch","tags":["JavaScript","NodeJS","Express","MongoDB","CSS"],"date":"2024-"};
				const file = "/Users/trevormcelhaney/code/portfolio/astro-cv-Kate/src/pages/projects/techmatch.md";
				const url = "/projects/techmatch";
				function rawContent() {
					return "\n ● Web-based application designed to allow collaboration on programming and coding projects with implementing a Mongo Atlas Database.  Users may log in using their Google Account and then create a profile and projects to collaborate with others that either need help with creating an app or program or offer help to others. \n● Used Express, Node.js, and MongoDB and implemented Google Oauth for logged in access to create a web application\n\n\n";
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
