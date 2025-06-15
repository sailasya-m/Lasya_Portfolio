import React from 'react';

/* ---------- GROUPED STACK DATA (CDN SVGs) ---------- */
const stackGroups = [
  {
    title: 'Languages',
    items: [
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        name: 'HTML5 & CSS / SASS',
        label: 'Markup & Styling',
      },
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        name: 'TypeScript',
        label: 'Type Safety',
      },
    ],
  },
  {
    title: 'Front-end Frameworks',
    items: [
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        name: 'React',
        label: 'Component Library',
      },
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        name: 'Vue.js',
        label: 'Progressive Framework',
      },
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        name: 'Angular',
        label: 'Full-featured Framework',
      },
    ],
  },
  {
    title: 'Back-end & Runtime',
    items: [
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        name: 'Node.js / Express',
        label: 'Runtime & APIs',
      },
    ],
  },
  {
    title: 'Tooling & Design',
    items: [
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
        name: 'Webpack',
        label: 'Module Bundler',
      },
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        name: 'Git & GitHub',
        label: 'Version Control',
      },
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        name: 'Figma',
        label: 'Design Tool',
      },
    ],
  },
];

/* ---------- COMPONENT ---------- */
export default function StackSection() {
  return (
    <section id="stack" className="stack-section section alt">
      <div className="container">
        <h2 className="section-title text-center">My&nbsp;Stack</h2>
        <p className="stack-tagline text-center">
          Tools I use to turn ideas into reliable, production-ready web apps.
        </p>

        {stackGroups.map((group) => (
          <div key={group.title} className="stack-group">
            <h3 className="stack-group-title">{group.title}</h3>

            <ul className="stack-grid">
              {group.items.map((item) => (
                <li key={item.name} className="stack-card">
                  <span className="stack-icon">
                    <img
                      src={item.icon}
                      alt=""
                      width="32"
                      height="32"
                      loading="lazy"
                    />
                  </span>

                  <div className="stack-text">
                    <strong>{item.name}</strong>
                    <small>{item.label}</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
} 