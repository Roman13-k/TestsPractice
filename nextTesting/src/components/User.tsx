"use client";

import { useParams } from "next/navigation";

export default function User() {
  const params = useParams();
  const id = params?.id;

  if (!id) null;

  return (
    <div data-testid={`user-page-${id}`}>
      <p></p> User page for ID {id}
    </div>
  );
}
