import React from "react";
import { getOnePortfolio, getAllPortfolio } from "@/requests/portfolio";
import OnePortfolioTemplate from "@/compomemts/template/OnePortfolioTemplate";

export const metadata = {
  title: 'Portfolios',
  description: 'Portfolio developers',
}

const PortfolioOne = async ({ params: { id } }) => {
  const onePortfolio = await getOnePortfolio(id);
  metadata.title = onePortfolio.title;
  return (
      <div>
        <OnePortfolioTemplate portfolio={onePortfolio} />
      </div>
  );
};

export default PortfolioOne;

export async function generateStaticParams() {
  const portfolios = await getAllPortfolio();

  return portfolios.map((portfolio) => ({ id: portfolio._id }));
}
