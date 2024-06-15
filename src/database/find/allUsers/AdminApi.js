
export default async function AdminApi(email) {
  const res = await fetch(`https://digital-marketing-agency-blush.vercel.app/api/users/${email}/`, {
    cache: 'no-store'
  });
  return res.json();
}
