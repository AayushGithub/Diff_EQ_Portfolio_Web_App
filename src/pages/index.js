import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'BlackBoard does not support editing',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        The Portfolio tool on blackboard allows you to create artifacts for
        the portfolio, but it does not allow you to edit these! Hence, any mistake
        (even small ones like commas) cannot be rectified
      </>
    ),
  },
  {
    title: 'More Options for text/images',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        My personal portfolio web app allows me to add in additional features that
        are absent on BlackBoard, such as LaTeX editing, Markdown Styling, Robust Images etc.
      </>
    ),
  },
  {
    title: 'Practice my web dev skills',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        This website is created using React JS. I get to practice my web development skills.
        It is not an extra burden, as the website uses the same text as my BlackBoard Portfolio, 
        only with the aforementioned features.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {
  }} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Aayush Gandhi's Portfolio</h1>
          <p className="hero__subtitle">Differential Equations and Applications AS.110.302</p>
          <p className="hero__subtitle">This is the portfolio for the class AS.110.302, Differential Equations and Applications, taught in the Fall semester of 2020.</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1/')}>
              View Portfolio
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
