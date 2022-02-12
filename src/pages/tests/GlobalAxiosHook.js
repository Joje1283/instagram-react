import React from "react";
import {useAppContext} from "../../core/store";
import {useAxios} from "../../core/api"

export default function TestGlobalAxiosHooks() {
  const { store: { jwtToken } } = useAppContext();
  const headers = {Authorization: `JWT ${jwtToken}`}  // config
  const [{data: originPostList, loading, error}, refetch] = useAxios({
    url: "/api/posts/",
    headers
  });
  return (
    <>
      {loading}
      {error}
      {originPostList}
    </>
  );
}