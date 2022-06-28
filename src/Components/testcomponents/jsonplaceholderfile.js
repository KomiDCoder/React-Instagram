const data = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const jsonData = await res.json();
   const modiData = await jsonData.map((user) => user =  {...user, userName :`user${user.userId}`});
   return modiData;
};




