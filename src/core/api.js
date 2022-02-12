import Axios from "axios";
import { API_HOST } from "./Constants";

// axios를 기반으로 하는 hook이다. data, loading, error등을 지원하기에 get 메서드 호출 시에 유용하다.
import { makeUseAxios } from "axios-hooks";

// axios 인스턴스를 제공하기위한 인터페이스
export const axiosInstance = Axios.create({
  baseURL:API_HOST,
});

// axios 인스턴스를 래핑한 hook을 제공하기위한 인터페이스
export const useAxios = makeUseAxios({
  axios: axiosInstance
})
