import React from "react";
import { getAllCalculatePages, getOneCalculatePage } from '@/requests/calculation';
import OneCalculationPageTemplate from "@/compomemts/template/OneCalculationPageTemplate";

export const metadata = {
    title: 'Calculator website',
    description: 'Calculator website page',
  }

const CalculationOne = async ({ params: { id, lang } }) => {
  const onePage = await getOneCalculatePage(id);
  return (
      <div>
        <OneCalculationPageTemplate onePage={onePage} lang={lang}/>
      </div>
  );
};

export default CalculationOne;

export async function generateStaticParams() {
  try {
    const calculations = await getAllCalculatePages();

    return calculations.map((calc) => ({ id: calc._id }));
  } catch(error) {
    console.error("Error in generateStaticParams:", error.message);
    return []; // Повертаємо порожній масив у разі помилки
  }
}
