export const CardUser = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="capitalize text-black text-base font-semibold">
          Good Afternoon,{" "}
        </div>
        <div className="capitalize text-black text-lg font-bold">Guntur </div>
        <div className="flex flex-row">
          <div className="rounded-full shadow-lg p-5 w-5/12 text-center mr-10">
            barcode
          </div>
          <div className="w-7/12 flex flex-col justify-center items-center gap-y-4">
            <div className="capitalize font-medium text-gray-600">saldo: </div>
            <div className="capitalize font-medium text-gray-600">point: </div>
          </div>
        </div>
      </div>
    </>
  );
};
