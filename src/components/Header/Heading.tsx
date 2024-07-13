function Heading(): JSX.Element {
  return (
    <div className=" h-[100%] bg-bg flex w-[100%] py-[2rem]">
      {/* logo */}
      <div className="w-[30%] flex">
        <img
          src="/assets/images/logo.png"
          alt="logo"
          className="w-[30rem] h-[20rem]"
        />
      </div>
      {/* main heading  */}
      <div className="w-[60%] flex flex-col gap-y-4">
        {/* menu bar  */}
        <div className="flex gap-x-10">
          <span className="font-opensans font-bold cursor-pointer">Docs</span>
          <span className="font-opensans font-bold cursor-pointer">Playground</span>
        </div>
        {/* main text  */}
        <div className="flex w-[100%] gap-x-5">
          <div className="w-[40%] flex flex-col gap-y-3">
            <span className="leading-relaxed tracking-wide">
              NepaliLang (.NEP) is a toy programming language developed in
              TypeScript. This is the first version, and it will be updated
              regularly to incorporate new features and improvements.
            </span>
            <div className="my-2">
              <span className="py-2 px-2 rounded-md bg-gray-600 text-white font-opensans cursor-text">
                ` npm i nepalilang `
              </span>
            </div>
            <div className="mt-10">
              <span className="py-4 px-8 bg-green text-white font-bold rounded-md font-opensans cursor-pointer">
                Try Now
              </span>
            </div>
          </div>
          {/* images  */}
          <div>
            <img
              src="/assets/images/1.png"
              alt="image1"
              className="w-[30rem]"
            />
          </div>
        </div>
      </div>
      {/* gap  */}
      <div className=""></div>
    </div>
  );
}

export default Heading;
