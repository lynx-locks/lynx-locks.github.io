interface SocialInfo {
  name: 'github' | 'linkedin';
  href: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: Array<SocialInfo>;
}

interface Team {
  name: string;
  description: string;
  members: Array<TeamMember>;
}

const github = (username: string): SocialInfo => ({
  name: 'github',
  href: `https://github.com/${username}`,
});

const linkedin = (username: string): SocialInfo => ({
  name: 'linkedin',
  href: `https://www.linkedin.com/in/${username}`,
});

export default [
  {
    name: 'Members',
    description: `Our team is composed of members with diverse skill sets, allowing us to better tackle this multi-faceted problem.`,
    members: [
      {
        name: 'Cameron Kinsella',
        role: 'Embedded Software',
        image: '/images/team/cameron-kinsella.jpg',
        socials: [linkedin('cameronkinsella'), github('cameronkinsella')],
      },
      {
        name: 'Adrian Jendo',
        role: 'Frontend/Mobile Software',
        image: '/images/team/adrian-jendo.jpg',
        socials: [linkedin('adrian-jendo'), github('AdrianJendo')],
      },
      {
        name: 'Adam Barroso',
        role: 'Backend/Login Software',
        image: '/images/team/adam-barroso.jpg',
        socials: [linkedin('adam-barroso-804357172'), github('ABarroso647')],
      },
      {
        name: 'Allen Zhang',
        role: 'Hardware Design and Implementation',
        image: '/images/team/allen-zhang.png',
        socials: [linkedin('allen-zhang-5764b8189')],
      },
      {
        name: 'Jonah Belman',
        role: 'Hardware Design and Implementation',
        image: '/images/team/jonah-belman.png',
        socials: [linkedin('jonahbel/')],
      },
    ],
  },
] as Array<Team>;
