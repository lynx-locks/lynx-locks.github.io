interface Sponsor {
  name: string;
  logo: string;
  href: string;
}

export default [
  {
    name: 'Waterloo Faculty of Engineering',
    logo: '/images/sponsors/waterloo-engineering.png',
    href: 'https://uwaterloo.ca/engineering/',
  },
] as Array<Sponsor>;
