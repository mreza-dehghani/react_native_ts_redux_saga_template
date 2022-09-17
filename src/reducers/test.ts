import { TypeModel } from "./test.model";

const initialState: TypeModel = {
  val_two: 1,
};

const Type = <T>(state = initialState, { type, payload }: any) => {
  switch (type) {
    default:
      return state;
  }
};

export default Type;
