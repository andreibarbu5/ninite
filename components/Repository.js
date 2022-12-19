import React from "react";

const Repository = () => {
  return (
    <div className="bg-[#040d18]">
      <div className="bg-[#041d33] text-white font-semibold   flex flex-col justify-center items-center pb-8 md:pb-20 rounded-b-[2rem] md:rounded-b-[3rem]">
        <div className="sm:flex gap-4 text-[40px]  text-center">
          <p>Database</p>
          <p>Repository</p>
        </div>
        <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6  sm:gap-12  ">
          <div className="text-center  ">
            <p className="text-[45px]">2071</p>
            <p className="text-[20px] -mt-3">Softwares</p>
          </div>
          <div className="text-center  ">
            <p className="text-[45px]">400201</p>
            <p className="text-[20px] -mt-3">Downloads</p>
          </div>

          <div className="text-center  ">
            <p className="text-[45px]">1003261</p>
            <p className="text-[20px] -mt-3">Saved Vault</p>
          </div>

          <div className="text-center  ">
            <p className="text-[45px]">88</p>
            <p className="text-[20px] -mt-3">Users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repository;
