import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { getPaymentHistory } from "../../api/payment";
import Title from "../../components/reUseComponents/Title";

const PaymentHistory = () => {
  const { user } = useAuth();
  const { data } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await getPaymentHistory(user?.email);
      return res[0];
    },
  });

  console.log(data);

  return (
    <div>
      <Title title={"Payment History"} />

      <div>
        <p>Email: {data?.email}</p>
        <p>Start Date: {data?.startDate}</p>
        <p>Price: ${data?.bookingAmount}</p>
      </div>
    </div>
  );
};

export default PaymentHistory;
