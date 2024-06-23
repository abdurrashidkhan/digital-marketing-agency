export default async function uesDeleteService(id) {
  console.log(id)
  const res = await fetch(`http://localhost:3000/api/service/${id}`, {
    cache: 'no-store'
  });
  return res.json();
}
