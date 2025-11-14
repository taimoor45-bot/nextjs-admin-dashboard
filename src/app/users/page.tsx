import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import InvoiceTable from "@/components/Tables/invoice-table";
import UsersTable from "@/components/Tables/users-table";

import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Users",
};

const UsersPage = () => {
  return (
    <>
      <Breadcrumb pageName="Users" />

      <div className="space-y-10">
       

        <UsersTable />

      </div>
    </>
  );
};

export default UsersPage;
