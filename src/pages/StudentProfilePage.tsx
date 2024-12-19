import Header from "../components/Header"
const StudentProfile = () => {
  return (
    <div>
      <div><Header /></div>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <p className="text-[#1a2d46] text-lg font-semibold">
              Student Profile
            </p>
            <p className="text-[#1a2d46] opacity-80 text-xs">
              CMS Student Profile
            </p>
          </div>
          <div className="flex text-xs gap-x-6">
            <p>Home {">"}</p>
            <p>Student Profile</p>
          </div>
        </div>

        <div className="border-4 border-t-[#1a2d46] mt-4 shadow-xl rounded p-4 sapce-y-10">
          <h1 className="text-[#1a2d46] font-semibold text-2xl pb-6">
            STUDENT PROFILE
          </h1>

          <div className="pb-10 border-2 border-[#1a2d46] rounded-lg">
            <h3 className="text-center text-base text-[#1a2d46] font-bold pt-2">
              COURSE/PROGRAME DETAILS:
            </h3>

            <div className="md:grid md:grid-cols-6 mx-6">
              <div className="col-span-2 space-y-6">
                <div className="grid grid-cols-2">
                  <p>Form</p>
                  <p>: 333914</p>
                </div>

                <div className="grid grid-cols-2">
                  <p>Admission Year</p>
                  <p>: 2023</p>
                </div>

                <div className="grid grid-cols-2">
                  <p>Registration No.</p>
                  <p>: 2023345345454</p>
                </div>

                <div className="grid grid-cols-2">
                  <p>Course Type</p>
                  <p>: Post Graduate</p>
                </div>
              </div>
              <div className="col-span-3 space-y-6">
                <div className="text-white max-md:hidden">.</div>
                <div className="text-white max-md:hidden">.</div>
                <div className="grid grid-cols-3">
                  <p className="col-span-1">Faculty</p>
                  <p className="col-span-2">
                    : Faculty of commerce and management
                  </p>
                </div>

                <div className="grid grid-cols-3">
                  <p className="col-span-1">Course Name</p>
                  <p className="col-span-2">: MBA {"(banking and finance"}</p>
                </div>
              </div>
              <div className="col-span-1">
                <img
                  src="./passport.jpg"
                  alt=""
                  className="max-md:mt-6 max-md:mb-6 max-md:size-48 max-md:place-self-center md:h-[220px] md:w-full rounded border border-gray-300 object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="text-center text-base text-[#1a2d46] font-bold">
                Personal DETAILS
              </h3>
              <div className="md:grid grid-cols-6 mx-6">
                <div className="col-span-2 space-y-6">
                  <div className="grid grid-cols-2">
                    <p>Name</p>
                    <p>: SHARANJEET SINGH</p>
                  </div>

                  <div className="grid grid-cols-2">
                    <p>Father's Name</p>
                    <p>: PARBINDER SINGH</p>
                  </div>

                  <div className="grid grid-cols-2">
                    <p>Gender</p>
                    <p>: Male</p>
                  </div>

                  <div className="grid grid-cols-2">
                    <p>Fate of Birth</p>
                    <p>: 2002-06-30</p>
                  </div>
                </div>
                <div className="col-span-3 space-y-6">
                  <div className="text-white">.</div>
                  <div className="text-white">.</div>
                  <div className="grid grid-cols-3">
                    <p className="col-span-1">Category</p>
                    <p className="col-span-2">
                      : General
                    </p>
                  </div>

                  <div className="grid grid-cols-3">
                    <p className="col-span-1">Nationality</p>
                    <p className="col-span-2">: Indian</p>
                  </div>
                </div>
                <div className="col-span-1"></div>
              </div>
            </div>

          </div>
            <p className="text-center text-blue-900 text-xs mt-4">Download Id card</p>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
