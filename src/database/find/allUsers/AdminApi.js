
export default async function AdminApi(email) {
  const res = await fetch(`http://localhost:3000/api/users/${email}/`, {
    cache: 'no-store'
  });
  return res.json();
}
