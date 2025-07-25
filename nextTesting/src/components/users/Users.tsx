"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface User {
  id: number;
  name: string;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);

  const loadUsers = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(response.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const deleteUserById = (id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <div>
      {users.map((user) => (
        // <Link href={`/users/${user.id}`} key={user.id} data-testid='user-el'>
        //   {user.name}
        // </Link>
        <button data-testid='user-el' onClick={() => deleteUserById(user.id)}>
          {user.name}
        </button>
      ))}
    </div>
  );
}
