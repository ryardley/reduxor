import p from '../package.json';

export default function config () {
  return {
    name: p.name,
    description: p.description,
    port: process.env.PORT || 3000
  };
}
