const defaultState = {
  buckets: [
    {
        val: 12,
        status: "",
        dateTime: "10:25",
        id: "77"
    },
    {
        val: 8,
        status: "Мастит",
        dateTime: "10:35",
        id: "22"
    },
    {
        val: "",
        status: "",
        dateTime: "",
        id: ""
    },
    {
        val: "",
        status: "",
        dateTime: "",
        id: ""
    },
    {
        val: "",
        status: "",
        dateTime: "",
        id: ""
    }
  ]
}

const UPDATE_BUCKET_INFO = "UPDATE_BUCKET_INFO"

export const bucketInfoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_BUCKET_INFO:
      return { ...state, buckets: action.payload}
    default:
      return state
  }
}