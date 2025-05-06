import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    //onboarding platform
    title: 'Hello World!',
    Svg: require('@site/static/img/tricycle1.svg').default,
    description: (
      <>
        Learn about HPE NonStop - find our "Getting Started" tutorials and handy commands on your very first HPE NonStop system.
      </>
    ),
  },
  {
    //developer community driven
    title: 'Deep Dives',
    Svg: require('@site/static/img/bike1.svg').default,
    description: (
      <>
       Explore the technical architectures and sub-systems from the OS that has protected mission-critical processes for the past 50 years.
      </>
    ),
  },
  {
    //inspire product roadmaps
    title: 'Integrations',
    Svg: require('@site/static/img/tandem0.svg').default,
    description: (
      <>
        Need help integrating cross-product tools? Explore our tutorials and sample code in our GitHub repo.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
