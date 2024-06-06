const defaultState = {
  buckets: [
    {
        val: 12,
        status: "",
        dateTime: "10:25",
        id: "5541"
    },
    {
        val: 8,
        status: "Мастит",
        dateTime: "10:35",
        id: "2422"
    },
    {
        val: "",
        status: "Молозево",
        dateTime: "",
        id: "3333"
    },
    {
        val: "",
        status: "Антибиотик",
        dateTime: "",
        id: "4242"
    },
    {
        val: "",
        status: "",
        dateTime: "",
        id: "9876"
    }
  ]
}

const UPDATE_BUCKET_INFO = "UPDATE_BUCKET_INFO"
const CLEAR_BUCKET = "CLEAR_BUCKET"

export const bucketInfoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_BUCKET_INFO:
      return { ...state, buckets: action.payload}
    case CLEAR_BUCKET:
      const indexToClear = (action.payload - 1);
      console.log(action.payload);
      const updatedBuckets = state.buckets.map((item, index) => {
        if (index === indexToClear) {
          return {};
        }
        return item;
      });
      console.log(updatedBuckets);
      return { ...state, buckets: updatedBuckets };
    default:
      return state
  }
}

export const clearBucket = (payload) => ({ type: CLEAR_BUCKET, payload })