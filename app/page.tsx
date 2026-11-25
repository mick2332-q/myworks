const projects = [
  {
    category: "Machine learning",
    number: "01",
    title: "Clasificación de Pitches de Startups",
    description:
      "Modelos de machine learning que clasifican pitches a partir de texto y atributos. Incluye análisis de datos, vectorización, modelos clásicos y una red neuronal profunda.",
    technologies: ["Python", "TensorFlow / Keras", "NLP"],
    href: "https://github.com/mick2332-q/Clasificaci-n-de-Pitches-de-Startups",
    tone: "lime",
  },
  {
    category: "Procesamiento de lenguaje",
    number: "02",
    title: "Juego semántico de palabras",
    description:
      "Un juego web que compara significados mediante vectores y similitud semántica para dar pistas sobre qué tan cerca está cada intento.",
    technologies: ["Python", "FastAPI", "PyTorch"],
    href: "https://github.com/mick2332-q/demo_nlp",
    tone: "violet",
  },
  {
    category: "Automatización",
    number: "03",
    title: "Bot de Discord",
    description:
      "Bot con comandos interactivos, respuestas a mensajes y una función para consultar un modelo de inteligencia artificial desde Discord.",
    technologies: ["Python", "Discord", "IA generativa"],
    href: "https://github.com/mick2332-q/botdiscord",
    tone: "blue",
  },
  {
    category: "Desarrollo web",
    number: "04",
    title: "Sentir U · Interfaz de chat",
    description:
      "Interfaz de conversación con gestión de sesiones anónimas o identificadas e integración con un flujo conversacional externo.",
    technologies: ["HTML", "CSS", "JavaScript"],
    href: "https://github.com/mick2332-q/Chatbox-UIS",
    tone: "orange",
  },
  {
    category: "Aplicación web",
    number: "05",
    title: "MiBiblioteca",
    description:
      "Aplicación web para gestionar una biblioteca, con modelos de datos, formularios y vistas para las operaciones principales.",
    technologies: ["Python", "Django", "SQLite"],
    href: "https://github.com/mick2332-q/MiBiblioteca",
    tone: "pink",
  },
] as const;

const skills = [
  "Python",
  "HTML · CSS · JavaScript",
  "Django · FastAPI",
  "Machine learning",
  "NLP",
  "PyTorch",
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        d="M3.5 12.5 12 4m0 0H5m7 0v7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header shell">
        <a aria-label="Miguel Ayala, inicio" className="brand" href="#inicio">
          <span aria-hidden="true" className="brand-mark">
            m.
          </span>
          <span>Miguel Ayala</span>
        </a>
        <nav aria-label="Navegación principal" className="main-nav">
          <a href="#proyectos">Proyectos</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a
            href="https://github.com/mick2332-q"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub <ArrowIcon />
          </a>
        </nav>
      </header>

      <main>
        <section aria-labelledby="hero-title" className="hero shell" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">
              <span aria-hidden="true" className="status-dot" />
              Portafolio · Desarrollo e inteligencia artificial
            </p>
            <h1 id="hero-title">
              Construyo ideas
              <br />
              con <span>código.</span>
            </h1>
            <p className="hero-description">
              Soy Miguel Angel Ayala Fuentes. Me gusta crear proyectos que
              conectan tecnología e ideas útiles: desde aplicaciones web hasta
              modelos de inteligencia artificial.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#proyectos">
                Explorar proyectos <span aria-hidden="true">↓</span>
              </a>
              <a
                className="button button-quiet"
                href="https://github.com/mick2332-q"
                rel="noopener noreferrer"
                target="_blank"
              >
                Mi GitHub <ArrowIcon />
              </a>
            </div>
            <div aria-label="Tecnologías de este portafolio" className="stack">
              <span>Construido con</span>
              <span className="stack-divider" />
              <strong>Next.js 16</strong>
              <strong>React 19</strong>
              <strong>TypeScript</strong>
            </div>
          </div>

          <div aria-label="Cinco proyectos destacados" className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="code-card">
              <div className="code-top">
                <div aria-hidden="true" className="window-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span>miguel.ts</span>
                <span className="code-menu">•••</span>
              </div>
              <div aria-hidden="true" className="code-content">
                <p>
                  <span className="code-muted">01</span>{" "}
                  <span className="code-purple">const</span>{" "}
                  <span className="code-white">developer</span> = {"{"}
                </p>
                <p>
                  <span className="code-muted">02</span>{" "}
                  <span className="code-blue">name</span>:{" "}
                  <span className="code-green">&quot;Miguel Ayala&quot;</span>,
                </p>
                <p>
                  <span className="code-muted">03</span>{" "}
                  <span className="code-blue">focus</span>: [
                </p>
                <p>
                  <span className="code-muted">04</span>{" "}
                  <span className="code-green">&quot;web&quot;</span>,
                </p>
                <p>
                  <span className="code-muted">05</span>{" "}
                  <span className="code-green">&quot;IA&quot;</span>,
                </p>
                <p>
                  <span className="code-muted">06</span> ],
                </p>
                <p>
                  <span className="code-muted">07</span>{" "}
                  <span className="code-blue">learning</span>:{" "}
                  <span className="code-orange">true</span>,
                </p>
                <p>
                  <span className="code-muted">08</span> {"}"};
                </p>
              </div>
              <div className="code-bottom">
                <span>✳️</span> Explorando nuevas ideas
              </div>
            </div>
            <div className="project-count">
              <span className="count-number">05</span>
              <span>proyectos<br />destacados</span>
            </div>
            <div className="floating-chip">
              <span aria-hidden="true">✳</span> Siempre aprendiendo
            </div>
          </div>
        </section>

        <section
          aria-labelledby="projects-title"
          className="projects-section shell"
          id="proyectos"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">Trabajo seleccionado</p>
              <h2 id="projects-title">Proyectos <span>destacados</span></h2>
            </div>
            <p className="section-description">
              Cada proyecto es una oportunidad para probar herramientas,
              resolver problemas y aprender algo nuevo.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={`project-card project-card--${project.tone}`}
                key={project.number}
              >
                <div className="project-card-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                  <a
                    aria-label={`Ver ${project.title} en GitHub`}
                    className="project-arrow"
                    href={project.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <ArrowIcon />
                  </a>
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div aria-label="Tecnologías" className="tag-list">
                  {project.technologies.map((technology) => (
                    <span className="tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
            <a
              className="more-card"
              href="https://github.com/mick2332-q?tab=repositories"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="more-icon">↗</span>
              <span className="more-title">¿Quieres ver más?</span>
              <span className="more-copy">Explora todos mis repositorios</span>
            </a>
          </div>
        </section>

        <section
          aria-labelledby="about-title"
          className="about-section shell"
          id="sobre-mi"
        >
          <div className="about-card">
            <div className="about-heading">
              <p className="eyebrow">Un poco sobre mí</p>
              <h2 id="about-title">
                Aprender
                <br />
                <span>haciendo.</span>
              </h2>
            </div>
            <div className="about-content">
              <p>
                Me interesa crear proyectos que conecten software e ideas
                útiles. He trabajado con aplicaciones web, bots, procesamiento
                de lenguaje natural y modelos de aprendizaje automático. En
                cada proyecto pruebo herramientas nuevas y sigo aprendiendo.
              </p>
              <div aria-label="Tecnologías y áreas" className="skill-list">
                {skills.map((skill) => (
                  <span className="skill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer shell">
        <span>© {new Date().getFullYear()} Miguel Angel Ayala Fuentes</span>
        <span className="footer-note">Diseñado y construido con Next.js</span>
        <a
          href="https://github.com/mick2332-q"
          rel="noopener noreferrer"
          target="_blank"
        >
          Más proyectos en GitHub <ArrowIcon />
        </a>
      </footer>
    </>
  );
}
