import React from "react"

const trails = [
  {
    name: "Lollipop",
    status: "green",
    notes: "Some notes",
    updated: "November 16, 10:21pm",
  },
  {
    name: "Candyland",
    status: "red",
    notes:
      "Hiking the trails with snowshoes would help pack down the snow. Use 'em if you got 'em!",
    updated: "November 16, 10:25pm",
  },
  {
    name: "Ninja Squirrel",
    status: "yellow",
    notes: "",
    updated: "November 16, 10:28pm",
  },
  {
    name: "Roller Coaster",
    status: "yellow",
    notes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum expedita quaerat dolorum quod cupiditate officiis numquam alias, nihil, pariatur saepe sapiente vero incidunt nemo enim! Eveniet quia ducimus quam!",
    updated: "November 16, 10:30pm",
  },
]

const Status = ({ status = "green" }) => {
  if (status === "red") {
    return (
      <>
        <div className="w-5 h-5 rounded-full  bg-red-500 inline-block" />{" "}
        <div className="ml-2">Please stay off trail with bikes.</div>
      </>
    )
  } else if (status === "yellow") {
    return (
      <>
        <div className="w-5 h-5 rounded-full  bg-yellow-400 inline-block" />{" "}
        <div className="ml-2">Trail is OK</div>
      </>
    )
  } else {
    return (
      <>
        <div className="w-5 h-5 rounded-full  bg-green-500 inline-block" />{" "}
        <div className="ml-2">Trail is in great condition!</div>
      </>
    )
  }
}

const TrailConditionsWidget = () => {
  return (
    <div className="max-w-2xl lg:max-w-xs lg:ml-3 mt-5 lg:mt-2">
      {/* <div className="font-bold text-2xl text-center italic mb-3">
        Trail Conditions
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 justify-start ">
        {trails.map(({ name, status, notes, updated }) => {
          return (
            <div
              className={`grid  shadow-lg rounded max-w-md ${
                status === "red"
                  ? "bg-red-300"
                  : status === "yellow"
                  ? " bg-yellow-200"
                  : "bg-green-200"
              }`}
            >
              <div className="p-3 grid gap-y-2 text-sm">
                <div className=" font-bold text-lg">{name}</div>
                <div className="flex items-center">
                  <Status status={status} />
                </div>
                {notes && (
                  <div>
                    <div className="font-bold">Notes:</div>
                    <div className="ml-2"> {notes}</div>
                  </div>
                )}
              </div>
              <div className="text-xs text-gray-500  text-right pl-3 pr-2 pb-1 italic ">
                Updated: {updated}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TrailConditionsWidget
