
export default async function userInfoInsert(data) {
  console.log(data)
  try {
    // C:\projects\digital-marketing-agency\src\app\api\merge-marketing\v1\users\insert-user\[email].js
    const res = await fetch(`http://localhost:3000/api/users/`, {
      method: "POST",
      headers:{  "content-type": "application/json",},
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Failed to insert user info");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};


  // const res = await fetch(`http://localhost:3000/api/merge-marketing/v1/users/${data?.email}`, {
  //   method: "PUT",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // });
  // const result = res.json();
  // if (res.ok) {
  //   // router.push('/')
  //   console.log("add insert success");
  // }
  // else if(e){
  //   alert('please try agin')
  // }

//   return NextResponse.json(result);
// }