import DashboardBox from "@/components/DashboardBox";
import { useGetProductsQuery } from "@/state/api";

const Row2 = () => {
  const { data } = useGetProductsQuery();
  console.log("🚀 ~ Row2 ~ data:", data);

  return (
    <>
      <DashboardBox bgcolor="#fff" gridArea="d"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="e"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="f"></DashboardBox>
    </>
  );
};

export default Row2;
