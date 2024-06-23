export default async function uesDeleteProject(id) {
  console.log(id)
  const res = await fetch(`http://localhost:3000/api/project/${id}`, {
    cache: 'no-store'
  });
  return res.json();
}
