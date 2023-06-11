import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useStudent = () => {
  const { currentuser } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: isStudent, isLoading: isStudentLoading } = useQuery({
    queryKey: ["isStudent", currentuser?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/student/${currentuser?.email}`);
      return res.data.student;
    },
  });
  return [isStudent, isStudentLoading];
};
export default useStudent;
