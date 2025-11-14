import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import InvoiceTable from "@/components/Tables/invoice-table";


import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Quotes",
};

const QuotesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Quotes" />

      <div className="space-y-10">

        <InvoiceTable />

      </div>
    </>
  );
};

export default QuotesPage;
