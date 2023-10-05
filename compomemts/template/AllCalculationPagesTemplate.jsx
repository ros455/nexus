import React from 'react';
import Link from 'next/link';
const AllCalculationPagesTemplate = ({allPages}) => {
    return (
        <div>
            {allPages.map((item) => (
                <div key={item._id} style={{lineHeight: '30px'}}>
                    <Link href={`/calculation-pages/${item._id}`} style={{color: 'black'}}>
                    <strong>{item.siteTypes.name}</strong> - Замовлення номер:"{item._id}"
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default AllCalculationPagesTemplate;