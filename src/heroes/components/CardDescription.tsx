import React from "react";

export const CardDescription = React.memo(({ dataHeroe }: { dataHeroe: any }) => {
    console.log(dataHeroe);
    return (
        <>
            {dataHeroe && <div className="card bg-dark w-100 h-100 rounded-md shadow-lg">
                <div className="card-body text-white d-flex flex-column align-items-center ">
                    <h1 style={{ color: "#616BBE" }}>{dataHeroe.superhero}</h1>
                    <div className="m-auto text-center">
                        <h3>{dataHeroe.alter_ego}</h3>
                        <h5 >{dataHeroe.first_appearance}</h5>
                        <h5 >{dataHeroe.publisher}</h5>
                    </div>

                </div>
            </div>}

        </>
    )
}) 