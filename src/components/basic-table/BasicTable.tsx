import columns from "../columns";
import Table from "../Table";
import data from "../data";

const BasicTable = () => {
  return <Table columns={columns} rows={data} />;
};

export default BasicTable;
