let users = [
    {
      name: "John",
      age: 30,
    },
    {
      name: "Jimmy",
      age: 20,
    },
    {
      name: "Amy",
      age: 43,
    },
  ];

    const print = (users) => {
 

        return users.filter((x, y) => y != 1)
    }
    console.log(print(users))