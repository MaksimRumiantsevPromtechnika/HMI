const defaultState = {
  //Информация по ведрам
  buckets: [
    {
        val: 12,//Кол-во молока
        status: "",//Статус молока в ведре
        dateTime: "10:25",//Время наполнения ведра
        id: "5541"//Номер коров 
    },
    {
        val: 8,
        status: "Мастит",
        dateTime: "10:35",
        id: "2422"
    },
    {
        val: "",
        status: "Молозиво",
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
      const updatedBuckets = state.buckets.map((item, index) => {
        if (index === indexToClear) {
          return {};
        }
        return item;
      });
      return { ...state, buckets: updatedBuckets };
    default:
      return state
  }
}

export const clearBucket = (payload) => ({ type: CLEAR_BUCKET, payload })